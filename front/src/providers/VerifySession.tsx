"use client"
import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import TokensController from "@/controllers/TokensController"
import { useUpdateCurrentUser } from "../../states/hooks/useUpdateCurrentUser"
import IUser from "@/interfaces/IUser"
import UserController from "@/controllers/UserController"
import useCurrentUser from "../../states/hooks/useCurrentUser"

interface VerifySessionProps {
	children: ReactNode
}
const VerifySession = ({ children }: VerifySessionProps) => {
	const router = useRouter()
	const setCurrentUser = useUpdateCurrentUser()
	const currentUser = useCurrentUser()

	useEffect(() => {
		load()
	}, [])

	async function load() {

		const sessionUserId = await TokensController.getToken()
		if (sessionUserId) {
			const currentUser = await UserController.get(sessionUserId)
			if (currentUser?.data) {
				setCurrentUser(currentUser.data.user)
			}
			return
		}
		router.push("/")
	}
	return <main>{currentUser && children}</main>
}

export default VerifySession