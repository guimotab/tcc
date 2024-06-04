"use client"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import ActivityController from "@/controllers/ActivityController"
import { IVotingActivity } from "@/interfaces/activity/IVotingActivity"
import { useEffect, useState } from "react"

interface VotingProps {
  activityId: string
}

const Voting = ({ activityId }: VotingProps) => {
  const [voting, setVoting] = useState<IVotingActivity>()
  const [canRender, setCanRender] = useState(false)
  useEffect(() => {
    load()
  }, [])

  async function load() {
    const respVote = await ActivityController.getVote(activityId)
    if (respVote.data) {
      setVoting(respVote.data)
      setCanRender(true)
    }
  }

  return canRender && (
    <div className="space-y-6 px-4 py-1 max-w-[60rem] w-full h-full max-h-[30rem]">
      <div>
        <h1 className="text-2xl font-medium">Votação</h1>
        <Label className="text-base">{voting?.title}</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Opções</Label>
        <div className="flex flex-col gap-3">
          {voting?.voteOptions.map(option =>
            <Card className="px-3 py-1">{option}</Card>
          )}
        </div>
        S
      </div>
    </div>
  )
}
export default Voting