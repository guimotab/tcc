import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import { AlertDialogHeader, AlertDialogFooter, AlertDialogTrigger, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import IUser from "@/interfaces/IUser"
import { cn } from "@/lib/utils"
import defaultRoles from "@/types/defaultRoles"
import { Session } from "next-auth"
import React, { useContext, useState } from "react"
import { GroupInformationContext } from "../GroupInformationContext"

interface UserOfGroupProps {
  user: { role: defaultRoles } & IUser
  session: Session
  usersOnGroup: ({ role: defaultRoles; } & IUser)[]
  setUsersOnGroup: React.Dispatch<React.SetStateAction<({ role: defaultRoles; } & IUser)[] | undefined>>
}

const UserOfGroup = ({ user, session, usersOnGroup, setUsersOnGroup }: UserOfGroupProps) => {
  const allRoles = ["Admin", "Editor", "Usuário"] as defaultRoles[]
  const { currentGroup } = useContext(GroupInformationContext)
  const [userRole, setUserRole] = useState(user.role)

  async function removeUserOfGroup() {
    GroupController.deleteParticipant(currentGroup!.id, user.id)
    setUsersOnGroup(prev => prev!.filter(prevUser => prevUser.id !== user.id))
  }

  function concludeActions() {
    GroupController.changeRoleUser(currentGroup!.id, user, userRole)
    const allUsers = [...usersOnGroup]
    const thisUserIndex = allUsers.findIndex(thisUser => thisUser.id === user.id)
    allUsers.splice(thisUserIndex, 1, { ...user, role: userRole })
    setUsersOnGroup(allUsers)
  }

  return (
    <>
      {user.role === "Líder" || user.id === session.user.id ?
        <div className="flex items-center justify-between w-full px-3 hover:bg-slate-50 py-2 rounded-lg cursor-pointer">
          <div className="flex items-center gap-2 w-full">
            <AvatarWorker nameFallback={user.name} src={user.image} sizeText="text-lg" className="w-9 h-9" />
            <p className="">{user.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="h-fit">
              <p>{user.role}</p>
            </Badge>
          </div>
        </div>
        :
        <AlertDialog>
          <div className="flex items-center justify-between w-full">
            <AlertDialogTrigger className={cn("flex items-center w-full hover:bg-slate-50 px-3 py-2 rounded-lg focus-visible:ring-0")}>
              <div className="flex items-center gap-2 w-full">
                <AvatarWorker nameFallback={user.name} src={user.image} sizeText="text-lg" className="w-9 h-9" />
                <p className="">{user.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="h-fit">
                  <p>{user.role}</p>
                </Badge>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="-mb-3">Editar usuário</AlertDialogTitle>
              </AlertDialogHeader>

              <div className="flex flex-col gap-1">
                <p>Usuário: {user.name}</p>
                <p className="flex items-center gap-2">Cargo:
                  <Select defaultValue={userRole} onValueChange={value => setUserRole(value as defaultRoles)}>
                    <SelectTrigger className="w-fit h-7">
                      <SelectValue placeholder="Cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      {allRoles.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </p>
              </div>

              <AlertDialogFooter className="flex items-center !justify-between w-full">
                <AlertDialogCancel
                  onClick={removeUserOfGroup}
                  className={cn(buttonVariants({ variant: "destructive" }), "font-medium hover:text-white")}>Excluir usuário</AlertDialogCancel>
                <AlertDialogAction
                  onClick={concludeActions}
                  className={cn(buttonVariants({ variant: "default" }), "font-medium")}>Concluir</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </div>
        </AlertDialog>
      }
    </>
  )
}

export default UserOfGroup