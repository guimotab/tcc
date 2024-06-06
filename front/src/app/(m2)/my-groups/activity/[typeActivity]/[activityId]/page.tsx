import Aside from "@/app/(m2)/components/Aside"
import Voting from "./components/Voting"
import TypeActivity from "@/types/TypeActivities"

interface IParamsActivity {
  params: {
    typeActivity: string
    activityId: string
  }
}

const Activity = ({ params }: IParamsActivity) => {

  const typeActivity = params.typeActivity as TypeActivity
  const activityId = params.activityId

  return (
    <main className="flex w-screen h-screen">
      <Aside page="myGroups" />
      <div className="flex justify-center w-full mt-[6rem]">
        {typeActivity === "voting" && <Voting activityId={activityId}/>}
      </div>
    </main>
  )
}

export default Activity