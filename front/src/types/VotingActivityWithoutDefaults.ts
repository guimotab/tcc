import { VotingActivity } from "@prisma/client";

type VotingActivityWithoutDefaults = Omit<VotingActivity, "id">

export default VotingActivityWithoutDefaults