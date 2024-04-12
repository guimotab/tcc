import AuthController from "@/controllers/AuthController"
import axios from "axios"
import NextAuth, { AuthOptions, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { boolean } from "zod"

const authOptions = {
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
                if (credentials) {
                    const response = await AuthController.login(credentials.email, credentials.password)
                    if (response.data) {
                        const user = response.data.user
                        return user
                    }
                }
                return null
            }

        })
    ],
    pages: {
        signIn: "/cadastro"
    },
} as AuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }