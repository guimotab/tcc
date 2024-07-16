import IHttpResponse from "@/interfaces/IHttpResponse"
import { MessageResponse } from "@/types/MessageResponse"
import axios from "axios"

export default class HttpService<T, Resp> implements IHttpResponse<T, Resp> {

  protected url: string

  constructor(pathUrl: string) {
    const url = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
    this.url = `${url}/api/${pathUrl}`
  }

  async get(id: string) {
    const result = await axios.get(`${this.url}/${id}`).catch(this.handleError)
    return result.data
  }

  async put(id: string, data: T) {
    const result = await axios.put(`${this.url}/${id}`, { id, ...data }).catch(this.handleError)
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
    return { data: { resp: "AxiosError" } } as { data: { resp: MessageResponse } }
  }

}