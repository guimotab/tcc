/*
  Warnings:

  - Added the required column `canMultipleVote` to the `VotingActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VotingActivity" ADD COLUMN     "canMultipleVote" BOOLEAN NOT NULL;
