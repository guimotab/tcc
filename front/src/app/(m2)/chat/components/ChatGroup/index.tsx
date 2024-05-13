"use client"
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { DataContext } from "../../page"
import MessagesController from "@/controllers/MessagesController"
import ChatInput from "./ChatInput"
import Message from "./Messages"
import HeaderGroup from "./HeaderGroup"
import { setTimeout } from "timers"
import LoadingMessage from "../LoadingMessages"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"
import { IRecordChat } from "@/interfaces/IRecordChat"

interface ChatGroupProps {
}

const ChatGroup = ({ }: ChatGroupProps) => {
  const { currentGroup, groups, recordChats, setDataContext, isAtEndOfChat } = useContext(DataContext)
  const currentUser = useCurrentUser()
  const scrollChatRef = useRef<HTMLUListElement | null>(null)
  const recordChatClass = new RecordChats(recordChats)
  const [messages, setMessages] = useState<IChatMessage[]>([])
  const [isLoadingOldestMessages, setIsLoadingOldestMessages] = useState(false)

  useEffect(() => {
    setMessages([])
    if (currentGroup && groups && recordChatClass) {
      const currentChat = constructMessages()
      if (currentChat && currentChat.hasMoreMessagesToLoad) {
        //entra se não tiver as mensagens não foram carregadas ainda
        setIsLoadingOldestMessages(true)
        loadMoreMessages(currentChat, 20, 1000)
      }
    }
    handleScrollEndPage()
  }, [currentGroup])

  useEffect(() => {
    handleScrollEndPage(true)
    readUnreadMessages(messages)
    addNewMessageToChat()
    findCurrentMessages()
  }, [recordChats])

  useLayoutEffect(() => {
    handleScrollEndPage(true)
  }, [messages])

  function findCurrentMessages() {
    const currentRecordChat = recordChatClass.currentRecordChat(currentGroup!)
    if (currentRecordChat && currentGroup && (currentGroup.id === currentRecordChat.groupId)) {
      if (isLoadingOldestMessages) {
        setIsLoadingOldestMessages(false)
      }
      setMessages(currentRecordChat.chats)
    }
  }

  function constructMessages() {
    const currentChat = recordChatClass.currentRecordChat(currentGroup!)

    // se não há mensagens no chat
    if (!currentChat) {
      setIsLoadingOldestMessages(false)
      return setMessages([])
    }

    setMessages(currentChat.chats)
    setIsLoadingOldestMessages(false)

    readUnreadMessages(currentChat.chats)
    return currentChat
  }

  /**
   * Carrega mensagens mais mensagens caso possua mais mensagens para serem carregadas
   * @param currentChatHistory IChatHistoryLoader do chat atual
   * @param quantity quantidade de mensagens que serão carregadas
   * @param timeResolve tempo mínimo para carregar as mensagens
   */
  async function loadMoreMessages(currentChatHistory: IRecordChat, quantity: number, timeResolve: number = 0) {
    // se as mensagens antigas já foram carregadas ou não
    if (currentChatHistory.hasMoreMessagesToLoad) {
      const newCurrentChat = await handleLoadMoreMessages(currentChatHistory.chats, quantity, timeResolve)
      if (newCurrentChat && currentGroup?.id === currentChatHistory.groupId) {
        // setMessages(newCurrentChat)
        readUnreadMessages(newCurrentChat)
      }
      setDataContext(prevState => ({ ...prevState, recordChats: recordChatClass.recordChats }))
    }
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
      const currentChatHistoryLoader = recordChatClass.currentRecordChat(currentGroup!)

      if (currentChatHistoryLoader) {
        const { chats } = currentChatHistoryLoader
        const newRecordChat = { groupId: currentGroup!.id, chats, hasMoreMessagesToLoad: false } as IRecordChat
        recordChatClass.spliceRecordChat(currentGroup!.id, newRecordChat)
      }
    }
  }

  function readUnreadMessages(chats: IChatMessage[]) {
    const lastMessageIsRead = checkLastMessageWasRead(chats)
    if (!lastMessageIsRead) {
      readNewMessages(chats)
    }
  }

  function handleScrollEndPage(scrollOnlyIfIsAtEndOfChat: boolean = false) {
    if (scrollChatRef.current) {
      //scrollOnlyIfIsAtEndOfChat: scroll apenas se está no fim da página 
      if (scrollOnlyIfIsAtEndOfChat && isAtEndOfChat) {
        return scrollChatRef.current.scrollTop = scrollChatRef.current.scrollHeight
      }

      if (!scrollOnlyIfIsAtEndOfChat) {
        return scrollChatRef.current.scrollTop = scrollChatRef.current.scrollHeight
      }
    }
  }

  async function keepScrollAfterRequest(request: () => Promise<void>) {
    //mantém o scroll após fazer uma requisão que carregue mensagens
    if (scrollChatRef.current) {
      const previousScrollHeight = scrollChatRef.current.scrollHeight;
      const previousScrollTop = scrollChatRef.current.scrollTop;

      await request()

      // Aguardar um pouco para que o DOM atualize com as novas mensagens
      requestAnimationFrame(() => {
        const currentScrollHeight = scrollChatRef.current!.scrollHeight;

        // Calcular a diferença de altura
        const heightDifference = currentScrollHeight - previousScrollHeight;

        // Ajustar a posição do scroll para manter o mesmo conteúdo visível
        scrollChatRef.current!.scrollTop = previousScrollTop + heightDifference - 100; // - 100 é específico desse sistema
      });
    }

  }

  function addNewMessageToChat() {
    //adiciona mensagem novas mensagens ao chat
    const currentChat = recordChatClass.currentRecordChat(currentGroup!)
    if (currentChat) {
      setMessages(currentChat.chats)
    }
  }

  async function readNewMessages(chats: IChatMessage[]) {
    const respMessage = await MessagesController.ReadMessages(currentGroup!, currentUser, recordChatClass, chats)

    if (respMessage) {
      setDataContext(prevState => ({ ...prevState, recordChats: recordChatClass.recordChats }))
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
      const currentChat = recordChatClass.currentRecordChat(currentGroup!)

      if (currentChat?.hasMoreMessagesToLoad && !isLoadingOldestMessages) {
        setIsLoadingOldestMessages(true)
        keepScrollAfterRequest(() => loadMoreMessages(currentChat, 20, 1000))
      }
    }
    setDataContext(prev => ({ ...prev, isAtEndOfChat: false }))
  }

  return (
    <div className="flex flex-col w-full  min-w-[30rem]">

      <HeaderGroup />

      <div className="flex justify-center w-full bg-slate-100 px-6 pb-10">
        <div className="flex flex-col justify-end max-w-[70rem] scrollbar h-[calc(100vh-(72px+40px))]  w-full">
          <ul onScroll={handleScroll}
            ref={scrollChatRef}
            className={`flex flex-col w-full max-h-[calc(100vh-(72px))] gap-6 overflow-y-auto overflow-x-hidden px-5 py-7`}>
            {isLoadingOldestMessages && <LoadingMessage />}
            {messages.map(message =>
              <Message key={message.message.id} message={message} />
            )}
          </ul>

          <ChatInput />

        </div>
      </div>
      
    </div>

  )
}

export default ChatGroup