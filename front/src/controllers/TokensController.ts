import jwt from 'jsonwebtoken'
import { getCookies, updateCookies } from './CookiesController'

export default abstract class TokensController {
  private static _token: string | undefined
  private static _refresh: string | undefined


  static async getToken() {
    const tokens = await getCookies()

    if (!tokens) {
      return
    }

    this._token = tokens.token
    this._token = tokens.refresh
    const secret = process.env.PUBLIC_NEXT_SECRET!

    if (this._token) {
      try {
        const result = jwt.verify(this._token, secret) as { id: string }
        return result.id
      } catch {
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
    this._token = refresh
  }

  private static verifyRefresh() {
    const secret = process.env.PUBLIC_NEXT_SECRET!
    const secretRefresh = process.env.PUBLIC_NEXT_REFRESH!
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