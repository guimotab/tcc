import IFormCreateGroup from "@/interfaces/IFormCreateGroup"
import { Dispatch, SetStateAction, createContext } from "react"

export interface IContext {
  formStepsContext: IFormCreateGroup
  setFormStepsContext: Dispatch<SetStateAction<IFormCreateGroup>>
}

export const FormChatContext = createContext({} as IContext)