"use client"
import { useContext, useEffect, useRef, useState } from "react"
import { Socket, io } from "socket.io-client"
import { DataContext } from "../../page"
import MessagesController from "@/controllers/MessagesController"
import ChatInput from "./ChatInput"
import Message from "./Message"
import HeaderGroup from "./HeaderGroup"
import { recordChat } from "@/types/recordChat"
import { setTimeout } from "timers"
import LoadingMessage from "../LoadingMessages"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"
import { IChatHistoryLoader } from "@/interfaces/IChatHistoryLoader"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"

interface ChatGroupProps {
}

const ChatGroup = ({ }: ChatGroupProps) => {

  const { currentGroup, groups, currentUsers, recordChats, setDataContext } = useContext(DataContext)
  const currentUser = useCurrentUser()
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chats = new RecordChats(recordChats)
  const [canRender, setCanRender] = useState(true)
  const [chat, setChat] = useState<IChatMessage[]>([])
  const [loadedOldestMessages, setLoadedOldestMessages] = useState(false)

  useEffect(() => {
    setCanRender(false)
    setLoadedOldestMessages(false)
    setChat([])
    if (currentGroup && groups && chats) {
      loadMessages()
    }
  }, [currentGroup])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'instant' });
    }
  }, [chats])

  function loadMessages() {
    const currentChat = chats.currentChat(currentGroup!, true) as IChatHistoryLoader | undefined
    if (!currentChat) {
      return
    }

    if (!currentChat.loadedOldMessages) {
      setChat(currentChat.chats)
      loadOldMessages(currentChat.chats)
      setLoadedOldestMessages(true)
    } else {
      setChat(currentChat.chats)
    }
    setCanRender(true)
  }

  async function loadOldMessages(chatMessage: IChatMessage[]) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const recordedChat = await MessagesController.transformOneChatToRecord(currentGroup!, 3, 30)

    if (recordedChat) {
      const oldestChatMessage = recordedChat[currentGroup!.id].chats

      const newObj = [{
        [currentGroup!.id]: {
          chats: [
            ...oldestChatMessage,
            ...chatMessage,
          ],
          loadedOldMessages: true
        }
      }] as recordChat[]
      const newRecordChat = new RecordChats(newObj)
      const loadedMessages = newRecordChat.currentChat(currentGroup!, true) as IChatHistoryLoader | undefined

      if (loadedMessages) {
        chats.spliceChat(currentGroup!.id, ...newObj)
        setLoadedOldestMessages(true)
        setChat(loadedMessages.chats)
        setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers, recordChats: chats.recordChats }))
      }
    }

    setLoadedOldestMessages(false)
  }

  return currentGroup && (
    <div className="flex flex-col w-full ">

      <HeaderGroup />

      {canRender &&
        <div className="flex flex-col items-center justify-end h-full bg-slate-100 px-6 pb-10 ">
          <div className="flex flex-col items-center max-w-[70rem] w-full">
            <div className="flex  w-full px-1 scrollbar">
              <ul className="flex flex-col w-full gap-6 max-h-[calc(100vh-(72px+84px))] overflow-auto  px-5 pt-10 ">
                {loadedOldestMessages && <LoadingMessage />}
                {chat.map(message =>
                  <Message key={message.message.id} message={message} />
                )}
                <div ref={messagesEndRef} />
              </ul>
            </div>
            <ChatInput />
            
          </div>
        </div>
      }
    </div>

  )
}

export default ChatGroup