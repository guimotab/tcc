/*
  Warnings:

  - Made the column `votingActivityId` on table `UserVote` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserVote" DROP CONSTRAINT "UserVote_votingActivityId_fkey";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "photo" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "photo" TEXT;

-- AlterTable
ALTER TABLE "UserVote" ALTER COLUMN "votingActivityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserVote" ADD CONSTRAINT "UserVote_votingActivityId_fkey" FOREIGN KEY ("votingActivityId") REFERENCES "VotingActivity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
