"use client"
import Aside from "@/app/(m2)/components/Aside"
import Groups from "./components/Groups"
import ChatGroup from "./components/ChatGroup"
import useCurrentUser from "../../../../states/hooks/useCurrentUser"
import { Suspense, useEffect, useState } from "react"
import IGroup from "@/interfaces/IGroup"
import GroupController from "@/controllers/GroupController"
import ResolveResponses from "@/utils/resolveResponseErrors"
import { toast } from "sonner"
import IUser from "@/interfaces/IUser"
import { io } from "socket.io-client"
import MessagesController from "@/controllers/MessagesController"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"
import { IRecordChat } from "@/interfaces/IRecordChat"
import NoGroups from "./components/NoGroups"
import env from "dotenv"
import { IMessageContext, MessageContext } from "@/providers/MessageContext"

env.config()

const Chat = () => {
  const currentUser = useCurrentUser()
  const [canRender, setCanRender] = useState(false)
  const [messageContext, setMessageContext] = useState({} as IMessageContext)
  const [isAtEndOfChat, setIsAtEndOfChat] = useState(true)
  const urlBack = process.env.NEXT_PUBLIC_URL_BACKEND || "http://10.20.12.118:4000"
  const socket = io(`${urlBack}/chat`)

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (messageContext.groups && messageContext.recordChats) {
      handleSockets(messageContext.groups, messageContext.recordChats)
      return () => {
        socket.off("message")
        socket.disconnect()
      }
    }
  }, [messageContext])

  async function load() {
    const respGroup = await GroupController.getAllByUserId(currentUser.id)
    if (respGroup.resp === "Success" && respGroup.data) {
      const groups = respGroup.data.groups
      const userOnGroups = respGroup.data.userOnGroups
      const currentGroup = undefined
      let currentUsers = [] as IUser[]

      setCanRender(true)

      const recordChats = await MessagesController.tranformAllChatsToRecord(groups, 0, 3)

      setMessageContext({
        groups,
        userOnGroups,
        currentGroup,
        currentUsers,
        recordChats,
        socket,
        isAtEndOfChat,
        setDataContext: setMessageContext
      })
    } else {
      const errorResponse = new ResolveResponses(respGroup.resp)
      createToast(errorResponse)
    }
  }

  function handleSockets(groups: IGroup[], recordChats: IRecordChat[]) {
    socket.emit("join-chat", groups)
    socket.on("message", ({ message, sender, chatId, statusMessage }: IChatMessage) => listenerNewMessage({ message, sender, chatId, statusMessage }, recordChats))
  }

  function listenerNewMessage({ message, sender, chatId, statusMessage }: IChatMessage, recordChats: IRecordChat[]) {
    const recordChatsClass = new RecordChats(recordChats)
    recordChatsClass.addRecordChat(chatId, { message, sender, chatId, statusMessage })
    const newRecordChat = [...recordChatsClass.recordChats]
    setMessageContext(prevState => ({ ...prevState, recordChats: newRecordChat }))
  }

  function createToast(errorResponse: ResolveResponses) {
    const { title, description } = errorResponse.resolveResponse()
    toast(title, {
      description: description,
      action: {
        label: "Entendi",
        onClick: () => "",
      },
    })
  }

  return (
    <main className="flex h-full overflow-y-hidden">
      <Aside page="chat"></Aside>

      <MessageContext.Provider value={messageContext}>
        <Suspense fallback={<p>Carregando...</p>}>
          {canRender &&
            (messageContext.groups?.length !== 0 ?
              <>
                <Groups />
                {messageContext.currentGroup && <ChatGroup />}
              </>
              :
              <NoGroups />
            )
          }
        </Suspense>
      </MessageContext.Provider>
    </main>
  )
}
export default Chat