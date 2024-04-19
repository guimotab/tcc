"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import useCurrentUser from "../../../../../states/hooks/useCurrentUser"
import { useContext, useState } from "react"
import { DataContext } from "../page"
import UserController from "@/controllers/UserController"
import IUser from "@/interfaces/IUser"

const Groups = () => {
  const currentUser = useCurrentUser()
  const { groups, userOnGroups, currentGroup, setDataContext, currentUsers } = useContext(DataContext)

  async function handleChooseGroup(idGroup: string) {
    const currentGroup = groups.find(group => group.id === idGroup)

    let currentUsers = [] as IUser[]
    if (currentGroup) {
      const respUsers = await UserController.getAllByGroupId(currentGroup.id)
      if (respUsers.data) {
        currentUsers = respUsers.data.users
      }
    }

    setDataContext(prevState => ({ ...prevState, currentGroup, currentUsers }))
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
    <div className="flex w-fit">
      <div className="w-96  h-full">

        <div className="px-4 py-6">
          <h1 className="font-semibold">Meus Grupos</h1>
        </div>

        <Separator className="bg-slate-100" />

        <div className="h-max">
          <div className="flex flex-col ">
            {groups.map((group, index) =>
              <div key={group.id}>
                <div
                  className={`flex justify-between p-4 ${currentGroup && group.id === currentGroup.id ? "bg-gray-50" : "hover:bg-slate-50"} cursor-pointer `}
                  onClick={event => handleChooseGroup(group.id)}>
                  <div className="flex items-center gap-2">
                    <Avatar className="">
                      <div className={`flex items-center justify-center w-9 h-9 rounded-full `}>
                        <AvatarFallback className="bg-slate-200">{formAcronym(group.name)}</AvatarFallback>
                      </div>
                    </Avatar>
                    <div className="">
                      <p className="font-medium text-sm">{group.name}</p>
                      <p className="text-sm truncate max-w-36 text-slate-500">Mensagem Enviada mano</p>
                    </div>
                  </div>
                  <p className="text-xs">5 min atrás</p>
                </div>
                {groups.length - 1 !== index && <Separator className="bg-slate-100" />}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Groups