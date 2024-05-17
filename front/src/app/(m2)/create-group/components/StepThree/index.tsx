import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext } from "react"
import { FormChatContext } from "@/providers/FormChatContext"
import AssignRoles from "./AssignRoles"
import RolesDescription from "./RolesDescription"
import FormCreateGroup from "@/classes/FormCreateGroup"

interface StepThreeProps {
}
const StepThree = ({ }: StepThreeProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const { formStepsContext, setFormStepsContext } = useContext(FormChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)

  function nextStep() {
    if (formSteps.participants.length === 0) {
      return
    }
    router.push(`./create-group/?step=${Number(stepURL) + 1}`)
  }

  return (
    <>
      {stepURL === "3" &&
        <>
          <div className="space-y-2">
            <Label className="font-semibold text-xl">Atribuir Cargos</Label>

            <ul className="flex flex-col gap-3">
              {formSteps.participants.map(participant =>
                <AssignRoles key={participant.email} participant={participant} />
              )}
            </ul>

          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl">Descrição dos Cargos</Label>
            <Card>
              <RolesDescription />
            </Card>
          </div>

          <Button onClick={nextStep} variant={formSteps.verifyStepTwo() ? "default" : "ghost"}>Avançar etapa</Button>
        </>
      }
    </>
  )
}
export default StepThree
