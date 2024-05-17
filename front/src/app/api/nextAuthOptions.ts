import AuthController from "@/controllers/AuthController"
import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

const nextAuthOptions = {
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
    signIn: "/",
  },
} as AuthOptions

export default nextAuthOptions