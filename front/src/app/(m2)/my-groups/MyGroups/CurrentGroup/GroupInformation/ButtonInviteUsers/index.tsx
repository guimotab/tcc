import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React, { useContext, useState } from "react"
import { IoMdPersonAdd } from "react-icons/io"
import IUser from "@/interfaces/IUser"
import defaultRoles from "@/types/defaultRoles"
import { Session } from "next-auth"
import FormAddNewParticipants from "./components/FormAddNewParticipants"
import UsersAdded from "./components/UsersAdded"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import ResolveResponses from "@/utils/resolveResponseErrors"
import { createToast } from "@/utils/createToastUtil"
import { GroupInformationContext } from "../../GroupInformationContext"

interface ButtonInviteNewUsersProps {
  session: Session
  usersOnGroup: ({ role: defaultRoles; } & IUser)[]
}

const ButtonInviteNewUsers = ({ usersOnGroup, session }: ButtonInviteNewUsersProps) => {
  const { currentGroup } = useContext(GroupInformationContext)
  const [participants, setParticipants] = useState<{ email: string, role: defaultRoles }[]>()

  async function handleInviteUser() {
    const findUserLogged = usersOnGroup.find(userOnGroup => userOnGroup.id === session.user.id)
    if (findUserLogged) {
      const respGroup = await GroupController.addNewParticipant(participants!, findUserLogged, currentGroup!)
      if (respGroup.resp !== "Success") {
        const messageResponse = new ResolveResponses(respGroup.resp)
        return createToast("destructive", messageResponse)
      }
      const messageResponse = new ResolveResponses(respGroup.resp, { title: "Os convites foram enviados!" })
      createToast("default", messageResponse)
      setParticipants(undefined)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="font-medium text-sm">Participantes: {usersOnGroup?.length}</p>
        <AlertDialog>

          <AlertDialogTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex items-center gap-2 font-medium")}>
            <IoMdPersonAdd className="text-lg" />
            Convidar
          </AlertDialogTrigger>

          <AlertDialogContent>

            <AlertDialogHeader>
              <AlertDialogTitle className="-mb-3">Convidar participantes</AlertDialogTitle>
              <AlertDialogDescription>
                Envie o convite para participarem do grupo
              </AlertDialogDescription >
            </AlertDialogHeader>

            <div className="flex flex-col gap-2">
              <FormAddNewParticipants
                participants={participants}
                setParticipants={setParticipants}
                usersOnGroup={usersOnGroup} />
              <ul className="flex flex-col gap-2">
                {participants?.map(participant =>
                  <UsersAdded
                    key={participant.email}
                    participant={participant}
                    participants={participants}
                    setParticipants={setParticipants}
                    session={session} />
                )}
              </ul>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                disabled={!participants}
                onClick={handleInviteUser}
                className={cn(buttonVariants({ variant: participants ? "default" : "outline" }), "font-medium")}>
                Enviar convite
              </AlertDialogAction>
            </AlertDialogFooter>

          </AlertDialogContent>
        </AlertDialog>

      </div>

    </>
  )
}

export default ButtonInviteNewUsers