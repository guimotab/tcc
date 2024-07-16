import IGroup from "@/interfaces/IGroup";
import IUser from "@/interfaces/IUser";
import IUserOnGroup from "@/interfaces/IUserOnGroup";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IMyGroupsContext {
  groups: IGroup[] | undefined
  usersOnGroup: IUserOnGroup[] | []
  users: ({ role: string } & IUser)[] | []
  setMyGroupsContext: Dispatch<SetStateAction<IMyGroupsContext>>
}

export const MyGroupsContext = createContext<IMyGroupsContext>({} as IMyGroupsContext);