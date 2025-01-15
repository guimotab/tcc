import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import IApiResponse from "@/interfaces/api/IApiResponse";
import transporterEmail from "@/lib/transporterEmail";

export async function POST(req: Request, res: NextApiResponse) {
  const { from, link, to } = await req.json()

  try {
    const invite = await transporterEmail.sendMail({
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

    return NextResponse.json({ resp: "Success", data: invite, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 } as IApiResponse)
  }
}