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
import RecordChats from "@/classes/RecordChats"

export interface IChatMessage {
  message: IMessage
  sender: ISender
  chatId: string
}

interface ChatGroupProps {
  socket: Socket<any, any>
}

const ChatGroup = ({ }: ChatGroupProps) => {

  const { currentGroup, groups, currentUsers, recordChats, setDataContext, socket } = useContext(DataContext)
  const [canRender, setCanRender] = useState(true)
  const [chat, setChat] = useState<IChatMessage[]>([])
  const [isLoadingMessage, setOldestMessageLoaded] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chats = new RecordChats(recordChats)

  useEffect(() => {
    setCanRender(false)
    setOldestMessageLoaded(false)
    setChat([])
    if (currentGroup && groups && chats) {
      loadSockets()
      loadMessages()
    }
    
  }, [currentGroup, socket])

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
        setOldestMessageLoaded(true)
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
      const newChats = new RecordChats(newObj)
      const loadedMessages = MessagesController.convertToChatMessages(currentGroup!, newChats) as IChatMessage[]

      if (loadedMessages) {
        chats.spliceChat(currentGroup!.id, ...newObj)
        setOldestMessageLoaded(true)
        setChat(loadedMessages)
        setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers, recordChats: chats.chats }))
      }
    }
    setOldestMessageLoaded(false)
  }

  function loadSockets() {
    socket.emit("join-chat", groups)

    setCanRender(true)

  }
  function createMessage({ message, sender, chatId }: IChatMessage) {
    if (chatId === currentGroup!.id) {
      setChat(prev => [...prev, { message, sender, chatId }])
    }
    chats.addRecordChat(chatId, { message, sender, chatId })
    setDataContext(prevState => ({ ...prevState, recordChats: chats.chats }))
  }

  return currentGroup && (
    <div className="flex flex-col w-full ">

      <HeaderGroup />

      {canRender &&
        <div className="flex flex-col items-center justify-end h-full bg-slate-100 px-16 pb-10 ">
          <div className="w-full px-1">
            <ul className="flex flex-col w-full gap-6 max-h-[calc(100vh-(72px+112px))] overflow-auto px-5 pt-10 ">
              {isLoadingMessage && <LoadingMessage />}
              {chat.map(chat =>
                <Messages key={chat.message.id}  messages={chat} />
              )}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <ChatInput />
        </div>
      }
    </div>

  )
}

export default ChatGroup