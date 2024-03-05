import IRolesForm from "./IRolesForm"

interface IFormCreateGroup {
  nameGroup: string,
  description: string
  emailParticipants: string[]
  roles: IRolesForm[]
}

export default IFormCreateGroup