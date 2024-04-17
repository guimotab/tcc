import IUser from "@/interfaces/IUser"
import { useSetRecoilState } from "recoil"
import { currentUser } from "../atom"

export const useUpdateCurrentUser = () => {
  const setUseUpdateCurrentUser = useSetRecoilState<IUser>(currentUser)
  return (event: IUser) => {
    return setUseUpdateCurrentUser(event)
  }
}