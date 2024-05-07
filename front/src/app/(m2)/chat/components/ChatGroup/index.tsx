"use client"
import { MutableRefObject, useContext, useEffect, useRef, useState } from "react"
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
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"

interface ChatGroupProps {
}

const ChatGroup = ({ }: ChatGroupProps) => {
  const { currentGroup, groups, currentUsers, recordChats, setDataContext, isAtEndOfChat } = useContext(DataContext)
  const currentUser = useCurrentUser()
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const recordChatClass = new RecordChats(recordChats)
  const [canRender, setCanRender] = useState(true)
  const [chat, setChat] = useState<IChatMessage[]>([])
  const [loadedOldestMessages, setLoadedOldestMessages] = useState(false)

  useEffect(() => {
    if (currentGroup && groups && recordChatClass) {
      setLoadedOldestMessages(true)
      setCanRender(true)
      loadMessages()
    }

  }, [currentGroup])

  useEffect(() => {
    handleScrollToEndPage()
    addNewMessage()
  }, [recordChats])

  useEffect(() => {
    handleScrollToEndPage()
  }, [chat])


  async function loadMessages() {
    const currentChat = recordChatClass.currentChatHistory(currentGroup!)

    // se não há mensagens no chat
    if (!currentChat) {
      setLoadedOldestMessages(false)
      setCanRender(true)
      return setChat([])
    }

    // se as mensagens antigas já foram carregadas ou não
    if (!currentChat.loadedOldMessages) {
      const newCurrentChat = await loadOldMessages(currentChat.chats)
      if (newCurrentChat) {
        setChat(newCurrentChat)
        setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers, recordChats: recordChatClass.recordChats }))
      }
    } else {
      setChat(currentChat.chats)
    }
    setLoadedOldestMessages(false)

    handleScrollToEndPage()
  }

  function handleScrollToEndPage() {
    if (messagesEndRef.current && isAtEndOfChat) {
      const lastMessageIsRead = checkLastMessageWasRead()
      if (!lastMessageIsRead) {
        readNewMessages()
      }
      messagesEndRef.current.scrollIntoView({ behavior: 'instant' })
    }
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
      const loadedMessages = newRecordChat.currentChatHistory(currentGroup!)

      if (loadedMessages) {
        recordChatClass.spliceRecordChat(currentGroup!.id, ...newObj)
        return loadedMessages.chats
      }
    }
  }

  function addNewMessage() {
    //adiciona mensagem nova após terem sido lidas
    const currentChat = recordChatClass.currentChatHistory(currentGroup!)
    if (currentChat) {
      setChat(currentChat.chats)
    }
  }

  async function readNewMessages() {
    const respMessage = await MessagesController.ReadMessages(currentGroup!, currentUser, recordChatClass, chat)

    if (respMessage) {
      setDataContext(prevState => ({ ...prevState, recordChats: recordChatClass.recordChats }))
      setChat(respMessage.chats)
      return respMessage.chats
    }
  }

  function checkLastMessageWasRead() {
    const sizeArrayChat = chat.length
    if (sizeArrayChat) {
      const currentUserIsSender = chat[sizeArrayChat - 1].sender.idUser === currentUser.id
      const lastMessageIsRead = chat[sizeArrayChat - 1].statusMessage.readBy?.find(readBy => readBy.userId === currentUser.id)
      if (!currentUserIsSender && !lastMessageIsRead) {
        return false
      }
    }
    return true
  }

  function handleScroll(event: React.UIEvent<HTMLUListElement, UIEvent>) {
    const scrollTop = event.currentTarget.scrollTop
    const clientHeight = event.currentTarget.clientHeight
    const scrollHeight = event.currentTarget.scrollHeight

    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 200);

    if (isAtBottom) {
      return setDataContext(prev => ({ ...prev, isAtEndOfChat: true }))
    }
    setDataContext(prev => ({ ...prev, isAtEndOfChat: false }))
  }

  return (
    <div className="flex flex-col w-full ">

      <HeaderGroup />

      {canRender &&
        <div className="flex flex-col items-center justify-end h-full bg-slate-100 px-6 pb-10 ">
          <div className="flex flex-col items-center max-w-[70rem] w-full">
            <div className="flex  w-full px-1 scrollbar">
              <ul onScroll={handleScroll}
                className="flex flex-col w-full gap-6 max-h-[calc(100vh-(72px+84px))] overflow-auto px-5 pt-10 ">
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