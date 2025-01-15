"use client"
import dayjs from 'dayjs'
import { formAcronym } from "@/utils/formAcronym"
import { Label } from "@/components/ui/label"
import { IChatMessage } from "@/interfaces/Chats/IChatMessage"
import React from "react"
import MessagesRoot from "./MessagesRoot"
import MessagesAvatar from "./MessagesAvatar"
import MessagesBody from "./MessagesBody"
import MessagesHeader from "./MessagesHeader"
import MessagesContent from "./MessagesContent"
import { Session } from 'next-auth'

interface ChatMessageProps {
  message: IChatMessage
  session: Session
}

const Message = ({ message, session }: ChatMessageProps) => {

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
    message.sender.idUser === session.user.id ?
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