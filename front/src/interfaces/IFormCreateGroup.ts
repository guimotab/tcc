import IParticipantsGroup from "./IParticipantsGroup"
import IRolesForm from "./IRolesForm"

interface IFormCreateGroup {
  nameGroup: string,
  description: string
  participants: IParticipantsGroup[]
}

export default IFormCreateGroup