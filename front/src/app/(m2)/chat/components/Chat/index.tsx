"use client"
import { useContext, useEffect, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DataContext } from "../../page"
import IMessage from "@/interfaces/Chats/IMessage"
import ISender from "@/interfaces/Chats/ISender"
import MessagesController from "@/controllers/MessagesController"
import HeaderGroup from "../ChatGroup/HeaderGroup"
import ChatInput from "../ChatGroup/ChatInput"
import ChatMessage from "../ChatGroup/ChatMessages"

export interface IChatMessage {
  message: IMessage
  sender: ISender
  chatId: string
}

interface ChatGroupProps {
  socket: Socket<any, any>
}

const ChatGroup = ({ }: ChatGroupProps) => {
  const { currentGroup, groups, chats: allMessages, setDataContext } = useContext(DataContext)
  const [canRender, setCanRender] = useState(true)
  const [messages, setMessages] = useState<IChatMessage[]>([])
  const socket = io("http://localhost:4000/chat")

  useEffect(() => {
    setCanRender(false)
    setMessages([])
    if (currentGroup && groups && allMessages) {
      load()
      loadMessages()
    }
    return () => {
      socket.off("message")
    }
  }, [currentGroup])

  function loadMessages() {
    const chatMessage = MessagesController.convertToChatMessages(currentGroup!, allMessages) as IChatMessage[]
    if (chatMessage) {
      setMessages(chatMessage)
    }
  }

  function load() {
    // socket.emit("join-chat", groups, () => {
    //   setCanRender(true)
    // })

    socket.on("message", ({ message, sender, chatId }: IChatMessage) => createMessage({ message, sender, chatId }))
    setCanRender(true)
  }

  function createMessage({ message, sender, chatId }: IChatMessage) {
    if (chatId === currentGroup!.id) {
      setMessages(prev => [...prev, { message, sender, chatId }])
    }
  }

  return currentGroup && (
    <div className="flex flex-col flex-1 max-h-screen">

      <HeaderGroup />

      {canRender &&
        <div className="flex flex-col items-center justify-between h-full bg-slate-100 p-10">
          <ul className="flex flex-col max-w-[80rem] w-full h-full justify-end py-10 gap-6">
            {messages.map(message =>
              <ChatMessage key={message.message.id} createMessage={createMessage} message={message} />
            )}
          </ul>
          <ChatInput />
        </div>
      }
    </div>

  )
}

export default ChatGroup