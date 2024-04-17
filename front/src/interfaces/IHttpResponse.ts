export default interface IHttpResponse<T, Resp> {
  get(id: string): Promise<Resp>
  post(data: T): Promise<Resp>
  put(id: string, data: T): Promise<Resp>
  delete(id: string): Promise<Resp>
}