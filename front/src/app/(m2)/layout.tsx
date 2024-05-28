import { Toaster } from "@/components/ui/toaster";
import "../globals.css";
import { Suspense } from "react";
import nextAuthOptions from "@/app/api/nextAuthOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ChatWorker",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions)
  if (!session) {
    redirect("/")
  }

  return (
    <body className="h-screen" suppressHydrationWarning>
      <Toaster />
      <Suspense fallback={<p>teste...</p>}>
        {children}
      </Suspense>
    </body>
  );
}
