import FormCreateGroup from "@/classes/FormCreateGroup"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import IParticipantsGroup from "@/interfaces/IParticipantsGroup"
import defaultRoles from "@/types/defaultRoles"
import { Label } from "@radix-ui/react-label"
import { Session } from "next-auth"
import { Dispatch, SetStateAction } from "react"
import { AiOutlineUserDelete } from "react-icons/ai"

interface UsersAddedProps {
  session: Session
  participant: IParticipantsGroup
  participants: {
    email: string;
    role: defaultRoles;
  }[] | undefined
  setParticipants: Dispatch<SetStateAction<{
    email: string;
    role: defaultRoles;
  }[] | undefined>>
}

const UsersAdded = ({ session, participant, participants, setParticipants }: UsersAddedProps) => {

  function deleteParticipant() {
    if (participants!.length === 1) {
      return setParticipants(undefined)
    }
    setParticipants(prev => prev!.filter(participant => participant.email !== participant.email))
  }

  function changeUserRole(newRole: defaultRoles) {

    const newInformation = {
      email: participant.email,
      role: newRole
    } as IParticipantsGroup
    const indexParticipant = participants?.findIndex(thisParticipant => thisParticipant.email === participant.email)
    if (indexParticipant) {
      setParticipants(prev => prev?.splice(indexParticipant, 1, newInformation))
    } else {
      setParticipants([newInformation])
    }
  }

  const arrayRoles = ["Líder", "Admin", "Editor", "Usuário"] as defaultRoles[]

  return (
    <li key={participant.email} className="">
      <Card className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Avatar className="flex items-center">
              <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                <AvatarFallback>{participant.email.at(0)?.toUpperCase()}</AvatarFallback>
              </div>
            </Avatar>
            <Label>{participant.email}</Label>
          </div>
          <Select onValueChange={changeUserRole} value={participant.role} >
            <SelectTrigger className="w-fit h-7">
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
            <SelectContent>

              {arrayRoles.map((role, index) =>
                role !== arrayRoles[0] &&
                <SelectItem key={index} value={role}>{role}</SelectItem>
              )}

            </SelectContent>
          </Select>
        </div>
        {session.user.email !== participant.email &&
          <AiOutlineUserDelete onClick={deleteParticipant} className="text-2xl hover:text-destructive" />
        }
      </Card>
    </li>
  )
}

export default UsersAdded