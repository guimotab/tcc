"use server"
import { redirect } from "next/navigation"
import Invites from "./Invites"
import nextAuthOptions from "@/app/api/nextAuthOptions"
import { getServerSession } from "next-auth"

interface InvitesParams {
  params: { invite: string }
}

const InvitesRoot = async ({ params }: InvitesParams) => {
  const url = process.env.URL || "localhost:3000"
  const invite = params.invite
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect(`${url}/invites/${invite}/login`)
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <Invites session={session} />
    </main>
  )
}

export default InvitesRoot