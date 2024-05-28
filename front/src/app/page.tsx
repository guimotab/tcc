"use client"
import LoginForm from "@/components/LoginForm";
import "./globals.css";
import { Suspense } from "react";

export default function Login() {

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <body className="flex h-screen items-center justify-between p-24" suppressHydrationWarning>
        <div className="w-full border-r h-full">
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <LoginForm signInPage="/cadastro" navigationTo="/home" />
        </div>
      </body>
    </Suspense>
  );
}
