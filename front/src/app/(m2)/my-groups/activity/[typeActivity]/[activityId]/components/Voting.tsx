"use client"
import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import ActivityController from "@/controllers/ActivityController"
import { IVotingActivity } from "@/interfaces/activity/IVotingActivity"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
interface VotingProps {
  activityId: string
}

interface VoteOfUsers {
  option: string
  usersVote: {
    id: string
    name: string
    imagem?: string
  }[]
}

const Voting = ({ activityId }: VotingProps) => {
  const router = useRouter()
  const [voting, setVoting] = useState<IVotingActivity>()
  const [allUserVote, setAllUserVote] = useState<VoteOfUsers[]>()
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
    const [respVote, respAllUserVotes] = await Promise.all([
      ActivityController.getVote(activityId),
      ActivityController.getAllUsersVotesByVotingId(activityId)
    ])

    if (respVote.data && respAllUserVotes.data) {
      setVoting(respVote.data)
      const voteOfUsers = respVote.data?.voteOptions.map(voteOption => {
        const userVotedThisOption = respAllUserVotes.data!.filter(userVote => {
          return userVote.votedOption.includes(voteOption)
        })
        return {
          option: voteOption,
          usersVote: userVotedThisOption.map(user => ({
            id: user.userId,
            name: user.user.name,
            image: user.user.image
          }))
        }
      }) as VoteOfUsers[]
      setAllUserVote(voteOfUsers)
      setCanRender(true)
    }
  }

  function changeOption(optionChoose: string) {
    const optionFinded = optionsChoose.find(option => option === optionChoose)
    if (optionFinded) {
      return setOptionsChoose(prev => prev.filter(prevOption => prevOption !== optionFinded))
    }

    if (voting?.canMultipleVote) {
      setOptionsChoose(prev => [...prev, optionChoose])
    } else {
      setOptionsChoose([optionChoose])
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
            {allUserVote?.map((vote, index) =>
              <div key={vote.option} className="flex items-center gap-2 w-full">
                <p className="font-medium">{vote.option}:</p>
                <p>{vote.usersVote.length} {vote.usersVote.length === 1 ? "voto" : "votos"}</p>
                {vote.usersVote.length !== 0 &&
                  <HoverCard openDelay={100}>
                    <HoverCardTrigger>
                      <Badge variant={"outline"}>
                        {vote.usersVote.length > 3 ?
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {vote.usersVote.slice(0, 3).map((user, index) =>
                                <AvatarWorker nameFallback={user.name} src={user.imagem} className={`h-5 w-5 z-${index} cursor-default`} sizeText="text-xs" />
                              )}
                            </ div>
                            <Label>{vote.usersVote.length - 3}+</Label>
                          </div>
                          :
                          vote.usersVote.map(user =>
                            <AvatarWorker nameFallback={user.name} src={user.imagem} className="h-5 w-5" sizeText="text-xs" />
                          )
                        }
                      </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent side="right" className="space-y-4">
                      {vote.usersVote.map(user =>
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
        disabled={optionsChoose.length === 0}>Concluir Votação</Button>
    </div >
  )
}
export default Voting