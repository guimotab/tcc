"use client"
import Aside from "@/app/(m2)/components/Aside"
import Groups from "./components/Groups"
import ChatGroup from "./components/ChatGroup"
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
import { ChatContext, IChatContext } from "@/providers/ChatContext"
import { Session } from "next-auth"

interface ChatProps {
  session: Session
}

const Chat = ({ session }: ChatProps) => {
  const [canRender, setCanRender] = useState(false)
  const [dataContext, setDataContext] = useState({} as IChatContext)
  const [isAtEndOfChat, setIsAtEndOfChat] = useState(true)
  const socket = io("http://localhost:4000/chat")

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (dataContext.groups && dataContext.recordChats) {
      handleSockets(dataContext.groups, dataContext.recordChats)
      return () => {
        socket.off("message")
        socket.disconnect()
      }
    }
  }, [dataContext])

  async function load() {
    const respGroup = await GroupController.getAllByUserId(session.user.id)
    if (respGroup.resp === "Success" && respGroup.data) {
      const groups = respGroup.data.groups
      const userOnGroups = respGroup.data.userOnGroups
      const currentGroup = undefined
      let currentUsers = [] as IUser[]

      setCanRender(true)

      const recordChats = await MessagesController.tranformAllChatsToRecord(groups, 0, 3)

      setDataContext({
        groups,
        userOnGroups,
        currentGroup,
        currentUsers,
        recordChats,
        socket,
        isAtEndOfChat,
        setDataContext
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
    setDataContext(prevState => ({ ...prevState, recordChats: newRecordChat }))
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
    <ChatContext.Provider value={dataContext}>
      <Suspense fallback={<p>Carregando...</p>}>
        {canRender &&
          (dataContext.groups?.length !== 0 ?
            <>
              <Groups session={session} />
              {dataContext.currentGroup && <ChatGroup session={session} />}
            </>
            :
            <NoGroups />
          )
        }
      </Suspense>
    </ChatContext.Provider>
  )
}
export default Chat