import express from "express"
import http from "http"
import bodyParser from 'body-parser'
import routes from './routes'
import cors2 from 'cors'
import { Server } from 'socket.io'
import { PrismaClient as PrismaPostgreClient } from '../prisma/generated/postgre'


const app = express()
app.use(bodyParser.json({ limit: "1mb" }), cors2({ origin: "*" }))
routes(app)

const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: "*" } })
const port = 4000
serverHttp.listen(port, () => console.log("servidor conectado"))
const prismaPg = new PrismaPostgreClient()

try {
  await prismaPg.$connect()
  console.log(`Conexão feita com sucesso (porta: ${port})`);
} catch (err) {
  console.log("Houve um problema na conexão", err);
}

export { prismaPg, io, serverHttp }
