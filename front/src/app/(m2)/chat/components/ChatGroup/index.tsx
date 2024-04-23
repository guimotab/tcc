"use client"
import { useContext, useEffect, useRef, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DataContext } from "../../page"
import IMessage from "@/interfaces/Chats/IMessage"
import ISender from "@/interfaces/Chats/ISender"
import MessagesController from "@/controllers/MessagesController"
import ChatInput from "./ChatInput"
import Messages from "./Messages"
import HeaderGroup from "./HeaderGroup"
import { recordChat } from "@/types/recordChat"
import { setTimeout } from "timers"
import LoadingMessage from "../LoadingMessages"

export interface IChatMessage {
  message: IMessage
  sender: ISender
  chatId: string
}

interface ChatGroupProps {
  socket: Socket<any, any>
}

const ChatGroup = ({ }: ChatGroupProps) => {

  const { currentGroup, groups, currentUsers, chats, setDataContext } = useContext(DataContext)
  const [canRender, setCanRender] = useState(true)
  const [chat, setChat] = useState<IChatMessage[]>([])
  const [isLoadingMessage, setOldestMessageLoaded] = useState(true)
  const socket = io("http://localhost:4000/chat")
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCanRender(false)
    setChat([])
    if (currentGroup && groups && chats) {
      loadSockets()
      loadMessages()
    }
    return () => {
      socket.off("message")
    }
  }, [currentGroup])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [chat])

  function loadMessages() {
    const chatMessage = MessagesController.convertToChatMessages(currentGroup!, chats) as IChatMessage[]
    if (chatMessage) {

      if (chatMessage.length < 4) {
        setChat(chatMessage)
        loadOldestMessages(chatMessage)
      } else {
        setChat(chatMessage)
      }
    }
  }

  async function loadOldestMessages(chatMessage: IChatMessage[]) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const recordedChat = await MessagesController.recordOneChat(currentGroup!, 3, 30)

    if (recordedChat) {
      const oldestChatMessage = MessagesController.convertToChatMessages(currentGroup!, recordedChat) as IChatMessage[]

      const newObj = [{
        [currentGroup!.id]: [
          ...oldestChatMessage,
          ...chatMessage,
        ]
      }] as recordChat[]
      const loadedMessages = MessagesController.convertToChatMessages(currentGroup!, newObj) as IChatMessage[]

      if (loadedMessages) {
        const chatFindedIndex = chats.findIndex(message => message && message[currentGroup!.id])
        chats.splice(chatFindedIndex, 1, ...newObj)
        setOldestMessageLoaded(true)
        setChat(loadedMessages)
        setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers, chats }))
      }
    }
  }

  function loadSockets() {
    socket.emit("join-chat", groups, () => {
      setCanRender(true)
    })

    socket.on("message", ({ message, sender, chatId }: IChatMessage) => createMessage({ message, sender, chatId }))
    setCanRender(true)
  }

  function createMessage({ message, sender, chatId }: IChatMessage) {
    if (chatId === currentGroup!.id) {
      setChat(prev => [...prev, { message, sender, chatId }])
    }
  }

  return currentGroup && (
    <div className="flex flex-col w-full ">

      <HeaderGroup />

      {canRender &&
        <div className="flex flex-col items-center justify-end h-full gap-10 bg-slate-100 p-10 ">
          <ul className="flex flex-col w-full gap-6 max-h-[calc(100vh-(72px+192px))] overflow-auto px-5 ">
            {isLoadingMessage && <LoadingMessage />}
            {chat.map(chat =>
              <Messages key={chat.message.id} createMessage={createMessage} messages={chat} />
            )}
            <div ref={messagesEndRef} />
          </ul>
          <ChatInput />
        </div>
      }
    </div>

  )
}

export default ChatGroup