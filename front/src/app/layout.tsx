import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatWorker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Toaster />
      <NextAuthSessionProvider>
        <body suppressHydrationWarning>
          {children}
        </body>
      </NextAuthSessionProvider>
    </html >
  );
}
