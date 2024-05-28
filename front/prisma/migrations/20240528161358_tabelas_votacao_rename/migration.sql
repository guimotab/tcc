/*
  Warnings:

  - You are about to drop the `VoteActivity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VoteActivity" DROP CONSTRAINT "VoteActivity_groupId_fkey";

-- DropForeignKey
ALTER TABLE "VotingWeight" DROP CONSTRAINT "VotingWeight_voteActivityId_fkey";

-- DropTable
DROP TABLE "VoteActivity";

-- CreateTable
CREATE TABLE "VotingActivity" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "endOfVoting" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "rolesParticipating" TEXT[],
    "groupId" TEXT,

    CONSTRAINT "VotingActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VotingActivity" ADD CONSTRAINT "VotingActivity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VotingWeight" ADD CONSTRAINT "VotingWeight_voteActivityId_fkey" FOREIGN KEY ("voteActivityId") REFERENCES "VotingActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
