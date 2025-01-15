import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ActivityController from "@/controllers/ActivityController"
import GroupController from "@/controllers/GroupController"
import IUserVote from "@/interfaces/activity/IUserVote"
import { VotingActivity } from "@prisma/client"
import dayjs from "dayjs"
import { Session } from "next-auth"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

interface CurrentGroupProps {
  session: Session
}

const Activities = ({ session }: CurrentGroupProps) => {
  const searchParams = useSearchParams()
  const currentGroupId = searchParams.get("group")
  const [votes, setVotes] = useState<(VotingActivity & { userVote: IUserVote[] })[]>()

  useEffect(() => {
    if (currentGroupId) {
      load()
    }
  }, [currentGroupId])

  async function load() {
    const [respVote] = await Promise.all([
      ActivityController.getAllVoteByGroupId(currentGroupId!)
    ])
    if (respVote.data) {
      setVotes(respVote.data)
    }
  }

  function statusVote(vote: VotingActivity & { userVote: IUserVote[] }) {
    const now = dayjs()
    const endfOfVote = dayjs(vote.endOfVoting)
    const diffTimeVote = endfOfVote.diff(now)

    if (diffTimeVote < 0) {
      return <Label className="text-slate-600 cursor-pointer">Finalizado</Label>
    }

    const findVote = vote.userVote.find(user => user.userId === session.user.id)
    if (findVote) {
      return <Label className="text-green-600 cursor-pointer">Votado</Label>
    }
    return <Label className="text-destructive cursor-pointer">Não Votado</Label>
  }

  return (
    <div className="relative flex flex-col h-full items-center space-y-3 max-w-[26rem] w-full">
      <Link className="absolute self-end top-3" href={`/activities/${currentGroupId}`}>
        <Button size={"sm"}>Criar atividade</Button>
      </Link>
      <Tabs defaultValue="vote" className="w-full">
        <TabsList>
          <TabsTrigger value="task">Tarefas</TabsTrigger>
          <TabsTrigger value="vote">Votação</TabsTrigger>
        </TabsList>
        <TabsContent value="task">Make changes to your account here.</TabsContent>
        <TabsContent value="vote">
          <div className="flex flex-col gap-3">
            {votes?.map(vote =>
              <Link href={`my-groups/${currentGroupId}/activity/voting/${vote.id}`} key={vote.id}>
                <Card className="flex justify-between px-4 py-2 cursor-pointer hover:shadow-md">
                  <div className="flex flex-col gap-1 ">
                    <Label className="text-lg cursor-pointer">{vote.title}</Label>
                    <Label className="cursor-pointer">Limite: {dayjs(vote.endOfVoting).format("DD/MM/YYYY, HH:mm")}h</Label>
                  </div>
                  <div>
                    {statusVote(vote)}
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Activities