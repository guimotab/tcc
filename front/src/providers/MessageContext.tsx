import IGroup from "@/interfaces/IGroup";
import { IRecordChat } from "@/interfaces/IRecordChat";
import IUser from "@/interfaces/IUser";
import IUserOnGroup from "@/interfaces/IUserOnGroup";
import { Dispatch, SetStateAction, createContext } from "react";
import { Socket } from "socket.io-client";

export interface IMessageContext {
  groups: IGroup[] | undefined
  userOnGroups: IUserOnGroup[] | []
  currentUsers: IUser[] | []
  currentGroup: IGroup | undefined
  recordChats: IRecordChat[]
  socket: Socket
  isAtEndOfChat: boolean
  setDataContext: Dispatch<SetStateAction<IMessageContext>>
}

export const MessageContext = createContext<IMessageContext>({} as IMessageContext);