import { Group } from "@prisma/client";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IGroupInformationContext {
  currentGroup: Group | undefined
  setCurrentGroup: Dispatch<SetStateAction<IGroupInformationContext | undefined>>
}

export const GroupInformationContext = createContext<IGroupInformationContext>({} as IGroupInformationContext);