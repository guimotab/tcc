import IParticipantsGroup from "./IParticipantsGroup"

interface IFormCreateGroup {
  nameGroup: string,
  description: string
  participants: IParticipantsGroup[]
}

export default IFormCreateGroup 