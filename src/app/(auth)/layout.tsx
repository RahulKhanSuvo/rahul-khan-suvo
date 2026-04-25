import React from 'react';
import { Toaster } from 'react-hot-toast';
import "@/app/globals.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                 <Toaster position="top-right" />
                 {children}
            </body>
        </html>
    );
}
