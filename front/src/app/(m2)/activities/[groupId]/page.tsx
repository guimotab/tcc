import Aside from "@/app/(m2)/components/Aside"
import Activities from "./Activities";

const ActivitiesRoot = () => {

  return (
    <main className="flex w-screen h-screen">
      <Aside />
      <div className="flex flex-col items-center w-full py-16 px-10">
        <Activities />
      </div>
    </main>
  )
}
export default ActivitiesRoot