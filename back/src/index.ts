import { PrismaClient as PrismaPostgreClient } from '../prisma/generated/postgre'
import express from "express"
import cors from "cors"
import bodyParser from 'body-parser'
import routes from './routes'
const port = 4000

const app = express()
app.listen(port, () => console.log("servidor conectado"))
app.use(bodyParser.json({ limit: "1mb" }))
app.use(cors({ origin: "*" })) 
routes(app)

const prismaPg = new PrismaPostgreClient()
try {
  await prismaPg.$connect()
  console.log(`Conexão feita com sucesso (porta: ${port})`); 
} catch (err) {
  console.log("Houve um problema na conexão", err);
}
export default prismaPg