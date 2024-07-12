import AuthController from "@/controllers/AuthController"
import UserController from "@/controllers/UserController"
import IUser from "@/interfaces/IUser"
import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
const oneHour = 60 * 60

const nextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 10 * oneHour,
  },
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
            const user = response.data
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
  callbacks: {
    async jwt({ token, user }) {
      //user percisa estar sem foto para carregar o jwt
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      const tokenUser = token.user as IUser
      const respUser = await UserController.get(tokenUser.id)
      if (respUser.data) {
        session = { user: respUser.data } as any
      } else {
        session = undefined as any
      }
      return session
    }
  },
  cookies: {
    sessionToken: {
      name: `chatworker-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true
      }
    },
    callbackUrl: {
      name: `chatworker-next-auth.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: true
      }
    },
    csrfToken: {
      name: `chatworker-next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true
      }
    },
  },
} as AuthOptions

export default nextAuthOptions