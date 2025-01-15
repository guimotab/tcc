import nodemailer from "nodemailer"
import env from 'dotenv/config'

const transporterEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

if (process.env.http_proxy) {
  transporterEmail.setupProxy(process.env.http_proxy)
}

export default transporterEmail