"use server"
import Aside from "@/app/(m2)/components/Aside"
import Chat from "./Chat"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"

const ChatRoot = async () => {
  const session = await getServerSession(nextAuthOptions)
  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000"
  // const socket = io(`${BACKEND_URL}/chat`)

  return session && (
    <main className="flex h-full overflow-y-hidden">
      <Aside page="chat"></Aside>
      <Chat session={session}/>
    </main>
  )
}
export default ChatRoot