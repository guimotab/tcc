npx prisma generate --schema prisma/schema1.prisma 
npx prisma migrate dev --schema ./prisma/schema1.prisma --name init

npx prisma migrate dev --schema ./prisma/schema2.prisma --name init