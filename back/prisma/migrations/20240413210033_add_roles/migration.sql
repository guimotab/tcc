/*
  Warnings:

  - Added the required column `roles` to the `UserOnGroup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserOnGroup" ADD COLUMN     "roles" TEXT NOT NULL;
