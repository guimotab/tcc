export default interface IEmail {
  from: {
    name: string
    email: string
    project: string
    role: string
  }
  to: string,
  link: string
}