import { Group } from "@prisma/client"
import IApiResponse from "@/interfaces/api/IApiResponse"
import { prismaPg } from "@/lib/prisma"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"

interface reqParams {
  id: string
}

interface reqBodyPost {
  group: Group
}

export async function GET(request: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {
  const { id } = params

  try {
    const group = await prismaPg.group.findUnique({ where: { id } })

    if (!group) {
      return NextResponse.json({ resp: "GroupNotFound", status: 400 } as IApiResponse)
    }

    return NextResponse.json({ resp: "Success", data: group, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}


export async function DELETE(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id } = params

  try {
    await prismaPg.group.delete({ where: { id } })

    return NextResponse.json({ resp: "Success", status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}

export async function PUT(req: Request,
  { params }: { params: reqParams },
  res: NextApiResponse) {

  const { id } = params
  const { group } = await req.json() as reqBodyPost

  try {
    const newGroup = await prismaPg.group.update({ where: { id }, data: group })

    return NextResponse.json({ resp: "Success", data: newGroup, status: 200 } as IApiResponse)
  } catch (err) {
    console.log(err);
    return NextResponse.json({ resp: "ServerError", status: 500 })
  }
}
