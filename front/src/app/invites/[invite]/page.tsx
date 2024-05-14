"use client"

import InvitesController from "@/controllers/InvitesController"
import TokensController from "@/controllers/TokensController"
import UserController from "@/controllers/UserController"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import useCurrentUser from "../../../../states/hooks/useCurrentUser"
import { useUpdateCurrentUser } from "../../../../states/hooks/useUpdateCurrentUser"
import GroupController from "@/controllers/GroupController"
import IUser from "@/interfaces/IUser"

const Invites = () => {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useParams<{ invite: string }>()
  const invite = searchParams.invite as string | null
  const setCurrentUser = useUpdateCurrentUser()
  const currentUser = useCurrentUser()

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const currentUser = await verifyAccount()
    if (currentUser) {
      await verifyInvite(currentUser)
    }
  }

  async function verifyAccount() {
    const sessionUserId = await TokensController.getToken()
    if (sessionUserId) {
      const currentUser = await UserController.get(sessionUserId)
      if (currentUser?.data) {
        setCurrentUser(currentUser.data.user)
        return currentUser.data.user
      }
      return
    }
    router.push(pathName + "/login")
  }
  async function verifyInvite(currentUser: IUser) {
    if (invite) {
      const respInvite = await InvitesController.verifyInvite(invite)

      if (respInvite.resp === "Success") {
        const respGroup = await GroupController.addNewParticipant(currentUser, respInvite.data!.invites)
        if (respGroup.resp === "Success") {
          return router.replace("/chat")
        }
      }
      router.replace("error")
      // throw new Error()

    } else {
      router.replace("error")
      // throw new Error()
    }
  }

  return (
    <main className="flex items-center justify-center h-screen">

    </main>
  )
}

export default Invites