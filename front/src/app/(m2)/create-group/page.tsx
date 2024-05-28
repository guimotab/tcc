import Aside from "@/app/(m2)/components/Aside"
import CreateChat from "./CreateChat"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"

const CreateChatRoot = async () => {
  const session = await getServerSession(nextAuthOptions)

  return session && (
    <main className="flex h-screen">
      <Aside page="createGroup" />

      <div className="flex flex-col items-center w-full py-16">
        <CreateChat session={session} />
      </div>

    </main>
  )
}
export default CreateChatRoot