import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dbConnect from "@/lib/dbConnect";
import Message from "@/modal/Message";
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // Guard: make sure email credentials are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("EMAIL_USER or EMAIL_PASS is not set in .env");
            return NextResponse.json(
                { error: "Server email is not configured" },
                { status: 500 }
            );
        }

        // Save to DB first (so the message is never lost even if email fails)
        await dbConnect();
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Gmail SMTP: `from` MUST be the authenticated account.
        // Use `replyTo` so you can reply directly to the visitor.
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // use an App Password, not your Gmail password
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            replyTo: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent:", info.messageId);

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error: any) {
        console.error("Contact form error:", error?.message ?? error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}