"use client"
import "../globals.css";
import { Toaster } from "@/components/ui/sonner";
import VerifySession from "@/providers/VerifySession";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster />

      <body suppressHydrationWarning>
        <Suspense fallback={<p>teste...</p>}>
          <VerifySession>
            {children}
          </VerifySession>
        </Suspense>
      </body>
    </html>
  );
}
