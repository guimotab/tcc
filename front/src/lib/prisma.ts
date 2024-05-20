import { PrismaClient as prismaPgClient } from "../../prisma/generated/postgre"
import { PrismaClient as prismaMongoClient } from "../../prisma/generated/mongo"

const prismaPg = new prismaPgClient()
const prismaMongo = new prismaMongoClient()

export { prismaPg, prismaMongo }