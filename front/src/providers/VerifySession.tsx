"use client"
import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import TokensController from "@/controllers/TokensController"
import UserController from "@/controllers/UserController"
import { useUpdateCurrentUser } from "../../states/hooks/useUpdateCurrentUser"
import IUser from "@/interfaces/IUser"

interface VerifySessionProps {
	children: ReactNode
}
const VerifySession = ({ children }: VerifySessionProps) => {
	const router = useRouter()
	const setCurrentUser = useUpdateCurrentUser()
	useEffect(() => {
		load()
	}, [])
	async function load() {
		
		const sessionUserId = await TokensController.getToken()
		if (sessionUserId) {
			const currentUser = await UserController.getUserById(sessionUserId)
			if (currentUser?.data) {
				setCurrentUser(currentUser.data.user)
			}
			return
		}
		router.push("/")
	}
	return <main>{children}</main>
}

export default VerifySession