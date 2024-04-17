-- CreateTable
CREATE TABLE "Invites" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invites" ADD CONSTRAINT "Invites_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
