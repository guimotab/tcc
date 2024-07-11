import defaultRoles from "@/types/defaultRoles"

export default interface IUserOnGroup {
  userId: string
  groupId: string
  role: defaultRoles
  assignedAt: Date
  assignedBy: string
}