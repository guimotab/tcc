import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useContext, useState } from "react"
import { FormChatContext } from "../../page"
import defaultRoles from "@/types/defaultRoles"
import IParticipantsGroup from "@/interfaces/IParticipantsGroup"
import FormCreateGroup from "@/classes/FormCreateGroup"

interface UsersRolesProps {
  participant: IParticipantsGroup
}

const arrayRoles = ["Líder", "Admin", "Editor", "Usuário"] as defaultRoles[]

const AssignRoles = ({ participant }: UsersRolesProps) => {
  const { formStepsContext, setFormStepsContext } = useContext(FormChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)

  function changeUserRole(newRole: defaultRoles) {
    formSteps.updateRole(participant.email, newRole)
    setFormStepsContext(formSteps)
  }

  return (
    <li className="">
      <Card className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <Avatar className="flex items-center">
            <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
              <AvatarFallback>{formSteps.getInitialOfEmail(participant.email)}</AvatarFallback>
            </div>
          </Avatar>
          <Label>{participant.email}</Label>
        </div>

        {participant.role === "Líder" ?

          <Badge>Líder (você)</Badge>

          :

          <Select onValueChange={changeUserRole} value={participant.role} >
            <SelectTrigger className="w-fit h-5">
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
            <SelectContent>

              {arrayRoles.map((role, index) =>
                role !== arrayRoles[0] &&
                <SelectItem key={index} value={role}>{role}</SelectItem>
              )}

            </SelectContent>
          </Select>
        }

      </Card>
    </li>
  )
}
export default AssignRoles