import defaultRoles from "@/types/defaultRoles"

interface IRolesForm {
  level: number
  name: defaultRoles | string
}

export default IRolesForm