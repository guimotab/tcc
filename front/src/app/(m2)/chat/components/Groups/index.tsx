"use client"
import { Separator } from "@/components/ui/separator"
import { useContext, useEffect, useState } from "react"
import Group from "./Group"
import RecordChats from "@/classes/RecordChats"
import IGroup from "@/interfaces/IGroup"
import dayjs from "dayjs"
import { Session } from "next-auth"
import { ChatContext } from "@/providers/ChatContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"

interface GroupsProps {
  session: Session
}

const Groups = ({ session }: GroupsProps) => {
  const { groups, recordChats } = useContext(ChatContext)
  const recordChatsClass = new RecordChats(recordChats)
  const [groupsOrdenedByTime, setGroupsOrdenedByTime] = useState<IGroup[]>()

  useEffect(() => {
    setGroupsOrdenedByTime(orderGroupsByLastChat())
  }, [recordChats, groups])

  function orderGroupsByLastChat() {
    if (groups) {
      const timeOfGroups = groups.map(group => {
        const lastChatMessage = recordChatsClass.returnLastChatMessage(group)
        let millisecodsMessage = 0
        if (lastChatMessage) {
          millisecodsMessage = dayjs(lastChatMessage?.message.createdAt).valueOf()
        }

        return {
          group,
          millisecondsTimeMessage: millisecodsMessage
        }
      })
      const timeOfGroupsSorted = timeOfGroups.sort((chatA, chatB) => chatA.millisecondsTimeMessage - chatB.millisecondsTimeMessage).reverse()
      return timeOfGroupsSorted.map(group => group.group)
    }
  }

  return (
    <div className="flex min-w-[16rem] max-w-[25rem] w-full shadow-sm">
      <div className="w-full">
        <div className="flex justify-between items-center px-4 py-5">
          <h1 className="font-semibold">Meus Grupos</h1>
          <Link href={"/create-group?step=1"}>
            <Button size="sm">Novo Grupo</Button>
          </Link>
        </div>

        <Separator className="bg-slate-100" />

        {groups?.length !== 0 && groupsOrdenedByTime ?
          <div className="flex flex-col ">
            {groupsOrdenedByTime.map((group, index) =>
              <div key={group.id}>
                <Group group={group} session={session} />
                {groupsOrdenedByTime.length - 1 !== index && <Separator className="bg-slate-100" />}
              </div>
            )}
          </div>
          :
          <div className="flex flex-col gap-9 w-full px-4 py-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-9 rounded-full" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-9 rounded-full" />
              <Skeleton className="w-full h-6" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-9 rounded-full" />
              <Skeleton className="w-full h-6" />
            </div>
          </div>
        }
      </div>
    </div >
  )
}

export default Groups