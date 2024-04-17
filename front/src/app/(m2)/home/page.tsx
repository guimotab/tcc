"use client"
import Aside from "@/app/(m2)/components/Aside"
import useCurrentUser from "../../../../states/hooks/useCurrentUser"

const Home = () => {
  const currentUser = useCurrentUser()
  return (
    <main className="flex w-screen h-screen">
      <Aside page="home"></Aside>
      <div className="w-full"></div>
    </main>
  )
}
export default Home