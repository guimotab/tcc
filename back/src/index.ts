import express, { response } from "express"
import http from "http"
import bodyParser from 'body-parser'
import routes from './routes'
import cors2 from 'cors'
import { Server } from 'socket.io'
import { PrismaClient as PrismaPostgreClient } from '../prisma/generated/postgre'
import { PrismaClient as PrismaMongoClient } from '../prisma/generated/mongo'
import chatRoutes from "./routes/chatRoutes"

const port = 4000
const app = express()
const prismaPg = new PrismaPostgreClient()
const prismaMongo = new PrismaMongoClient()
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: "*" } })

app.use(bodyParser.json({ limit: "1mb" }), cors2({ origin: "*" }))
routes(app)
chatRoutes()

serverHttp.listen(port, () => console.log("servidor conectado"))

try {
  await prismaPg.$connect()
  console.log(`Conexão feita com sucesso (porta: ${port})`);
} catch (err) {
  console.log("Houve um problema na conexão", err);
}

export { prismaPg, prismaMongo, serverHttp, io }
