import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import ActivityController from "@/controllers/ActivityController"
import GroupController from "@/controllers/GroupController"
import UserController from "@/controllers/UserController"
import { IVotingActivity } from "@/interfaces/activity/IVotingActivity"
import IUser from "@/interfaces/IUser"
import IUserOnGroup from "@/interfaces/IUserOnGroup"
import defaultRoles from "@/types/defaultRoles"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { FaArrowLeft } from "react-icons/fa6"

interface VotingProps {
  activityId: string
  voting: IVotingActivity
  session: Session
  groupId: string
}

interface VoteOfUsers {
  usersVote: {
    id: string
    name: string
    role: defaultRoles
    imagem?: string
  }[]
}

const ResumeVoting = ({ activityId, voting, session, groupId }: VotingProps) => {
  const [user, setUser] = useState<IUser & { userOnGroup: IUserOnGroup }>()
  const router = useRouter()
  const [allUserVote, setAllUserVote] = useState<Record<string, VoteOfUsers>>({})
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    load()
    loadDataUser()
  }, [])

  async function loadDataUser() {
    const respUser = await UserController.getUserOnGroup(session.user.id, groupId)
    if (respUser.data) {
      const userData = { ...session.user, userOnGroup: respUser.data } as IUser & { userOnGroup: IUserOnGroup }
      setUser(userData)
    }
  }

  async function deleteVote() {
      const respVote = await ActivityController.deleteVote(activityId)
      if (respVote.resp === "Success") {
        router.push("/my-groups")
      }
  }

  async function load() {
    const [respAllUserVotes] = await Promise.all([
      ActivityController.getAllUsersVotesByVotingId(activityId)
    ])

    if (respAllUserVotes.data) {
      const voteOfUsers = {} as Record<string, VoteOfUsers>

      voting.voteOptions.forEach(voteOption => {

        const userVotedThisOption = respAllUserVotes.data!.filter(userVote => {
          return userVote.votedOption.includes(voteOption)
        })

        voteOfUsers[voteOption] = {
          usersVote: userVotedThisOption.map(user => {
            const currentGroupIndex = user.user.groups.findIndex(group => group.groupId === voting.groupId)
            return {
              id: user.userId,
              name: user.user.name,
              image: user.user.image,
              role: user.user.groups[currentGroupIndex].role as defaultRoles
            }
          })
        }

      })
      setAllUserVote(voteOfUsers)
      setCanRender(true)
    }
  }

  return canRender && user && (
    <div className="flex flex-col gap-6 px-4 py-1 max-w-[60rem] w-full h-full">
      <Button onClick={router.back} size={"sm"} className="flex items-center gap-2 self-start">
        <FaArrowLeft />
        Voltar
      </Button>
      <div>
        <h1 className="text-2xl font-medium">Votação</h1>
        <Label className="text-base">Tema: {voting?.title}</Label>
      </div>

      <div className="flex flex-col gap-2">

        <Label className="text-lg">Votações Realizadas</Label>
        <Card className="px-3 py-2 space-y-2">
          {Object.entries(allUserVote!)?.map(([vote, value], index) =>
            <div key={vote} className="flex items-center gap-2 w-full">
              <p className="font-medium">{vote}:</p>
              <p>{value.usersVote.length} {value.usersVote.length === 1 ? "voto" : "votos"}</p>
              {value.usersVote.length !== 0 &&
                <HoverCard openDelay={100}>
                  <HoverCardTrigger>
                    <Badge variant={"outline"}>
                      {value.usersVote.length > 3 ?
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {value.usersVote.slice(0, 3).map((user, index) =>
                              <AvatarWorker nameFallback={user.name} src={user.imagem} className={`h-5 w-5 z-${index} cursor-default`} sizeText="text-xs" />
                            )}
                          </ div>
                          <Label>{value.usersVote.length - 3}+</Label>
                        </div>
                        :
                        value.usersVote.map(user =>
                          <AvatarWorker nameFallback={user.name} src={user.imagem} className="h-5 w-5" sizeText="text-xs" />
                        )
                      }
                    </Badge>
                  </HoverCardTrigger>
                  <HoverCardContent side="right" className="space-y-4">
                    {value.usersVote.map(user =>
                      <div key={user.id} className="flex items-center gap-2">
                        <AvatarWorker nameFallback={user.name} src={user.imagem} className={`h-5 w-5 z-${index} cursor-default`} sizeText="text-xs" />
                        <Label>{user.name}</Label>
                      </div>
                    )}
                  </HoverCardContent>
                </HoverCard>
              }
            </div>
          )}
        </Card>

      </div>
      {user.userOnGroup.role !== "Usuário" &&
        <Button
          onClick={deleteVote}
          className="mt-3 self-end"
          variant={"destructive"}>
          Excluir Votação
        </Button>
      }
    </div >
  )
}

export default ResumeVoting