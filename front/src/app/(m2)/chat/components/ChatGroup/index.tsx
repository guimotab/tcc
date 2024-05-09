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
import { IChatHistoryLoader } from "@/interfaces/IChatHistoryLoader"

interface ChatGroupProps {
}

const ChatGroup = ({ }: ChatGroupProps) => {
  const { currentGroup, groups, currentUsers, recordChats, setDataContext, isAtEndOfChat } = useContext(DataContext)
  const currentUser = useCurrentUser()
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const recordChatClass = new RecordChats(recordChats)
  const [canRender, setCanRender] = useState(true)
  const [chat, setChat] = useState<IChatMessage[]>([])
  const [isLoadingOldestMessages, setIsLoadingOldestMessages] = useState(false)

  useEffect(() => {
    setChat([])
    if (currentGroup && groups && recordChatClass) {
      setCanRender(true)
      const currentChat = constructMessages()
      if (currentChat && currentChat.hasMoreMessagesToLoad) {
        //entra se não tiver as mensagens não foram carregadas ainda
        setIsLoadingOldestMessages(true)
        loadMoreMessages(currentChat, 20, true, 1000)
      }
    }
  }, [currentGroup])

  useEffect(() => {
    handleScrollToEndPage(true)
    readUnreadMessages(chat)
    addNewMessageToChat()
  }, [recordChats])

  useEffect(() => {
    handleScrollToEndPage(true)
  }, [chat])

  function constructMessages() {
    const currentChat = recordChatClass.currentChatHistory(currentGroup!)

    // se não há mensagens no chat
    if (!currentChat) {
      setIsLoadingOldestMessages(false)
      setCanRender(true)
      return setChat([])
    }

    setChat(currentChat.chats)
    setIsLoadingOldestMessages(false)

    handleScrollToEndPage()
    readUnreadMessages(currentChat.chats)
    return currentChat
  }

  /**
   * Carrega mensagens mais mensagens caso possua mais mensagens para serem carregadas
   * @param currentChatHistory IChatHistoryLoader do chat atual
   * @param quantity quantidade de mensagens que serão carregadas
   * @param scrollToEndPage scrolla para o final da página
   * @param timeResolve tempo mínimo para carregar as mensagens
   */
  async function loadMoreMessages(currentChatHistory: IChatHistoryLoader, quantity: number, scrollToEndPage: boolean, timeResolve: number = 0) {
    // se as mensagens antigas já foram carregadas ou não
    if (currentChatHistory.hasMoreMessagesToLoad) {
      const newCurrentChat = await handleLoadMoreMessages(currentChatHistory.chats, quantity, timeResolve)
      if (newCurrentChat) {
        setChat(newCurrentChat)
        readUnreadMessages(newCurrentChat)
        if (scrollToEndPage) {
          handleScrollToEndPage()
        }
        setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers, recordChats: recordChatClass.recordChats }))
      }
    }
    setIsLoadingOldestMessages(false)
  }


  /**
   * Lida com o carregamento das mensagens
   * @param chatMessage IChatMessage[]
   * @param quantity quantidade de mensagens que serão carregadas
   * @param timeResolve tempo mínimo para carregar as mensagens
   * @returns IChatMessage[] caso possua mensagens antigas, void caso não possua mais mensagens antigas
   */
  async function handleLoadMoreMessages(chatMessage: IChatMessage[], quantity: number, timeResolve: number = 0) {

    const [recordedChat] = await Promise.all([
      await MessagesController.loadOldestMessages(currentGroup!, chatMessage.length, quantity),
      new Promise((resolve) => setTimeout(resolve, timeResolve)),
    ])

    if (recordedChat) {
      // se possui mais mensagens, junta as atuais com as antigas e muda o hasMoreMessagesToLoad para false
      const concatedChat = MessagesController.concatOldestChatWithCurrent(currentGroup!, recordedChat, chatMessage, recordChatClass)
      return concatedChat

    } else {
      //se não possui mensagens, apenas muda o hasMoreMessagesToLoad para false
      const currentChatHistoryLoader = recordChatClass.currentChatHistory(currentGroup!)

      if (currentChatHistoryLoader) {
        const { chats } = currentChatHistoryLoader
        const newRecordChat = { [currentGroup!.id]: { chats, hasMoreMessagesToLoad: false } }
        recordChatClass.spliceRecordChat(currentGroup!.id, newRecordChat)
        setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers, recordChats: recordChatClass.recordChats }))
      }

    }
  }

  function readUnreadMessages(chats: IChatMessage[]) {
    const lastMessageIsRead = checkLastMessageWasRead(chats)
    if (!lastMessageIsRead) {
      readNewMessages(chats)
    }
  }

  function handleScrollToEndPage(scrollOnlyIfIsAtEndOfChat: boolean = false) {
    if (messagesEndRef.current) {
      //scrollOnlyIfIsAtEndOfChat: scroll apenas se está no fim da página
      if (scrollOnlyIfIsAtEndOfChat && isAtEndOfChat) {
        console.log("🚀 ~ handleScrollToEndPage ~ isAtEndOfChat:", isAtEndOfChat)
        return messagesEndRef.current.scrollIntoView({ behavior: 'instant' })
      }
      messagesEndRef.current.scrollIntoView({ behavior: 'instant' })
    }
  }

  function addNewMessageToChat() {
    //adiciona mensagem nova após terem sido lidas
    const currentChat = recordChatClass.currentChatHistory(currentGroup!)
    if (currentChat) {
      setChat(currentChat.chats)
    }
  }

  async function readNewMessages(chats: IChatMessage[]) {
    const respMessage = await MessagesController.ReadMessages(currentGroup!, currentUser, recordChatClass, chats)

    if (respMessage) {
      setDataContext(prevState => ({ ...prevState, recordChats: recordChatClass.recordChats }))
      setChat(respMessage.chats)
      return respMessage.chats
    }
  }

  function checkLastMessageWasRead(chats: IChatMessage[]) {
    const sizeArrayChat = chats.length
    if (sizeArrayChat) {
      const currentUserIsSender = chats[sizeArrayChat - 1].sender.idUser === currentUser.id
      const lastMessageIsRead = chats[sizeArrayChat - 1].statusMessage.readBy?.find(readBy => readBy.userId === currentUser.id)
      if (!currentUserIsSender && !lastMessageIsRead) {
        return false
      }
    }
    return true
  }

  async function handleScroll(event: React.UIEvent<HTMLUListElement, UIEvent>) {
    const scrollTop = event.currentTarget.scrollTop
    const clientHeight = event.currentTarget.clientHeight
    const scrollHeight = event.currentTarget.scrollHeight

    const isAtBottom = (scrollTop + clientHeight) >= (scrollHeight - 200);

    if (isAtBottom) {
      return setDataContext(prev => ({ ...prev, isAtEndOfChat: true }))
    }

    const isAtTop = (scrollTop + clientHeight) <= (880);

    if (isAtTop) {
      const currentChat = recordChatClass.currentChatHistory(currentGroup!)

      if (currentChat && currentChat?.hasMoreMessagesToLoad) {
        setIsLoadingOldestMessages(true)
        loadMoreMessages(currentChat, 20, false)
      }
    }
    setDataContext(prev => ({ ...prev, isAtEndOfChat: false }))
  }

  return (
    <div className="flex flex-col w-full  min-w-[30rem]">

      <HeaderGroup />

      {canRender &&
        <div className="flex justify-center w-full bg-slate-100 px-6 pb-10">
          <div className="flex flex-col justify-end max-w-[70rem] scrollbar h-[calc(100vh-(72px+40px))]  w-full">

            <ul onScroll={handleScroll}
              className={`flex flex-col w-full max-h-[calc(100vh-(72px))] gap-6 overflow-y-auto overflow-x-hidden px-5 pt-6`}>
              {isLoadingOldestMessages && <LoadingMessage />}
              {chat.map(message =>
                <Message key={message.message.id} message={message} />
              )}
              <div ref={messagesEndRef} />
            </ul>

            <ChatInput />

          </div>
        </div>

      }
    </div>

  )
}

export default ChatGroup