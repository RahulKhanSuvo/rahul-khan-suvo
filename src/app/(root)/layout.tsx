import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import { Toaster } from "react-hot-toast";
import ScrollProgressBar from "@/components/Animation/ScrollProgressBar";
import MouseEffect from "@/components/Animation/MouseEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "Developer Portfolio of Rahul Khan Suvo",
};

import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased `} suppressHydrationWarning>
        <ScrollProgressBar />
        <MouseEffect />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              padding: "12px 16px",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#f0fdf4",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fee2e2",
              },
            },
          }}
        />

        <ThemeToggle />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
