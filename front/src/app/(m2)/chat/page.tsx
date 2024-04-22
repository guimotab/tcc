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
import { io } from "socket.io-client"
import { messageResponse } from "@/types/messageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import MessagesController from "@/controllers/MessagesController"
import { recordMessage } from "@/types/recordMessage"


interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
  }
}

interface IDataContext {
  groups: IGroup[] | []
  userOnGroups: IUserOnGroup[] | []
  currentUsers: IUser[] | []
  currentGroup: IGroup | undefined
  messages: recordMessage[]
  setDataContext: Dispatch<SetStateAction<IDataContext>>
}

export const DataContext = createContext<IDataContext>({} as IDataContext);
const Chat = () => {
  const currentUser = useCurrentUser()
  const [canRender, setCanRender] = useState(false)
  const [dataContext, setDataContext] = useState({} as IDataContext)
  const socket = io("http://localhost:4000/chat")

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const respGroup = await GroupController.getAllByUserId(currentUser.id)
    if (respGroup.resp === "Success" && respGroup.data) {
      const groups = respGroup.data.groups
      const userOnGroups = respGroup.data.userOnGroups
      const currentGroup = undefined
      let currentUsers = [] as IUser[]

      setCanRender(true)

      // ideia teste - para receber mensagens de todos os grupos e aparecer notificação, tem que fazer um join em todas os groups.id
      socket.emit("join-chat", groups, (respMessages: MessageArrayResponse) => {
        setCanRender(true)
      })

      const messages = await loadFirstsMessages(groups)

      setDataContext({ groups, userOnGroups, currentGroup, currentUsers, messages, setDataContext })

    } else {
      const errorResponse = new ResolveResponseErrors(respGroup.resp)
      createToast(errorResponse)
    }
  }

  async function loadFirstsMessages(groups: IGroup[]) {
    const messages = await Promise.all(groups.map(async group => {
      const messageResp = await MessagesController.getAllByGroupIdLimited(group.id, 0, 3)
      if (messageResp.data && messageResp.data.messages.length !== 0) {
        const dataMessages = messageResp.data
        const chatId = dataMessages.messages[0].chatId
        const recordMessage = {
          [chatId]: dataMessages
        }
        return recordMessage as recordMessage
      }
    })) as recordMessage[]
    return messages.filter((message) => message !== undefined)
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
    <main className="flex  h-screen">
      <Aside page="chat"></Aside>

      <DataContext.Provider value={dataContext}>
        <Suspense fallback={<p>Carregando...</p>}>
          {canRender &&
            <>
              <Groups socket={socket} />
              <ChatGroup socket={socket} />
            </>
          }
        </Suspense>
      </DataContext.Provider>
    </main>
  )
}
export default Chat