import Aside from "@/app/(m2)/components/Aside"
import MyGroups from "./MyGroups"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"

const Chat = async () => {
  const session = await getServerSession(nextAuthOptions)

  return session && (
    <main className="flex w-screen h-screen">
      <Aside page="myGroups" />
      <div className="flex justify-center w-full mt-[6rem]">
        <MyGroups session={session}/>
      </div>
    </main>
  )
}
export default Chat