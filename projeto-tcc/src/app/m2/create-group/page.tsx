"use client"
import Aside from "@/components/Aside"
import { Card } from "@/components/ui/card"
import AsideCreateGroup from "./components/AsideCreateGroup"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import StepOne from "./components/StepOne"
import stepCreateGroup from "@/types/stepCreateGroup"
import StepTwo from "./components/StepTwo"
import FormCreateGroup from "@/utils/FormCreateGroup"
import { useState } from "react"
import StepThree from "./components/StepThree"

const Chat = () => {
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup

  const [formSteps, setFormSteps] = useState(new FormCreateGroup())

  return (
    <main className="flex w-screen h-screen">
      <Aside page="createGroup"></Aside>
      <div className="flex flex-col items-center w-full py-16">
        <Card className="flex max-w-[50rem] w-full px-8 py-4 gap-5">

          <AsideCreateGroup formSteps={formSteps} />

          <div id="divisor" className="bg-slate-200 h-full w-[2px]"></div>

          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-2xl font-medium">{stepURL}° Etapa</h1>

            <StepOne formSteps={formSteps} setFormSteps={setFormSteps} />

            <StepTwo formSteps={formSteps} setFormSteps={setFormSteps} />

            <StepThree formSteps={formSteps} setFormSteps={setFormSteps}/>

          </div>

        </Card>
      </div>
    </main>
  )
}
export default Chat