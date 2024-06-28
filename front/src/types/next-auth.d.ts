import IUser from "@/interfaces/IUser"
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: IUser
  }
}