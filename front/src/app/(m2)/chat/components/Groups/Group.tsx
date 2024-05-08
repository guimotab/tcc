"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../page"
import UserController from "@/controllers/UserController"
import IUser from "@/interfaces/IUser"
import IGroup from "@/interfaces/IGroup"
import RecordChats from "@/classes/RecordChats"
import { IChatMessage } from "@/interfaces/IChatMessage"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"

interface GroupProps {
  group: IGroup
}

const Group = ({ group }: GroupProps) => {
  const { currentGroup, groups, setDataContext, recordChats, isAtEndOfChat } = useContext(DataContext)
  const currentUser = useCurrentUser()
  const recordChatClass = new RecordChats(recordChats)
  const [lastMessage, setLastMessage] = useState<IChatMessage>()
  const [lastMessageWasRead, setLastMessageWasRead] = useState(true)

  useEffect(() => {
    //executa no início e quando chega uma mensagem nova
    loadLastMessage()
    if (lastMessage && currentGroup) {
      checkReadLastMessage()
    }
  }, [recordChatClass])


  useEffect(() => {
    //executa quando muda de grupo
    if (lastMessage && currentGroup) {
      checkReadLastMessage()
    }
  }, [currentGroup])

  function loadLastMessage() {
    const chatMessage = recordChatClass.returnLastChatMessage(group)
    if (chatMessage) {
      setLastMessage(chatMessage)
    const lastMessageWasSendByCurrentUser = chatMessage.sender.idUser === currentUser.id
    const foundRead = chatMessage.statusMessage.readBy?.find(user => user.userId === currentUser.id)
      if (!foundRead && !lastMessageWasSendByCurrentUser) {
        setLastMessageWasRead(false)
      }
    }
  }

  function checkReadLastMessage() {
    const lastMessageIsFromCurrentUser = lastMessage!.sender.idUser === currentUser.id
    const isAtCurrentChat = currentGroup!.id === lastMessage!.chatId
    if (lastMessageIsFromCurrentUser || (isAtCurrentChat && isAtEndOfChat)) {
      return setLastMessageWasRead(true)
    }

    const arrayReadByExist = lastMessage!.statusMessage.readBy
    const foundRead = arrayReadByExist && arrayReadByExist.find(user => user.userId === currentUser.id)
    if (foundRead) {
      return setLastMessageWasRead(true)
    }

    setLastMessageWasRead(false)
  }

  async function handleChooseGroup(idGroup: string) {
    if (currentGroup && idGroup === currentGroup!.id) {
      return setDataContext(prevState => ({ ...prevState, currentGroup: undefined, currentUsers: [] }))
    }

    const newCurrentGroup = groups.find(group => group.id === idGroup)

    let currentUsers = [] as IUser[]
    if (newCurrentGroup) {
      const respUsers = await UserController.getAllByGroupId(newCurrentGroup.id)

      if (respUsers.data) {
        currentUsers = respUsers.data.users
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

  return (
    <>
      <div
        className={`flex justify-between p-4 ${currentGroup && currentGroup.id === group.id ? "bg-gray-50" : "hover:bg-slate-50"} cursor-pointer `}
        onClick={() => handleChooseGroup(group.id)}>
        <div className="flex items-center gap-2 flex-1 max-w-[80%]">
          <Avatar className="">
            <div className={`flex items-center justify-center w-9 h-9 rounded-full `}>
              <AvatarFallback className="bg-slate-200">{formAcronym(group.name)}</AvatarFallback>
            </div>
          </Avatar>
          <div className="w-full">
            <p className="font-medium text-sm w-full">{group.name}</p>

            {lastMessage && lastMessageWasRead &&
              <p className="text-sm truncate text-slate-500 w-full"> {lastMessage.sender.name}: {lastMessage.message.content} </p>
            }

            {lastMessage && !lastMessageWasRead &&
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 bg-green-600 rounded-full" />
                <p className="text-sm truncate text-green-600 w-full font-medium"> {lastMessage.sender.name}: {lastMessage.message.content} </p>
              </div>
            }

          </div>
        </div>
        <p className="text-xs">5 min atrás</p>
      </div>
    </>
  )
}

export default Group