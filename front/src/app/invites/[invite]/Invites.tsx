"use client"

import InvitesController from "@/controllers/InvitesController"
import { useParams, useRouter } from "next/navigation"
import GroupController from "@/controllers/GroupController"
import IUser from "@/interfaces/IUser"
import { Session } from "next-auth"
import "../../globals.css";
import { useEffect } from "react"

interface InvitesProps {
  session: Session
}

const Invites = ({ session }: InvitesProps) => {
  const router = useRouter()
  const searchParams = useParams<{ invite: string }>()
  const invite = searchParams.invite as string | null
  
  useEffect(() => {
    verifyInvite(session.user)
  }, [])

  async function verifyInvite(currentUser: IUser) {
    if (invite) {
      const respInvite = await InvitesController.verifyInvite(invite)

      if (respInvite.resp === "Success") {
        const respGroup = await GroupController.acceptedNewParticipant(currentUser, respInvite.data!)
        if (respGroup.resp === "Success") {
          return router.replace("/chat")
        }
      }
      return router.replace("error")

    } else {
      return router.replace("error")
    }
  }

  return (
    <div></div>
  )
}

export default Invites