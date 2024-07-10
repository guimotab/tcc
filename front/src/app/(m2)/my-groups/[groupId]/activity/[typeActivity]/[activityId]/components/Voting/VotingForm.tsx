"use client"
import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import ActivityController from "@/controllers/ActivityController"
import GroupController from "@/controllers/GroupController"
import { IVotingActivity } from "@/interfaces/activity/IVotingActivity"
import defaultRoles from "@/types/defaultRoles"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
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

const VotingForm = ({ activityId, voting, session, groupId }: VotingProps) => {
  const user = session.user
  const router = useRouter()
  const [allUserVote, setAllUserVote] = useState<Record<string, VoteOfUsers>>({})
  const [canRender, setCanRender] = useState(false)
  const [optionsChoose, setOptionsChoose] = useState<string[]>([])

  useEffect(() => {
    load()
  }, [])

  function submitVote() {
    if (optionsChoose.length === 0) {

    } else {

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
            const currentGroupIndex = user.user.groups.findIndex(group => group.id === voting.groupId)
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

  async function changeOption(optionChoose: string) {
    const optionFinded = optionsChoose.find(option => option === optionChoose)
    const fakeAllUserVote = { ...allUserVote }
    const usersOnGroup = await GroupController.getAllByUserId(user.id)
    if (usersOnGroup.data) {
      const thisUserFound = usersOnGroup.data.userOnGroups.find(thisUser => thisUser.groupId === groupId && thisUser.userId === user.id)

      if (thisUserFound) {
        if (optionFinded) {
          fakeAllUserVote[optionChoose].usersVote = allUserVote[optionsChoose[0]].usersVote.filter(user => user.id !== user.id)
          return setOptionsChoose(prev => prev.filter(prevOption => prevOption !== optionFinded))
        }

        if (voting?.canMultipleVote) {
          //falta considerar peso do voto de cargos
          fakeAllUserVote[optionChoose].usersVote.push({ id: user.id, name: user.name, imagem: user.image, role: thisUserFound.role as defaultRoles })
          setOptionsChoose(prev => [...prev, optionChoose])
        } else {
          //falta considerar peso do voto de cargos
          if (optionsChoose[0]) {
            fakeAllUserVote[optionsChoose[0]].usersVote = allUserVote[optionsChoose[0]].usersVote.filter(user => user.id !== user.id)
          }
          fakeAllUserVote[optionChoose].usersVote.push({ id: user.id, name: user.name, imagem: user.image, role: thisUserFound.role as defaultRoles })
          setAllUserVote(fakeAllUserVote)
          setOptionsChoose([optionChoose])
        }
      }
    }
  }


  return canRender && (
    <div className="space-y-6 px-4 py-1 max-w-[60rem] w-full h-full">
      <Button onClick={router.back} size={"sm"} className="flex items-center gap-2">
        <FaArrowLeft />
        Voltar
      </Button>
      <div>
        <h1 className="text-2xl font-medium">Votação</h1>
        <Label className="text-base">Tema: {voting?.title}</Label>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-2 w-full">
          <Label>Opções</Label>
          <div className="flex flex-col gap-3">
            {voting?.voteOptions.map((option, index) =>
              <div key={option} onClick={() => changeOption(option)} className={`flex items-center gap-3 w-full cursor-pointer`}>
                <Card className={`px-3 py-1 w-full ${optionsChoose.includes(option) && "border-blue-400 bg-blue-50"}`}>{option}</Card>
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
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
      </div>
      <Button
        onClick={submitVote}
        className="mt-3 w-full"
        variant={optionsChoose.length !== 0 ? "default" : "outline"}
        disabled={optionsChoose.length === 0}>Finalizar Votação</Button>
    </div >
  )
}
export default VotingForm