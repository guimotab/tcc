import IFormCreateGroup from "@/interfaces/IFormCreateGroup"
import { Dispatch, SetStateAction, createContext } from "react"

interface ICreateChatContext {
  formStepsContext: IFormCreateGroup
  setFormStepsContext: Dispatch<SetStateAction<IFormCreateGroup>>
}

export const CreateChatContext = createContext({} as ICreateChatContext)
