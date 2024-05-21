import transporterEmail from "@/lib/transporterEmail"

interface paramsSendEmail {
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

export default abstract class EmailController {

  static async sendEmail({ from, link, to }: paramsSendEmail) {
    const url = process.env.NEXTAUTH_URL || "http://localhost:3000"
    await transporterEmail.sendMail({
      from: `"ChatWorker" <${from.email}>`, // sender address
      to: to.email, // list of receivers "guimota22@gmail.com, baz@example.com"
      subject: `Você foi convidado(a) para participar do projeto ${from.project}`, // Subject line
      text: "Convite de grupo!", // plain text body
      html: `
        <h3>Olá</h3>
        <p>Você foi convidado(a) pelo ${from.name} (${from.role} do projeto ${from.project}) ${to.role === "Usuário" ? "" : `com o cargo de ${to.role.toLowerCase()}!`}</p>
        <p>Para aceitar o convite, basta clicar no link abaixo 👇</p>
        <br />
        <a href="${url}/invites/${link}">https://chatworker/invites/${link}</a>
        `
    });
  }
}