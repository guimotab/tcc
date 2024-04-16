import { Request, Response } from 'express';
import { messagesResponse } from '../types/messagesResponse';
import nodemailer from "nodemailer"

interface EmailResponse {
  resp: messagesResponse
}

interface reqBodyEmail {
  from: {
    name: string
    email: string
    project: string
    role: string
  }
  to: string,
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

transporter.setupProxy("http://10.20.0.4:3128")


export default abstract class EmailController {
  static async inviteToGroup(req: Request, res: Response) {
    const { from, link, to } = req.body as reqBodyEmail

    try {
      const invite = await transporter.sendMail({
        from: `"ChatWorker" <${from.email}>`, // sender address
        to, // list of receivers "guimota22@gmail.com, baz@example.com"
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
      return res.json({ resp: "Ocorrou um error no servidor!" })
    }
  }

  static sendEmail({ from, link, to }: reqBodyEmail) {
    transporter.sendMail({
      from: `"ChatWorker" <${from.email}>`, // sender address
      to, // list of receivers "guimota22@gmail.com, baz@example.com"
      subject: `Você foi convidado(a) para participar do projeto ${from.project}`, // Subject line
      text: "Convite de grupo!", // plain text body
      html: `
          <h3>Olá</h3>
          <p>Você foi convidado(a) pelo ${from.name}(${from.role}) para participar do projeto ${from.project}!</p>
          <p>Para aceitar o convite, basta clicar no link abaixo 👇</p>
          <br />
          <a href="http://localhost:3000/invites/${link}">https://chatworker/invites/${link}</a>
          `
    });
  }

}