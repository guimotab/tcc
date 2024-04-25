"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"
import { IChatMessage } from "."
import { Label } from "@/components/ui/label"

interface ChatMessagesProps {
  messages: IChatMessage
}

const Messages = ({ messages }: ChatMessagesProps) => {
  const currentUser = useCurrentUser()

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

  return (
    messages.sender.idUser === currentUser.id ?
      <li className="flex w-full gap-2 justify-end">
        <div className="flex flex-col max-h-[10rem] gap-1">
          <div className="flex items-center gap-2.5 self-end">
            <Label className=" text-xs font-medium text-gray-500">{handleDate(messages.message.createdAt)}</Label>
            <Label className="text-end font-medium text-gray-700 text-sm">{messages.sender.name}</Label>
          </div>
          <div className="text-wrap bg-blue-700 h-full max-h-[10rem] max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-1.5 self-end">
            <p className="text-white">{messages.message.content}</p>
          </div>
        </div>
        <Avatar>
          <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
            <AvatarFallback className="bg-slate-300">{formAcronym(messages.sender.name)}</AvatarFallback>
          </div>
        </Avatar>
      </li>
      :
      <li className="flex w-full gap-2">
        <Avatar>
          <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
            <AvatarFallback className="bg-slate-300">{formAcronym(messages.sender.name)}</AvatarFallback>
          </div>
        </Avatar>
        <div className="flex flex-col h-full max-h-[10rem] gap-1">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-gray-700 text-sm">{messages.sender.name}</Label>
            <Label className=" text-xs font-medium text-gray-500">{handleDate(messages.message.createdAt)}</Label>
          </div>
          <div className="text-wrap bg-white h-full max-h-[10rem] max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-1.5">
            <p>{messages.message.content}</p>
          </div>
        </div>
      </li>
  )
}

export default Messages