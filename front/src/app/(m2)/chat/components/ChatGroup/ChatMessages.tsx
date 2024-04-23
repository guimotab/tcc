"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useContext, useEffect, useState } from "react"
import { io } from "socket.io-client"
import { DataContext } from "../../page"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"
import { IChatMessage } from "."
import MessagesController from "@/controllers/MessagesController"

interface ChatMessagesProps {
  message: IChatMessage
  createMessage({ message, sender, chatId }: IChatMessage): void
}

const ChatMessage = ({ message, createMessage }: ChatMessagesProps) => {
  const currentUser = useCurrentUser()
  const { currentGroup, groups, messages: allMessages } = useContext(DataContext)
  const [messages, setMessages] = useState<IChatMessage[]>([])
  const socket = io("http://localhost:4000/chat")

  useEffect(() => {
    if (currentGroup && groups && allMessages) {
      load()
    }
    return () => {
      socket.off("message")
    }
  }, [currentGroup])


  async function load() {
    const convertedMessage = MessagesController.converterToChatMessage(currentGroup!, allMessages) as IChatMessage[]
    if (convertedMessage) {
      setMessages(convertedMessage)
    }
    socket.on("message", ({ message, sender, chatId }: IChatMessage) => createMessage({ message, sender, chatId }))
  }

  function handleDate(date: Date) {
    const dateMessage = dayjs(date)
    const today = dayjs()
    if (today.format("DD/MM/YYYY") === dateMessage.format("DD/MM/YYYY")) {
      const time = dateMessage.format("HH:mm")
      return time
    }
    const yesterday = dayjs().subtract(1)
    if (yesterday.format("DD/MM/YYYY") === dateMessage.format("DD/MM/YYYY")) {
      const time = dateMessage.format("HH:mm")
      return `ontem, ${time}`
    }

    return `${dateMessage.format("DD/MM/YYYY, HH:mm")}`
  }

  return (
    message.sender.idUser === currentUser.id ?
      <li className="flex w-full gap-4 justify-end">
        <div className="flex flex-col max-h-[10rem] gap-1">
          <div className="flex gap-2.5 self-end">

            <p className="self-end text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</p>
            <p className="text-end font-medium text-gray-700 text-sm">{message.sender.name}</p>
          </div>
          <div className="text-wrap bg-blue-700 h-full max-h-[10rem] max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-2 self-end">
            <p className="text-white">{message.message.content}</p>
          </div>
        </div>
        <Avatar>
          <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
            <AvatarFallback className="bg-slate-300">{formAcronym(message.sender.name)}</AvatarFallback>
          </div>
        </Avatar>
      </li>
      :
      <li className="flex w-full gap-4">
        <Avatar>
          <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
            <AvatarFallback className="bg-slate-300">{formAcronym(message.sender.name)}</AvatarFallback>
          </div>
        </Avatar>
        <div className="flex flex-col h-full max-h-[10rem] gap-1">
          <div className="flex gap-4">
            <p className="font-medium text-gray-700 text-sm">{message.sender.name}</p>
            <p className="self-end text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</p>
          </div>
          <div className="text-wrap bg-white h-full max-h-[10rem] max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-2">
            <p>{message.message.content}</p>
          </div>
        </div>
      </li>
  )
}

export default ChatMessage