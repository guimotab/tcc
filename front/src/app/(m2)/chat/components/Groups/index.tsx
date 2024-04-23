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
  const { groups } = useContext(DataContext)
  const socket = io("http://localhost:4000/chat")

  useEffect(() => {
    if (groups) {
      handleSockets()
    }

    return () => {
      socket.off("message")
    }
  }, [groups])

  function handleSockets() {
    // ideia teste - para receber mensagens de todos os grupos e aparecer notificação, tem que fazer um join em todas os groups.id
    socket.emit("join-chat", groups, (respMessages: MessageArrayResponse) => {
    })
  }


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