"use client"
import Aside from "@/app/(m2)/components/Aside"
import { Card } from "@/components/ui/card"
import AsideCreateGroup from "./components/AsideCreateGroup"
import { useSearchParams } from "next/navigation"
import StepOne from "./components/StepOne"
import stepCreateGroup from "@/types/stepCreateGroup"
import StepTwo from "./components/StepTwo"
import { Dispatch, SetStateAction, createContext, useState } from "react"
import StepThree from "./components/StepThree"
import StepFour from "./components/StepFour"
import IFormCreateGroup from "@/interfaces/IFormCreateGroup"
import useCurrentUser from "../../../../states/hooks/useCurrentUser"

interface IContext {
  formStepsContext: IFormCreateGroup
  setFormStepsContext: Dispatch<SetStateAction<IFormCreateGroup>>
}

export const FormChatContext = createContext({} as IContext)

const Chat = () => {
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const currentUser = useCurrentUser()
  const [formStepsContext, setFormStepsContext] = useState<IFormCreateGroup>({ nameGroup: "", description: "", participants: [{ email: currentUser.email, role: "Líder" }] })

  return (
    <main className="flex h-screen">
      <Aside page="createGroup" />

      <div className="flex flex-col items-center w-full py-16">
        <Card className="flex max-w-[50rem] w-full px-8 py-4 gap-5">

          <AsideCreateGroup formStepsContext={formStepsContext} />

          <div id="divisor" className="bg-slate-200 h-full w-[2px]"></div>

          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-2xl font-medium">{stepURL}° Etapa</h1>

            <FormChatContext.Provider value={{ formStepsContext, setFormStepsContext }}>

              <StepOne />

              <StepTwo />

              <StepThree />
 
              <StepFour />

            </FormChatContext.Provider>

          </div>

        </Card>
      </div>

    </main>
  )
}
export default Chat