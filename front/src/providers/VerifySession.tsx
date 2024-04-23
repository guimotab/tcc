"use client"
import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import TokensController from "@/controllers/TokensController"
import { useUpdateCurrentUser } from "../../states/hooks/useUpdateCurrentUser"
import UserController from "@/controllers/UserController"

interface VerifySessionProps {
	children: ReactNode
	redirectSucess?: "/home"
	redirectErrorNoToken?: "/"
}
const VerifySession = ({ children, redirectSucess, redirectErrorNoToken }: VerifySessionProps) => {
	const router = useRouter()
	const setCurrentUser = useUpdateCurrentUser()
	const [canLoad, setCanLoad] = useState(false)
	
	useEffect(() => {
		load()
	}, [])

	async function load() {

		const sessionUserId = await TokensController.getToken()
		if (sessionUserId) {
			const currentUser = await UserController.get(sessionUserId)
			if (currentUser?.data) {
				setCurrentUser(currentUser.data.user)
				if (redirectSucess) {
					router.replace(redirectSucess)
					return setCanLoad(false)
				}
				return setCanLoad(true)
			}
		}
		if (redirectErrorNoToken) {
			router.replace("/")
			return setCanLoad(false)
		}
		return setCanLoad(true)
	}
	return canLoad && <>{children}</>
}

export default VerifySession