"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { useContext } from "react"
import { DataContext } from "../../page"
import { formAcronym } from "@/utils/formAcronym"


const HeaderGroup = () => {
  const { currentGroup, currentUsers } = useContext(DataContext)
  const groupAcronym = currentGroup ? formAcronym(currentGroup.name, 2) : ""

  return currentGroup && (
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
  )
}

export default HeaderGroup