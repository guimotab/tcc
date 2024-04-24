"use client"
import { Separator } from "@/components/ui/separator"
import { useContext, useEffect } from "react"
import { DataContext } from "../../page"
import { Socket, io } from "socket.io-client"
import { messageResponse } from "@/types/messageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import Group from "./Group"

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
  }
}

interface GroupsProps {
  socket: Socket<any, any>
}

const Groups = ({ }: GroupsProps) => {
  const { groups, socket } = useContext(DataContext)

  return groups && (
    <div className="flex w-fit shadow-sm">
      <div className="w-96 ">

        <div className="px-4 py-6">
          <h1 className="font-semibold">Meus Grupos</h1>
        </div>

        <Separator className="bg-slate-100" />

          <div className="flex flex-col ">
            {groups.map((group, index) =>
              <div key={group.id}>
                <Group group={group} />
                {groups.length - 1 !== index && <Separator className="bg-slate-100" />}
              </div>
            )}
          </div>
      </div>
    </div>
  )
}

export default Groups