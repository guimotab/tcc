import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import IParticipantsGroup from "@/interfaces/IParticipantsGroup"

interface ParticipantsProps {
  participant: IParticipantsGroup
}
const Participants = ({ participant }: ParticipantsProps) => {
  return (
    <li >
      <Card className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <Avatar className="flex items-center">
            <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
              <AvatarFallback>{participant.email[0].toLocaleUpperCase()}</AvatarFallback>
            </div>
          </Avatar>
          <Label>{participant.email}</Label>
        </div>
        <Badge>
          <p>{participant.role} {participant.role === "Líder" ? "(você)" : ""}</p>
        </Badge>
      </Card>
    </li>
  )
}

export default Participants