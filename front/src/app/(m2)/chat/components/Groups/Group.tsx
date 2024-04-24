"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../page"
import UserController from "@/controllers/UserController"
import IUser from "@/interfaces/IUser"
import { IChatMessage } from "../ChatGroup"
import { Socket, io } from "socket.io-client"
import { messageResponse } from "@/types/messageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import IGroup from "@/interfaces/IGroup"
import MessagesController from "@/controllers/MessagesController"
import RecordChats from "@/classes/RecordChats"

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
  }
}

interface GroupProps {
  group: IGroup
}

const Group = ({ group }: GroupProps) => {
  const { currentGroup, groups, setDataContext, recordChats, socket } = useContext(DataContext)
  const chats = new RecordChats(recordChats)
  const [lastMessage, setLastMessage] = useState<IChatMessage>()

  useEffect(() => {
    loadMessages()
    handleLastMessage()
    // ideia teste - para receber mensagens de todos os grupos e aparecer notificação, tem que fazer um join em todas os groups.id
  }, [chats])

  function loadMessages() {
    const chatMessage = MessagesController.convertToChatMessages(group, chats, true) as IChatMessage
    if (chatMessage) {
      setLastMessage(chatMessage)
    }
  }

  function handleLastMessage() {
    const lastMessage = chats.returnLastChatMessage(group.id)
    setLastMessage(lastMessage)
  }

  async function handleChooseGroup(idGroup: string) {
    if (currentGroup && idGroup === currentGroup!.id) {
      setDataContext(prevState => ({ ...prevState, currentGroup: undefined, currentUsers: [] }))
      return
    }

    const newCurrentGroup = groups.find(group => group.id === idGroup)

    let currentUsers = [] as IUser[]
    if (newCurrentGroup) {
      const respUsers = await UserController.getAllByGroupId(newCurrentGroup.id)

      if (respUsers.data) {
        currentUsers = respUsers.data.users
        setDataContext(prevState => ({ ...prevState, currentGroup: newCurrentGroup, currentUsers }))
      }
    }

  }

  function formAcronym(word: string) {
    const arrayWords = word.split(" ")
    let acronym: string
    if (arrayWords.length === 1) {
      acronym = arrayWords.at(0)!.charAt(0)
    } else {
      acronym = arrayWords.at(0)!.charAt(0) + arrayWords.at(arrayWords.length - 1)!.charAt(0)
    }
    return acronym.toUpperCase()
  }

  return (
    <>
      <div
        className={`flex justify-between p-4 ${currentGroup && currentGroup.id === group.id ? "bg-gray-50" : "hover:bg-slate-50"} cursor-pointer `}
        onClick={() => handleChooseGroup(group.id)}>
        <div className="flex items-center gap-2 flex-1 max-w-[80%]">
          <Avatar className="">
            <div className={`flex items-center justify-center w-9 h-9 rounded-full `}>
              <AvatarFallback className="bg-slate-200">{formAcronym(group.name)}</AvatarFallback>
            </div>
          </Avatar>
          <div className="w-full">
            <p className="font-medium text-sm w-full">{group.name}</p>
            {lastMessage &&
              <p className="text-sm truncate text-slate-500 w-full"> {lastMessage.sender.name}: {lastMessage.message.content} </p>
            }
          </div>
        </div>
        <p className="text-xs">5 min atrás</p>
      </div>
    </>
  )
}

export default Group