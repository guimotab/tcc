"use client"
import LoginForm from "@/components/LoginForm"

const Login = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center w-full">
        <LoginForm signInPage="signin" navigationTo="./" />
      </div>
    </main>
  )
}

export default Login