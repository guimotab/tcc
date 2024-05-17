"use client"
import useCurrentUser from "../../../../../../../states/hooks/useCurrentUser"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"
import { Label } from "@/components/ui/label"
import { IChatMessage } from "@/interfaces/IChatMessage"
import React from "react"
import MessagesRoot from "./MessagesRoot"
import MessagesAvatar from "./MessagesAvatar"
import MessagesBody from "./MessagesBody"
import MessagesHeader from "./MessagesHeader"
import MessagesContent from "./MessagesContent"

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
      <MessagesRoot className="justify-end">
        <MessagesBody>
          <MessagesHeader className="self-end">
            <Label className="text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</Label>
            <Label className="text-end font-medium text-gray-700 text-sm">{message.sender.name}</Label>
          </MessagesHeader>

          <MessagesContent side="right">
            {message.message.content.split('\n').map((line, index) => (
              <React.Fragment key={`${message.message.id}-${index}`}>
                {line}
                {index < message.message.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </MessagesContent>
        </MessagesBody>

        <MessagesAvatar src="" avatarFallBack={formAcronym(message.sender.name)} />

      </MessagesRoot>
      :
      <MessagesRoot>
        <MessagesAvatar src="" avatarFallBack={formAcronym(message.sender.name)} />

        <MessagesBody>
          <MessagesHeader>
            <Label className="font-medium text-gray-700 text-sm">{message.sender.name}</Label>
            <Label className=" text-xs font-medium text-gray-500">{handleDate(message.message.createdAt)}</Label>
          </MessagesHeader>

          <MessagesContent side="left">
            {message.message.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < message.message.content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </MessagesContent>
        </MessagesBody>
      </MessagesRoot>

  )
}

export default Message