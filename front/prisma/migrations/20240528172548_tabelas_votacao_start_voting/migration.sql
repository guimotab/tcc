/*
  Warnings:

  - Added the required column `startOfVoting` to the `VotingActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VotingActivity" ADD COLUMN     "startOfVoting" TIMESTAMP(3) NOT NULL;
