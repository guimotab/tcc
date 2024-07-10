import Aside from "@/app/(m2)/components/Aside"
import TypeActivity from "@/types/TypeActivities"
import Voting from "./components/Voting"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"

interface IParamsActivity {
  params: {
    typeActivity: string
    activityId: string
    groupId: string
  }
}

const Activity = async ({ params }: IParamsActivity) => {
  const session = await getServerSession(nextAuthOptions)

  const typeActivity = params.typeActivity as TypeActivity
  const activityId = params.activityId
  const groupId = params.groupId

  return session && (
    <main className="flex w-screen h-screen">
      <Aside page="myGroups" />
      <div className="flex justify-center w-full mt-[6rem]">
        {typeActivity === "voting" && <Voting activityId={activityId} groupId={groupId}/>}
      </div>
    </main>
  )
}

export default Activity