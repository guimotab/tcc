"use client"

import InvitesController from "@/controllers/InvitesController"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import GroupController from "@/controllers/GroupController"
import IUser from "@/interfaces/IUser"
import { Session } from "next-auth"
import "../../globals.css";

interface InvitesProps {
  session: Session
}

const Invites = ({ session }: InvitesProps) => {
  const router = useRouter()
  const searchParams = useParams<{ invite: string }>()
  const invite = searchParams.invite as string | null

  useEffect(() => {
    load()
  }, [])

  async function load() {
    await verifyInvite(session.user)
  }

  async function verifyInvite(currentUser: IUser) {
    if (invite) {
      const respInvite = await InvitesController.verifyInvite(invite)

      if (respInvite.resp === "Success") {
        const respGroup = await GroupController.addNewParticipant(currentUser, respInvite.data!)
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