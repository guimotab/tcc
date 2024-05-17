import IHttpResponse from "@/interfaces/IHttpResponse"
import { messageResponse } from "@/types/messageResponse"
import axios from "axios"
import env from "dotenv"

export default class HttpService<T, Resp> implements IHttpResponse<T, Resp> {

  protected url: string

  constructor(pathUrl: string) {
    env.config()
    const urlFront = process.env.URL_BACKEND || "http://localhost:4000"
    this.url = `${urlFront}/${pathUrl}`
  }

  async get(id: string) {
    const result = await axios.get(`${this.url}/${id}`).catch(this.handleError)
    return result.data
  }

  async put(id: string, data: T) {
    const result = await axios.put(`${this.url}`, { id, ...data }).catch(this.handleError)
    return result.data
  }

  async post(data: T) {
    const result = await axios.post(`${this.url}`, { ...data }).catch(this.handleError)
    return result.data
  }

  async delete(id: string) {
    const result = await axios.delete(`${this.url}/${id}`).catch(this.handleError)
    return result.data
  }

  protected handleError(error: any) {
    console.log(error)
    return { data: { resp: "AxiosError" } } as { data: { resp: messageResponse } }
  }

}