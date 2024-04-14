"use client"
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { RecoilRoot } from "recoil";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster />
      <body suppressHydrationWarning>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html >
  );
}
