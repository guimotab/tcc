import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import UserController from "@/controllers/UserController"
import IGroup from "@/interfaces/IGroup"
import IUser from "@/interfaces/IUser"
import { cn } from "@/lib/utils"
import { formAcronym } from "@/utils/formAcronym"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { MdModeEdit } from "react-icons/md";
import FormAddNewParticipants from "./components/FormAddNewParticipants"
import UsersAdded from "./components/UsersAdded"
import defaultRoles from "@/types/defaultRoles"
import AvatarWorker from "@/app/(m2)/components/AvatarWorker"
import React from "react"
import { IoMdPersonAdd } from "react-icons/io";

interface CurrentGroupProps {
  session: Session
  currentGroup: IGroup
}

const GroupInformation = ({ session, currentGroup }: CurrentGroupProps) => {
  const [usersOnGroup, setUsersOnGroup] = useState<({ role: defaultRoles } & IUser)[]>()
  const [participants, setParticipants] = useState<{ email: string, role: defaultRoles }[]>()

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const respUsers = await UserController.getAllByGroupId(currentGroup.id)
    if (respUsers.data) {
      setUsersOnGroup(respUsers.data)
    }
  }

  function leaveGroup() {

  }

  return (
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
          <div className={"border rounded-md p-1.5 cursor-pointer"}>
            <MdModeEdit className="text-xl text-gray-900" />
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-3 w-full">
          {usersOnGroup &&
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
                        className={cn(buttonVariants({ variant: participants ? "default" : "outline" }), "font-medium")}>
                        Enviar convite
                      </AlertDialogAction>
                    </AlertDialogFooter>

                  </AlertDialogContent>
                </AlertDialog>

              </div>
              <ul className="flex flex-col">
                {usersOnGroup?.map(user =>
                  <React.Fragment key={user.name}>
                    {user.role !== "Líder" ?
                      <AlertDialog>
                        <div className="flex items-center justify-between w-full">
                          <AlertDialogTrigger className={cn("flex items-center w-full hover:bg-slate-50 px-3 py-2 rounded-lg")}>
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
                              <AlertDialogTitle className="-mb-3">Editando usuário</AlertDialogTitle>
                            </AlertDialogHeader>

                            <div className="flex flex-col ">
                              <p>Usuário: {user.name}</p>
                              <p>Cargo: {user.role}</p>
                            </div>

                            <AlertDialogFooter className="flex items-center !justify-between w-full">
                              <AlertDialogCancel className={cn(buttonVariants({ variant: "destructive" }), "font-medium")}>Excluir usuário</AlertDialogCancel>
                              <AlertDialogAction className={cn(buttonVariants({ variant: "default" }), "font-medium")}>Concluir</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </div>
                      </AlertDialog>
                      :
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
                    }
                  </React.Fragment>
                )}
              </ul>
            </>
          }
        </div>
      </div>

      <div className="self-end">
        <AlertDialog>

          <AlertDialogTrigger className={cn(buttonVariants({ variant: "destructive", size: "sm" }), "font-medium")}>
            Sair do Grupo
          </AlertDialogTrigger>

          <AlertDialogContent>

            <AlertDialogHeader>
              <AlertDialogTitle>Você deseja mesmo sair?</AlertDialogTitle>
              <AlertDialogDescription>
                Ao sair do grupo, você precisará receber outro convite para participar novamente!
              </AlertDialogDescription >
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={leaveGroup} className={cn(buttonVariants({ variant: "destructive" }), "font-medium")}>
                Sair do grupo
              </AlertDialogAction>
            </AlertDialogFooter>

          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}

export default GroupInformation