import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dbConnect from "@/lib/dbConnect";
import Message from "@/modal/Message";
export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const { name, email, message } = body
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }
        await dbConnect();
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        const mailOptions = {
            from: `"${name}" < ${email}>`,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
    }
}