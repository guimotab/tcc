import ActivityController from "@/controllers/ActivityController"
import VotingForm from "./VotingForm"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { Session, getServerSession } from "next-auth"

interface VotingProps {
  activityId: string
}

const Voting = async ({ activityId }: VotingProps) => {
  const session = await getServerSession(nextAuthOptions) as Session
  const userOnGroup = await 
  const voting = await ActivityController.getVote(activityId)
  return voting.data && (
    <VotingForm session={session} activityId={activityId} voting={voting.data} />
  )
}

export default Voting