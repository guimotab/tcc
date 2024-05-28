export default interface IVotingActivity {
  id: string
  title: string
  description?: string
  groupId: string
  endOfVoting: Date
  startOfVoting: Date
  rolesParticipating: string[]
  createdAt: Date
  updatedAt: Date
}