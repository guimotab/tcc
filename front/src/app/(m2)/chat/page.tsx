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
import { recordChat } from "@/types/recordChat"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"

interface IDataContext {
  groups: IGroup[] | []
  userOnGroups: IUserOnGroup[] | []
  currentUsers: IUser[] | []
  currentGroup: IGroup | undefined
  recordChats: recordChat[]
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
    return () => { socket.off("message") }
  }, [])

  async function load() {
    const respGroup = await GroupController.getAllByUserId(currentUser.id)
    if (respGroup.resp === "Success" && respGroup.data) {
      const groups = respGroup.data.groups
      const userOnGroups = respGroup.data.userOnGroups
      const currentGroup = undefined
      let currentUsers = [] as IUser[]

      setCanRender(true)

      const recordChats = await MessagesController.tranformAllChatsToRecord(groups, 0, 3)
      const recordChatsClass = new RecordChats(recordChats)
      
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
      handleSockets(groups, recordChatsClass)
    } else {
      const errorResponse = new ResolveResponseErrors(respGroup.resp)
      createToast(errorResponse)
    }
  }

  function handleSockets(groups: IGroup[], recordChatsClass: RecordChats) {
    socket.emit("join-chat", groups)
    socket.on("message", ({ message, sender, chatId, statusMessage }: IChatMessage) => listenerNewMessage({ message, sender, chatId, statusMessage }, recordChatsClass))
  }

  function listenerNewMessage({ message, sender, chatId, statusMessage }: IChatMessage, recordChatsClass: RecordChats) {
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
    <main className="flex h-full">
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