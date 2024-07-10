import ActivityController from "@/controllers/ActivityController"
import VotingForm from "./VotingForm"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { Session, getServerSession } from "next-auth"

interface VotingProps {
  activityId: string
  groupId: string
}

const Voting = async ({ activityId, groupId }: VotingProps) => {
  const session = await getServerSession(nextAuthOptions) as Session
  const voting = await ActivityController.getVote(activityId)
  return voting.data && (
    <VotingForm session={session} activityId={activityId} voting={voting.data} groupId={groupId}/>
  )
}

export default Voting