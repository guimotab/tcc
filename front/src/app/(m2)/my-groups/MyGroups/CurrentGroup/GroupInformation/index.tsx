import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import UserController from "@/controllers/UserController"
import IUser from "@/interfaces/IUser"
import { formAcronym } from "@/utils/formAcronym"
import { Session } from "next-auth"
import { useContext, useEffect, useState } from "react"
import defaultRoles from "@/types/defaultRoles"
import React from "react"
import ButtonInviteNewUsers from "./ButtonInviteUsers"
import ButtonLeaveGroup from "./ButtonLeaveGroup"
import UserOfGroup from "./UserOfGroup"
import ButtonEditGroupInformations from "./ButtonEditGroupInformations"
import { GroupInformationContext } from "../GroupInformationContext"

interface CurrentGroupProps {
  session: Session
}

const GroupInformation = ({ session }: CurrentGroupProps) => {
  const [usersOnGroup, setUsersOnGroup] = useState<({ role: defaultRoles } & IUser)[]>()
  const { currentGroup } = useContext(GroupInformationContext)

  useEffect(() => {
    if (currentGroup) {
      loadData()
    }
  }, [])

  async function loadData() {
    const respUsers = await UserController.getAllByGroupId(currentGroup!.id)
    if (respUsers.data) {
      setUsersOnGroup(respUsers.data)
    }
  }

  return currentGroup && (
    <div className="relative flex flex-col h-full items-center justify-between max-w-[26rem] w-full">

      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Avatar className="flex items-center justify-center w-14 h-14 rounded-full">
              <AvatarFallback className="bg-slate-200 text-xl" >{formAcronym(currentGroup.name, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <Label className="text-xl">{currentGroup.name}</Label>
              <Label>{currentGroup.description}</Label>
            </div>
          </div>
          <ButtonEditGroupInformations />
        </div>

        <Separator />

        {usersOnGroup && <ButtonInviteNewUsers session={session} usersOnGroup={usersOnGroup} />}

        <ul className="flex flex-col">
          {usersOnGroup?.map(user =>
            <UserOfGroup
              key={user.name}
              session={session}
              user={user}
              usersOnGroup={usersOnGroup}
              setUsersOnGroup={setUsersOnGroup} />
          )}
        </ul>

      </div>

      <ButtonLeaveGroup session={session}/>

    </div>
  )
}

export default GroupInformation