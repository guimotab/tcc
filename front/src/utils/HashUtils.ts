import bcrypt from "bcryptjs"

export default class HashUtils {
  constructor(private _text: string) { 
  }

  async generateSalt() {
    const salt = await bcrypt.genSalt(12)
    const textSalted = await bcrypt.hash(this._text, salt)
    return textSalted
  }
}