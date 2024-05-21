"use client"
import { Card } from "@/components/ui/card"
import AsideCreateGroup from "./components/AsideCreateGroup"
import { useSearchParams } from "next/navigation"
import StepOne from "./components/StepOne"
import stepCreateGroup from "@/types/stepCreateGroup"
import StepTwo from "./components/StepTwo"
import { useState } from "react"
import StepThree from "./components/StepThree"
import StepFour from "./components/StepFour"
import IFormCreateGroup from "@/interfaces/IFormCreateGroup"
import { Session } from "next-auth"
import { CreateChatContext } from "@/providers/CreateChatContext"




interface CreateChatProps {
  session: Session
}

const CreateChat = ({ session }: CreateChatProps) => {
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const [formStepsContext, setFormStepsContext] = useState<IFormCreateGroup>({ nameGroup: "", description: "", participants: [{ email: session.user.email, role: "Líder" }] })

  return (
    <Card className="flex max-w-[50rem] w-full px-8 py-4 gap-5">

      <AsideCreateGroup formStepsContext={formStepsContext} />

      <div id="divisor" className="bg-slate-200 h-full w-[2px]"></div>

      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-2xl font-medium">{stepURL}° Etapa</h1>

        <CreateChatContext.Provider value={{ formStepsContext, setFormStepsContext }}>

          <StepOne />

          <StepTwo session={session} />

          <StepThree />

          <StepFour session={session} />

        </CreateChatContext.Provider>

      </div>

    </Card>
  )
}
export default CreateChat