"use client"
import { ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getCookies } from "@/controllers/CookiesController"

interface VerifySessionProps {
	children: ReactNode
}
const VerifySession = ({ children }: VerifySessionProps) => {
	const router = useRouter()
	useEffect(() => {
		load()
	}, [])
	async function load() {
		const session = await getCookies()
		if (!session) {
			router.push("/")
		}
	}
	return <main>{children}</main>
}

export default VerifySession