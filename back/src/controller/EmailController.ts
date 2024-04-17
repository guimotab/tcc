import { Request, Response } from 'express';
import { messageResponse } from '../types/messageResponse';
import nodemailer from "nodemailer"

interface EmailResponse {
  resp: messageResponse
}

interface reqBodyEmail {
  from: {
    name: string
    email: string
    project: string
    role: string
  }
  to: {
    email: string;
    role: string;
  }
  link: string
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "guimotateste@gmail.com",
    pass: "oxsdastajswyvgts",
  },
});

if (process.env.http_proxy) {
  transporter.setupProxy(process.env.http_proxy)
}


export default abstract class EmailController {
  static async inviteToGroup(req: Request, res: Response) {
    const { from, link, to } = req.body as reqBodyEmail

    try {
      const invite = await transporter.sendMail({
        from: `"ChatWorker" <${from.email}>`, // sender address
        to: to.email, // list of receivers "guimota22@gmail.com, baz@example.com"
        subject: `Você foi convidado(a) para participar do projeto ${from.project}`, // Subject line
        text: "Convite de grupo!", // plain text body
        html: `
            <h3>Olá</h3>
            <p>Você foi convidado(a) pelo ${from.name}(${from.role}) para participar do projeto ${from.project}!</p>
            <p>Para aceitar o convite, basta clicar no link abaixo 👇</p>
            <br />
            <a href="${link}">${link}</a>
            `
      });

      return res.status(200).json({ resp: "Success", data: { invite } } as EmailResponse)
    } catch (err) {
      console.log(err);
      return res.json({ resp: "ServerError" })
    }
  }

  static async sendEmail({ from, link, to }: reqBodyEmail) {
    await transporter.sendMail({
      from: `"ChatWorker" <${from.email}>`, // sender address
      to: to.email, // list of receivers "guimota22@gmail.com, baz@example.com"
      subject: `Você foi convidado(a) para participar do projeto ${from.project}`, // Subject line
      text: "Convite de grupo!", // plain text body
      html: `
          <h3>Olá</h3>
          <p>Você foi convidado(a) pelo ${from.name} (${from.role} do projeto ${from.project}) ${to.role === "Usuário" ? "" : `com o cargo de ${to.role.toLowerCase()}!`}</p>
          <p>Para aceitar o convite, basta clicar no link abaixo 👇</p>
          <br />
          <a href="http://localhost:3000/invites/${link}">https://chatworker/invites/${link}</a>
          `
    });
  }
}