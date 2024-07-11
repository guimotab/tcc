"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ActivityController from "@/controllers/ActivityController"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import IUserVote from "@/interfaces/activity/IUserVote"
import { IVotingActivity } from "@/interfaces/activity/IVotingActivity"
import { MyGroupsContext } from "@/providers/MyGroupsContext"
import dayjs from "dayjs"
import { Session } from "next-auth"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"

interface CurrentGroupProps {
  session: Session
}

const CurrentGroup = ({ session }: CurrentGroupProps) => {

  const { groups, users, currentGroupId, usersOnGroup, setMyGroupsContext } = useContext(MyGroupsContext)
  const [currentGroup, setCurrentGroup] = useState<IGroup>()
  const [votes, setVotes] = useState<(IVotingActivity & { userVote: IUserVote[] })[]>()
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    if (currentGroupId) {
      load()
    }
  }, [currentGroupId])

  async function load() {
    const [respGroup, respVote] = await Promise.all([
      GroupController.get(currentGroupId!),
      ActivityController.getAllVoteByGroupId(currentGroupId!)
    ])
    if (respGroup.data && respVote.data) {
      setCurrentGroup(respGroup.data)
      setVotes(respVote.data)
      setCanRender(true)
    }
  }

  function statusVote(vote: IVotingActivity & { userVote: IUserVote[] }) {
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

  return currentGroup && canRender && (
    <div className="flex flex-col items-center my-6 w-full">
      <div className="flex flex-col items-center space-y-3 max-w-[26rem] w-full">
        <Tabs defaultValue="vote" className="w-full">
          <TabsList>
            <TabsTrigger value="task">Task</TabsTrigger>
            <TabsTrigger value="vote">Votação</TabsTrigger>
            <TabsTrigger value="taskDistribution">Distribuição de Tarefas</TabsTrigger>
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
          <TabsContent value="taskDistribution">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
export default CurrentGroup