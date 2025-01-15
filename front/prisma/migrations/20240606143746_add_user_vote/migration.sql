/*
  Warnings:

  - You are about to drop the column `participantVotesId` on the `VotingActivity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VotingActivity" DROP COLUMN "participantVotesId";

-- CreateTable
CREATE TABLE "UserVote" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "votedOption" TEXT[],
    "votingActivityId" TEXT,

    CONSTRAINT "UserVote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserVote" ADD CONSTRAINT "UserVote_votingActivityId_fkey" FOREIGN KEY ("votingActivityId") REFERENCES "VotingActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
