"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useContext, useState } from "react"
import { IoSendSharp } from "react-icons/io5"
import { io } from "socket.io-client"
import { DataContext } from "../page"

const ChatGroup = () => {
  const { currentGroup, groups, setDataContext, userOnGroups, currentUsers } = useContext(DataContext)
  const groupAcronym = formAcronym()

  function handleSocket() {
    const socket = io("http://localhost:4000/chat")
    socket.emit("chat message", "ola irmãos")
  }

  function formAcronym() {
    if (currentGroup) {
      const arrayWords = currentGroup.name.split(" ")
      let acronym: string
      if (arrayWords.length === 1) {
        acronym = arrayWords.at(0)!.charAt(0)
      } else {
        acronym = arrayWords.at(0)!.charAt(0) + arrayWords.at(arrayWords.length - 1)!.charAt(0)
      }
      return acronym.toUpperCase()
    } else {
      return ""
    }
  }

  return currentGroup && (
    <div className="flex flex-col flex-1">

      <div className="flex items-center px-7 w-full h-20 bg-white gap-3">
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

      <div className="flex flex-col items-center justify-between h-full bg-slate-100 py-10">
        <ul className="flex flex-col max-w-[80rem] w-full h-full justify-end py-10 gap-6">
          <li className="flex w-full gap-4">
            <Avatar>
              <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                <AvatarFallback>PA</AvatarFallback>
              </div>
            </Avatar>
            <div className="flex flex-col h-full max-h-[10rem] gap-1">
              <div className="flex gap-4">
                <p className="font-medium text-gray-700 text-sm">Pedro Augusto</p>
                <p className="self-end text-xs font-medium text-gray-500">quarta-feira 04:20</p>
              </div>
              <div className="text-wrap bg-white h-full max-h-[10rem] max-w-[25rem] w-fit rounded-e-lg rounded-b-lg px-4 py-2">
                <p>Testando Layout do Front</p>
              </div>
            </div>
          </li>
          <li className="flex w-full gap-4 justify-end">
            <div className="flex flex-col max-h-[10rem] gap-1">
              <div className="flex gap-2.5 self-end">
                <p className="self-end text-xs font-medium text-gray-500">Hoje 13:40</p>
                <p className="text-end font-medium text-gray-700 text-sm">Guilherme Mota</p>
              </div>
              <div className="text-wrap bg-blue-700 h-full max-h-[10rem] max-w-[25rem] w-fit rounded-l-lg rounded-b-lg px-4 py-2">
                <p className="text-white">Observando a dinamicidade dos chats criados e o css</p>
              </div>
            </div>
            <Avatar>
              <div className="flex items-center justify-center w-10 h-10 bg-slate-300 rounded-full">
                <AvatarFallback>GP</AvatarFallback>
              </div>
            </Avatar>
          </li>
        </ul>
        <div onClick={handleSocket} className="flex max-h-[13rem] bg-white rounded-lg border max-w-[80rem] w-full border-slate-300">
          <textarea placeholder="Digite sua mensagem..." cols={30} rows={3} className="h-auto resize-none text-lg w-full outline-none rounded-lg px-3 py-2 overflow-hidden" />
          <IoSendSharp className="text-3xl relative right-2 bottom-2 text-slate-700 hover:text-slate-500 self-end" />
        </div>
      </div>
    </div>
  )
}

export default ChatGroup