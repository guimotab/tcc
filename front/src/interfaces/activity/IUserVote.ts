export default interface IUserVote {
  id: string
  userId: string
  votedOption: string[]
  votingActivityId?: string
}