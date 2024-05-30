import IParticipantsGroup from "@/interfaces/IParticipantsGroup";
import { useContext } from "react";
import { Card } from "@/components/ui/card";
import { AiOutlineUserDelete } from "react-icons/ai";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import FormCreateGroup from "@/classes/FormCreateGroup";
import { Session } from "next-auth";
import { CreateChatContext } from "@/providers/CreateChatContext";

interface UsersAddedProps {
  participant: IParticipantsGroup
  session: Session
}

const UsersAdded = ({ participant, session }: UsersAddedProps) => {
  const { formStepsContext, setFormStepsContext } = useContext(CreateChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)

  function deleteParticipant() {
    formSteps.deleteParticipant(participant.email)
    setFormStepsContext(formSteps)
  }

  return (
    <li key={participant.email} className="">
      <Card className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <Avatar className="flex items-center">
            <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
              <AvatarFallback>{formSteps.getInitialOfEmail(participant.email)}</AvatarFallback>
            </div>
          </Avatar>
          <Label>{participant.email}</Label>
        </div>
        {session.user.email !== participant.email &&
          <AiOutlineUserDelete onClick={deleteParticipant} className="text-2xl hover:text-destructive" />
        }
      </Card>
    </li>
  )
}

export default UsersAdded