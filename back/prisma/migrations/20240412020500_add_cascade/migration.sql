-- DropForeignKey
ALTER TABLE "Form" DROP CONSTRAINT "Form_groupId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnGroup" DROP CONSTRAINT "UserOnGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "UserOnGroup" DROP CONSTRAINT "UserOnGroup_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserOnGroup" ADD CONSTRAINT "UserOnGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnGroup" ADD CONSTRAINT "UserOnGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
