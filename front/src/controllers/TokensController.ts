import jwt from 'jsonwebtoken'
import { getCookies, updateCookies } from './CookiesController'
import dot from "dotenv"

dot.config()
export default abstract class TokensController {
  private static _token: string | undefined
  private static _refresh: string | undefined


  static async getToken() {
    const tokens = await getCookies()

    if (!tokens) {
      return
    }

    this._token = tokens.token
    this._refresh = tokens.refresh
    const secret = process.env.NEXT_PUBLIC_SECRET!

    if (this._token) {
      try {
        const result = jwt.verify(this._token, secret) as { id: string }
        return result.id
      } catch (err) {
        // console.log(err);
        
        const id = this.verifyRefresh()
        if (id) {
          return id
        }
      }
    }
    return
  }

  static setTokens(token: string, refresh: string) {
    this._token = token
    this._refresh = refresh
  }

  private static verifyRefresh() {
    const secret = process.env.NEXT_PUBLIC_SECRET!
    const secretRefresh = process.env.NEXT_PUBLIC_REFRESH!
    try {
      const result = jwt.verify(this._refresh!, secretRefresh) as { id: string }
      this._token = jwt.sign({ id: result.id, }, secret, { expiresIn: "5m" })
      updateCookies(this._token, this._refresh!)
      return result.id
    } catch {
      return
    }
  }

  static deleteTokens() {
    this._token = undefined
    this._token = undefined
  }

}