"use client"
import Aside from "@/app/(m2)/components/Aside"
import Groups from "./components/Groups"
import ChatGroup from "./components/ChatGroup"
import useCurrentUser from "../../../../states/hooks/useCurrentUser"
import { Dispatch, SetStateAction, Suspense, createContext, useEffect, useState } from "react"
import IGroup from "@/interfaces/IGroup"
import GroupController from "@/controllers/GroupController"
import ResolveResponseErrors from "@/utils/resolveResponseErrors"
import { toast } from "sonner"
import IUserOnGroup from "@/interfaces/IUserOnGroup"
import IUser from "@/interfaces/IUser"
import { Socket, io } from "socket.io-client"
import MessagesController from "@/controllers/MessagesController"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"
import { IRecordChat } from "@/interfaces/IRecordChat"

interface IDataContext {
  groups: IGroup[] | []
  userOnGroups: IUserOnGroup[] | []
  currentUsers: IUser[] | []
  currentGroup: IGroup | undefined
  recordChats: IRecordChat[]
  socket: Socket
  isAtEndOfChat: boolean
  setDataContext: Dispatch<SetStateAction<IDataContext>>
}

export const DataContext = createContext<IDataContext>({} as IDataContext);
const Chat = () => {
  const currentUser = useCurrentUser()
  const [canRender, setCanRender] = useState(false)
  const [dataContext, setDataContext] = useState({} as IDataContext)
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
    const respGroup = await GroupController.getAllByUserId(currentUser.id)
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
      const errorResponse = new ResolveResponseErrors(respGroup.resp)
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

  function createToast(errorResponse: ResolveResponseErrors) {
    const [title, description] = errorResponse.resolveError()
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

      <DataContext.Provider value={dataContext}>
        <Suspense fallback={<p>Carregando...</p>}>
          {canRender &&
            <>
              <Groups />
              {dataContext.currentGroup && <ChatGroup />}
            </>
          }
        </Suspense>
      </DataContext.Provider>
    </main>
  )
}
export default Chat