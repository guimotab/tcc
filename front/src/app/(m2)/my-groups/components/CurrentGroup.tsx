"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import { MyGroupsContext } from "@/providers/MyGroupsContext"
import { formAcronym } from "@/utils/formAcronym"
import { useContext, useEffect, useState } from "react"

interface CurrentGroupProps {
}

const CurrentGroup = ({ }: CurrentGroupProps) => {

  const { groups, users, currentGroupId, usersOnGroup, setMyGroupsContext } = useContext(MyGroupsContext)
  const [currentGroup, setCurrentGroup] = useState<IGroup>()

  useEffect(() => {
    if (currentGroupId) {
      load()
    }
  }, [currentGroupId])

  async function load() {
    const respGroup = await GroupController.get(currentGroupId!)
    if (respGroup.data) {
      setCurrentGroup(respGroup.data)
    }
  }

  return currentGroup && (
    <div className="flex flex-col items-center my-6 w-full">
      <div className="flex flex-col items-center space-y-3 max-w-[25rem] w-full">
        <div className="flex items-center justify-between gap-6 w-full">
          <div className="flex items-center gap-2">
            <Avatar className="w-16 h-16">
              <div className={`flex text-2xl items-center justify-center w-16 h-16 rounded-full `}>
                <AvatarFallback className="bg-slate-200">{formAcronym(currentGroup.name, 2)}</AvatarFallback>
              </div>
            </Avatar>
            <div className="">
              <p className="text-xl font-medium">{currentGroup.name}</p>
              <p>{currentGroup.description}</p>
            </div>
          </div>
          <div>
            <Button size={"sm"}>Ir para o chat</Button>
          </div>
        </div>
        <div className="space-y-8 w-full">
          <div className="space-y-2">
            <Label className="font-semibold">Participantes ({users.length} participantes)</Label>
            <div className="space-y-3">
              {users.map((user, index) =>
                <Card className="border-secondary">
                  <div className="flex items-center justify-between px-4 py-1">
                    <div className="flex gap-3">
                      <Avatar className="">
                        <div className={`flex items-center justify-center w-9 h-9 rounded-full `}>
                          <AvatarFallback className="bg-slate-200">{formAcronym(currentGroup.name)}</AvatarFallback>
                        </div>
                      </Avatar>
                      <div className="flex flex-col">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm">{user.email}</p>
                      </div>
                    </div>
                    <Badge>
                      {usersOnGroup[index].role}
                    </Badge>
                  </div>
                </Card>
              )}
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex justify-between max-w-[20rem] w-full">
              <Button variant={"destructive"}>Excluir Grupo</Button>
              <Button>Editar Grupo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CurrentGroup