import { Group } from "@prisma/client";
import { IRecordChat } from "@/interfaces/IRecordChat";
import { User } from "@prisma/client";
import { UserOnGroup } from "@prisma/client"
import { Dispatch, SetStateAction, createContext } from "react";
import { Socket } from "socket.io-client";

export interface IMessageContext {
  groups: Group[] | undefined
  userOnGroups: UserOnGroup[] | []
  currentUsers: User [] | []
  currentGroup: Group | undefined
  recordChats: IRecordChat[]
  socket: Socket
  isAtEndOfChat: boolean
  setDataContext: Dispatch<SetStateAction<IMessageContext>>
}

export const MessageContext = createContext<IMessageContext>({} as IMessageContext);