"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { ChangeEvent, KeyboardEventHandler, useContext, useEffect, useState } from "react"
import { IoSendSharp } from "react-icons/io5"
import { io } from "socket.io-client"
import { DataContext } from "../page"
import { messageResponse } from "@/types/messageResponse"
import IMessage from "@/interfaces/Chats/IMessage"
import useCurrentUser from "../../../../../states/hooks/useCurrentUser"
import ISender from "@/interfaces/Chats/ISender"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"

interface MessageArrayResponse {
  resp: messageResponse
  data?: {
    messages: IMessage[]
  }
}

interface ContentOfMessage {
  message: IMessage
  sender: ISender
  chatId: string
}

const ChatGroup = () => {
  const socket = io("http://localhost:4000/chat")
  const currentUser = useCurrentUser()
  const { currentGroup, groups, setDataContext, userOnGroups, currentUsers } = useContext(DataContext)
  const [canRender, setCanRender] = useState(true)
  const [fieldChat, setFieldChat] = useState("")
  const [messages, setMessages] = useState<ContentOfMessage[]>([])
  const groupAcronym = currentGroup ? formAcronym(currentGroup.name, 2) : ""

  useEffect(() => {
    setFieldChat("")
    setMessages([])
    setCanRender(false)
    if (currentGroup) {
      load()
    }
    return () => {
      socket.off("message")
    }
  }, [currentGroup])

  function load() {
    // ideia teste - para receber mensagens de todos os grupos e aparecer notificação, tem que fazer um join em todas os groups.id
    socket.emit("join-chat", groups, (respMessages: MessageArrayResponse) => {
      setCanRender(true)
    })
    socket.on("message", createMessage)
  }

  function createMessage({ message, sender, chatId }: ContentOfMessage) {
    if (chatId === currentGroup!.id) {
      setMessages(prev => [...prev, { message, sender, chatId }])
    }
  }


  function handleTypeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value
    setFieldChat(value)
    autoResizeTextarea(event.target)
  }

  function handleKeyBoard(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && event.shiftKey) {

      setFieldChat(value => value + "\n")
    } else if (event.key === "Enter") {
      event.preventDefault();
      // handleSendMessage()
    }
  }
  function handleSendMessage() {
    const verifiedMessage = fieldChat.trim() !== ""
    if (verifiedMessage) {
      const content = fieldChat
      const sender = currentUser
      const chatId = currentGroup!.id
      socket.emit("message", { content, sender, chatId })
      // setFieldChat("")
    }
  }

  const autoResizeTextarea = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'; // Redefine a altura para que a altura seja recalculada corretamente
    element.style.height = `${element.scrollHeight}px`; // Define a altura com base no conteúdo
  };

  function handleDate(date: Date) {
    const dateMessage = dayjs(date)
    const today = dayjs()
    if (today.format("DD/MM/YYYY") === dateMessage.format("DD/MM/YYYY")) {
      const time = dateMessage.format("HH:mm")
      return time
    }
    const yesterday = dayjs().subtract(1)
    if (yesterday.format("DD/MM/YYYY") === dateMessage.format("DD/MM/YYYY")) {
      const time = dateMessage.format("HH:mm")
      return `ontem, ${time}`
    }

    return `${dateMessage.format("DD/MM/YYYY, HH:mm")}`
  }

  return currentGroup && (
    <div className="flex flex-col flex-1">

      <div className="flex items-center px-7 py-3 w-full h-fit bg-white gap-3">
        <Avatar>
          <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
            <AvatarFallback>{groupAcronym}</AvatarFallback>
          </div>
        </Avatar>
        <div>
          <Label className="text-lg">{currentGroup.name}</Label>
          <div className="flex gap-1">
            {currentUsers.map((user, index) =>
              <p key={index} className="text-sm text-slate-500">{`${user.name}${index !== currentUsers.length - 1 ? "," : " "}`}</p>
            )}
          </div>
        </div>
      </div>


      {canRender &&
        <div className="flex flex-col items-center justify-between h-full bg-slate-100 py-10">
          <ul className="flex flex-col max-w-[80rem] w-full h-full justify-end py-10 gap-6">
            {messages.map(message =>
              message.sender.id === currentUser.id ?
                <li className="flex w-full gap-4 justify-end">
                  <div className="flex flex-col max-h-[10rem] gap-1">
                    <div className="flex gap-2.5 self-end">
                      <p className="self-end text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</p>
                      <p className="text-end font-medium text-gray-700 text-sm">{message.sender.name}</p>
                    </div>
                    <div className="text-wrap bg-blue-700 h-full max-h-[10rem] max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-2">
                      <p className="text-white">{message.message.content}</p>
                    </div>
                  </div>
                  <Avatar>
                    <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                      <AvatarFallback className="bg-slate-300">{formAcronym(message.sender.name)}</AvatarFallback>
                    </div>
                  </Avatar>
                </li>
                :
                <li className="flex w-full gap-4">
                  <Avatar>
                    <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                      <AvatarFallback className="bg-slate-300">{formAcronym(message.sender.name)}</AvatarFallback>
                    </div>
                  </Avatar>
                  <div className="flex flex-col h-full max-h-[10rem] gap-1">
                    <div className="flex gap-4">
                      <p className="font-medium text-gray-700 text-sm">{message.sender.name}</p>
                      <p className="self-end text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</p>
                    </div>
                    <div className="text-wrap bg-white h-full max-h-[10rem] max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-2">
                      <p>{message.message.content}</p>
                    </div>
                  </div>
                </li>
            )}
          </ul>
          <div className="flex max-h-[13rem] bg-white border-slate-300 max-w-[80rem] w-full rounded-lg">
            <div className="flex max-h-[13rem] overflow-y-auto rounded-lg w-full ">
              <textarea
                onKeyDown={handleKeyBoard}
                onChange={handleTypeMessage}
                placeholder="Digite sua mensagem..."
                cols={30}
                className="flex-1 min-h-[40px] resize-none text-lg w-full border-none outline-none rounded-lg px-3 py-2 overflow-hidden" />
            </div>
            <IoSendSharp
              onClick={handleSendMessage}
              className="text-3xl mx-2 mb-2 text-slate-700 hover:text-slate-500 self-end" />
          </div>
        </div>
      }
    </div>

  )
}

export default ChatGroup