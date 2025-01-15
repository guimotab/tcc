import { Group } from "@prisma/client";
import { User } from "@prisma/client";
import { UserOnGroup } from "@prisma/client"
import { Dispatch, SetStateAction, createContext } from "react";

export interface IMyGroupsContext {
  groups: Group[] | undefined
  usersOnGroup: UserOnGroup[] | []
  users: ({ role: string } & User )[] | []
  setMyGroupsContext: Dispatch<SetStateAction<IMyGroupsContext>>
}

export const MyGroupsContext = createContext<IMyGroupsContext>({} as IMyGroupsContext);