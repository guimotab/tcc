/*
  Warnings:

  - Made the column `groupId` on table `VotingActivity` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "VotingActivity" DROP CONSTRAINT "VotingActivity_groupId_fkey";

-- DropForeignKey
ALTER TABLE "VotingWeight" DROP CONSTRAINT "VotingWeight_voteActivityId_fkey";

-- AlterTable
ALTER TABLE "VotingActivity" ALTER COLUMN "groupId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "VotingActivity" ADD CONSTRAINT "VotingActivity_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VotingWeight" ADD CONSTRAINT "VotingWeight_voteActivityId_fkey" FOREIGN KEY ("voteActivityId") REFERENCES "VotingActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
