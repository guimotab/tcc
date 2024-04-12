export default interface IUser {
  id: string;
  name: string;
  email: string;
  image: string
  password: string;
  createdAt: Date;
  updatedAt: Date;
}