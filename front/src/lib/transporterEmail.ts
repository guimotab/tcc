import nodemailer from "nodemailer"

const transporterEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "guimotateste@gmail.com",
    pass: "oxsdastajswyvgts",
  },
});

if (process.env.http_proxy) {
  transporterEmail.setupProxy(process.env.http_proxy)
}

export default transporterEmail