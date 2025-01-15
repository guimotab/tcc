import Aside from "@/app/(m2)/components/Aside"

const Home = () => {
  return (
    <main className="grid w-screen h-screen grid-cols-[1fr_auto]">
      <Aside page="home" />
      <div className="w-full"></div>
    </main>
  )
}
export default Home