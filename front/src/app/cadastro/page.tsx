"use client"
import SignInForm from "@/components/SignInForm";

const SignIn = () => {
  return (
    <main className="flex h-screen items-center justify-between p-24">
      <div className="w-full border-r h-full">
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        <SignInForm loginPage="/" navigationTo="/home" />
      </div>
    </main>
  );
}
export default SignIn