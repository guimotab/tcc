import Aside from "@/app/(m2)/components/Aside"
import MyGroups from "./MyGroups"

const Chat = () => {
  return (
    <main className="flex w-screen h-screen">
      <Aside page="myGroups"></Aside>
      <div className="flex justify-center w-full mt-[6rem]">
        <MyGroups />
      </div>
    </main>
  )
}
export default Chat