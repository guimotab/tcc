"use client"

import ActivityController from "@/controllers/ActivityController"
import VotingForm from "./VotingForm"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import ResumeVoting from "./ResumeVoting"
import { VotingActivity } from "@prisma/client"

interface VotingProps {
  activityId: string
  groupId: string
  session: Session
}

const Voting = ({ activityId, groupId, session }: VotingProps) => {
  const [voting, setVoting] = useState<VotingActivity>()
  const [votingFinished, setVotingFinished] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const respVote = await ActivityController.getVote(activityId)
    if (respVote.data) {
      const timeNow = dayjs()
      const timeEndVote = dayjs(respVote.data.endOfVoting)
      const diffTime = timeEndVote.diff(timeNow)
      const wasVotedByCurrentUser = respVote.data.userVote!.find(user => user.userId === session.user.id)
      if (wasVotedByCurrentUser || diffTime < 0) {
        setVotingFinished(true)
      }
      setVoting(respVote.data)
    }
  }

  return voting && (
    <>
      {votingFinished ?
        < ResumeVoting session={session} activityId={activityId} voting={voting} groupId={groupId} />
        :
        < VotingForm session={session} activityId={activityId} voting={voting} groupId={groupId} />

      }
    </>
  )
}

export default Voting