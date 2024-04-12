"use server"
import { IAuthResponse } from "@/service/AuthService"
import { cookies } from "next/headers"
import TokensController from "./TokensController"

interface valueCookies {
  token: string
  refresh: string
  expires: Date
}
export async function getCookies() {
  const session = cookies().get("session")?.value
  if (session) {
    const tokens = JSON.parse(session) as valueCookies
    TokensController.setTokens(tokens.token, tokens.refresh)
    return tokens
  }
  return
}
export async function setCookies(data: IAuthResponse) {
  // const fiveSeconds = 1000 * 5
  const oneHour = 60000 * 60
  const expires = new Date(Date.now() + oneHour * 24)
  const valueCookies = { token: data.token, refresh: data.refresh, expires } as valueCookies
  cookies().set("session", JSON.stringify(valueCookies), { expires, httpOnly: true })
}

export async function updateCookies(token: string, refresh: string) {
  const session = cookies().get("session")!.value
  const tokens = JSON.parse(session) as valueCookies
  const valueCookies = { token, refresh, expires: tokens.expires } as valueCookies
  cookies().set("session", JSON.stringify(valueCookies), { expires: tokens.expires, httpOnly: true })
}
export async function deleteCookies() {
  cookies().set("session", "", { expires: new Date(0) })
}