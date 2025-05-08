import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "Developer Portfolio of Rahul Khan Suvo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
