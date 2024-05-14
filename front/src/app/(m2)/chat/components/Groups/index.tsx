"use client"
import { Separator } from "@/components/ui/separator"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../page"
import Group from "./Group"
import RecordChats from "@/classes/RecordChats"
import IGroup from "@/interfaces/IGroup"
import dayjs from "dayjs"
import { Label } from "@/components/ui/label"

interface GroupsProps {
}

const Groups = ({ }: GroupsProps) => {
  const { groups, recordChats } = useContext(DataContext)
  const recordChatsClass = new RecordChats(recordChats)
  const [groupsOrdenedByTime, setGroupsOrdenedByTime] = useState<IGroup[]>()

  useEffect(() => {
    setGroupsOrdenedByTime(orderGroupsByLastChat())
  }, [recordChats, groups])

  function orderGroupsByLastChat() {
    if (groups) {
      const timeOfGroups = groups.map(group => {
        const lastChatMessage = recordChatsClass.returnLastChatMessage(group)
        let millisecodsMessage =  0
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

  return groups?.length !== 0 && groupsOrdenedByTime && (
    <div className="flex min-w-[16rem] max-w-[25rem] w-full shadow-sm">
      <div className="w-full">
        <div className="px-4 py-6">
          <h1 className="font-semibold">Meus Grupos</h1>
        </div>

        <Separator className="bg-slate-100" />

        <div className="flex flex-col ">
          {groupsOrdenedByTime.map((group, index) =>
            <div key={group.id}>
              <Group group={group} />
              {groupsOrdenedByTime.length - 1 !== index && <Separator className="bg-slate-100" />}
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default Groups