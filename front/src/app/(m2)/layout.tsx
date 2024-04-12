import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

interface PrivateLauyoutProps {
  children: ReactNode
}
const PrivateLauyout = async ({ children }: PrivateLauyoutProps) => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/")
  }
  return <>{children}</>
}
export default PrivateLauyout