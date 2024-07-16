import IGroup from "@/interfaces/IGroup";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IGroupInformationContext {
  currentGroup: IGroup | undefined
  setCurrentGroup: Dispatch<SetStateAction<IGroupInformationContext | undefined>>
}

export const GroupInformationContext = createContext<IGroupInformationContext>({} as IGroupInformationContext);