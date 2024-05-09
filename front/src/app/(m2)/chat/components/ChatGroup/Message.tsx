"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"
import { Label } from "@/components/ui/label"
import { IChatMessage } from "@/interfaces/IChatMessage"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { IoCheckmarkDone } from "react-icons/io5";
import React from "react"

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
        <div className="flex flex-col gap-1">
          
          <div className="flex items-center gap-2.5 self-end">
            <Label className=" text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</Label>
            <Label className="text-end font-medium text-gray-700 text-sm">{message.sender.name}</Label>
          </div>

          <div className="relative flex bg-blue-700 h-full max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-1.5 self-end">
            <p className="text-white mr-3.5 break-words max-w-[22rem]">
              {message.message.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < message.message.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="absolute bottom-1.5 right-1.5">
              <IoCheckmarkDone className="text-white" />
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
        <div className="flex flex-col h-full gap-1">
          <div className="flex items-center gap-4">
            <Label className="font-medium text-gray-700 text-sm">{message.sender.name}</Label>
            <Label className=" text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</Label>
          </div>
          <div className="text-wrap bg-white h-full max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-1.5">
            <p className="break-words max-w-[22rem]">
              {message.message.content.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < message.message.content.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </li>
  )
}

export default Message