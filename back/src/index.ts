import express, { response } from "express"
import http from "http"
import bodyParser from 'body-parser'
import routes from './routes'
import cors2 from 'cors'
import { Server } from 'socket.io'
import { PrismaClient as PrismaPostgreClient } from '../prisma/generated/postgre'


const port = 4000
const app = express()
const prismaPg = new PrismaPostgreClient()
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: "*" } })

app.use(bodyParser.json({ limit: "1mb" }), cors2({ origin: "*" }))
routes(app)

serverHttp.listen(port, () => console.log("servidor conectado"))

io.of("/chat").on("connection", socket => {
  console.log("oi");

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('disconnect', (msg) => {
    console.log('user disconnected');
  });
})

try {
  await prismaPg.$connect()
  console.log(`Conexão feita com sucesso (porta: ${port})`);
} catch (err) {
  console.log("Houve um problema na conexão", err);
}

export { prismaPg, serverHttp }
