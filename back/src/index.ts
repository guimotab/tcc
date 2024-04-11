import { PrismaClient as PrismaClient1 } from '../prisma/generated/postgre'
import express from "express"
import cors from "cors"
import bodyParser from 'body-parser'

//permite as origens fazer requisição ("*" - todas)
const app = express()
app.listen(4000, () => console.log("servidor conectado"))
app.use(bodyParser.json({ limit: "1mb" }))
app.use(cors({ origin: "*" }))
// routes(app)

const prisma = new PrismaClient1()
try {
  await prisma.$connect()
  console.log("Conexão feita com sucesso\n\n");
} catch (err) {
  console.log("Houve um problema na conexão", err); 
}