"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useContext, useEffect, useState } from "react"
import UserController from "@/controllers/UserController"
import IUser from "@/interfaces/IUser"
import IGroup from "@/interfaces/IGroup"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"
import dayjs, { Dayjs } from "dayjs"
import { clearInterval, setInterval } from "timers"
import GroupElapsedTime from "./GroupElapsedTime"
import GroupRoot from "./GroupRoot"
import GroupContent from "./GroupContent"
import GroupMessages from "./GroupMessages"
import { ChatContext } from "@/providers/ChatContext"
import { Session } from "next-auth"

interface GroupProps {
  group: IGroup
  session: Session
}

const Group = ({ group, session }: GroupProps) => {
  const oneMinute = 60000
  const { currentGroup, groups, setDataContext, recordChats, isAtEndOfChat } = useContext(ChatContext)
  const recordChatClass = new RecordChats(recordChats)
  const [lastMessage, setLastMessage] = useState<IChatMessage>()
  const [lastMessageWasRead, setLastMessageWasRead] = useState(true)
  const [messageElapsedTime, setMessageElapsedTime] = useState<string>()

  useEffect(() => {
    //executa no início e quando chega uma mensagem nova
    const lastMessageLoaded = loadLastMessage()
    setMessageElapsedTime(handleMessageElapsedTime(lastMessageLoaded))
    if (lastMessageLoaded && currentGroup) {
      checkReadLastMessage()
    }

    const intervalId = setInterval(() => setMessageElapsedTime(handleMessageElapsedTime(lastMessageLoaded)), oneMinute)
    return () => { clearInterval(intervalId) }
  }, [recordChats])


  useEffect(() => {
    //executa quando muda de grupo
    if (lastMessage && currentGroup) {
      checkReadLastMessage()
    }
  }, [lastMessage])

  function loadLastMessage() {
    const chatMessage = recordChatClass.returnLastChatMessage(group)
    if (chatMessage) {
      setLastMessage(chatMessage)
      const lastMessageWasSendByCurrentUser = chatMessage.sender.idUser === session.user.id
      const foundRead = chatMessage.statusMessage.readBy?.find(user => user.userId === session.user.id)
      if (!foundRead && !lastMessageWasSendByCurrentUser) {
        setLastMessageWasRead(false)
      }
    }
    return chatMessage
  }

  function checkReadLastMessage() {
    const lastMessageIsFromCurrentUser = lastMessage?.sender.idUser === session.user.id
    const isAtCurrentChat = currentGroup!.id === lastMessage?.chatId
    if (lastMessageIsFromCurrentUser || (isAtCurrentChat && isAtEndOfChat)) {
      return setLastMessageWasRead(true)
    }

    const arrayReadByExist = lastMessage?.statusMessage.readBy
    const foundRead = arrayReadByExist && arrayReadByExist.find(user => user.userId === session.user.id)
    if (foundRead) {
      return setLastMessageWasRead(true)
    }

    setLastMessageWasRead(false)
  }

  async function handleChooseGroup(idGroup: string) {
    if (currentGroup && idGroup === currentGroup!.id) {
      return setDataContext(prevState => ({ ...prevState, currentGroup: undefined, currentUsers: [] }))
    }

    const newCurrentGroup = groups!.find(group => group.id === idGroup)
    let currentUsers = [] as IUser[]

    if (newCurrentGroup) {
      const respUsers = await UserController.getAllByGroupId(newCurrentGroup.id)

      if (respUsers.data) {
        currentUsers = respUsers.data
        setDataContext(prevState => ({ ...prevState, currentGroup: newCurrentGroup, currentUsers }))
      }
    }
  }

  function formAcronym(word: string) {
    const arrayWords = word.split(" ")
    let acronym: string
    if (arrayWords.length === 1) {
      acronym = arrayWords.at(0)!.charAt(0)
    } else {
      acronym = arrayWords.at(0)!.charAt(0) + arrayWords.at(arrayWords.length - 1)!.charAt(0)
    }
    return acronym.toUpperCase()
  }

  function handleMessageElapsedTime(lastMessage: IChatMessage | undefined) {
    if (!lastMessage) return

    const today = dayjs()
    const dateMessage = dayjs(lastMessage.message.createdAt)

    if (today.format("DD/MM/YYYY") === dateMessage.format("DD/MM/YYYY")) {
      //se o dia é igual
      if (today.format("HH:mm") === dateMessage.format("HH:mm")) {
        //se as horas e os minutos são iguais
        return "agora"
      }
      if (today.format("HH") === dateMessage.format("HH")) {
        //se as horas são iguais
        const minutesElapsed = today.minute() - dateMessage.minute()
        return minutesElapsed + "min atrás"
      }
      //se apenas o dia é igual
      const hoursElapsed = today.hour() - dateMessage.hour()
      return hoursElapsed + "h atrás"
    } else {
      //se é um dia diferente
      return dateMessage.format("DD/MM/YYYY")
    }
  }

  return (
    <GroupRoot currentGroup={group} currentSelectedGroup={currentGroup} onClick={() => handleChooseGroup(group.id)} >

      <GroupContent>
        <Avatar className="">
          <div className={`flex items-center justify-center w-9 h-9 rounded-full `}>
            <AvatarFallback className="bg-slate-200">{formAcronym(group.name)}</AvatarFallback>
          </div>
        </Avatar>

        <GroupMessages group={group}>
          {lastMessage && lastMessageWasRead &&
            <p className="text-sm truncate text-slate-500 w-full"> {lastMessage.sender.name}: {lastMessage.message.content} </p>
          }
          {lastMessage && !lastMessageWasRead &&
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 bg-green-600 rounded-full" />
              <p className="text-sm truncate text-green-600 w-full font-medium"> {lastMessage.sender.name}: {lastMessage.message.content} </p>
            </div>
          }
        </GroupMessages>

      </GroupContent>
      <GroupElapsedTime elapsedTime={messageElapsedTime} />

    </GroupRoot >
  )
}

export default Group