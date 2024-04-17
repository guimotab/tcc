"use client"
import SignInForm from "@/components/SignInForm"

const Signin = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-full">
        <SignInForm loginPage="login" navigationTo="./" />
      </div>
    </main>
  )
}

export default Signin