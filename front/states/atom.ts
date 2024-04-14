import IUser from "@/interfaces/IUser";
import { atom } from "recoil"

export const currentUser = atom<IUser>({
  key: 'currentUser',
  default: undefined,
});

