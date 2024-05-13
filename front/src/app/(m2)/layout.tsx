"use client"
import { Toaster } from "@/components/ui/toaster";
import "../globals.css";
import VerifySession from "@/providers/VerifySession";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="h-screen">
      <VerifySession redirectErrorNoToken="/">
        <Toaster />
        <Suspense fallback={<p>teste...</p>}>
          {children}
        </Suspense>
      </VerifySession>
    </body>
  );
}
