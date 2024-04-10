import defaultRoles from "@/types/defaultRoles"

interface IParticipantsGroup{
  email: string
  role: defaultRoles | string
}

export default IParticipantsGroup