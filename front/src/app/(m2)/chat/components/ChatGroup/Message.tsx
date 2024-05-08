"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"
import { Label } from "@/components/ui/label"
import { IChatMessage } from "@/interfaces/IChatMessage"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { IoCheckmarkDone } from "react-icons/io5";

interface ChatMessageProps {
  message: IChatMessage
}

const Message = ({ message }: ChatMessageProps) => {
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
    message.sender.idUser === currentUser.id ?
      <li className="flex w-full gap-2 justify-end">
        <div className="flex flex-col max-h-[10rem] gap-1">
          <div className="flex items-center gap-2.5 self-end">
            <Label className=" text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</Label>
            <Label className="text-end font-medium text-gray-700 text-sm">{message.sender.name}</Label>
          </div>
          <div className="relative flex text-wrap bg-blue-700 h-full max-h-[10rem] max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-1 self-end">
            <p className="text-white mr-3 ">{message.message.content}</p>
            <div className="absolute bottom-1 right-1">
              <HoverCard>
                <HoverCardTrigger>
                  <IoCheckmarkDone className="text-white" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col">
                    {message.statusMessage.readBy ?
                      <div className="flex gap-1 items-center">
                        {message.statusMessage.readBy.map(user => <Label key={user.id}>{user.name}</Label>)}
                      </div>
                      :
                      <Label>Ninguém leu</Label>
                    }
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
        <div className="self-end">
          <Avatar className="h-fit">
            <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
              <AvatarFallback className="bg-slate-300">{formAcronym(message.sender.name)}</AvatarFallback>
            </div>
          </Avatar>
        </div>
      </li>
      :
      <li className="flex w-full gap-2">
        <div className="self-end">
          <Avatar className="h-fit">
            <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
              <AvatarFallback className="bg-slate-300">{formAcronym(message.sender.name)}</AvatarFallback>
            </div>
          </Avatar>
        </div>
        <div className="flex flex-col h-full max-h-[10rem] gap-1">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-gray-700 text-sm">{message.sender.name}</Label>
            <Label className=" text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</Label>
          </div>
          <div className="text-wrap bg-white h-full max-h-[10rem] max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-1">
            <p>{message.message.content}</p>
          </div>
        </div>
      </li>
  )
}

export default Message