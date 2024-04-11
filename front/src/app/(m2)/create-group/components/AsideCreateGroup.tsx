import { Button } from "@/components/ui/button"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/classes/FormCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"

interface AsideCreateGroupProps {
  formSteps: FormCreateGroup
}
const AsideCreateGroup = ({ formSteps }: AsideCreateGroupProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const buttons = [
    {
      label: "Criar grupo",
      step: '1',
    }, {
      label: "Adicionar pessoas",
      step: '2',
    }, {
      label: "Atribuir cargos",
      step: '3',
    }, {
      label: "Finalizar",
      step: '4',
    }
  ] as { label: string, step: stepCreateGroup }[]
  function navigateSteps(step: stepCreateGroup) {

    const isNextStep = Number(step) > Number(stepURL)
    let canNavigate = true

    if (isNextStep) {
      if (step === "2") {
        canNavigate = formSteps.verifyStepOne()
      } else if (step === "3") {
        canNavigate = formSteps.verifyStepTwo()
      } else if (step === "4") {
        canNavigate = formSteps.verifyStepThree()
      }
    }

    if (canNavigate) {
      router.push(`./create-group/?step=${step}`)
    }
    
  }
  function returnBgColor(buttonStep: string) {
    if (buttonStep === stepURL) {
      return "bg-secondary text-white hover:text-white hover:bg-secondary"
    } else {
      if (Number(buttonStep) < Number(stepURL)) {
        return "bg-slate-200 hover:bg-slate-300 "
      }
      return "hover:bg-accent"
    }
  }
  return (
    <div className="flex flex-col gap-3">
      {buttons.map(button =>
        <Button
          key={button.step}
          variant={"ghost"}
          onClick={event => navigateSteps(button.step)}
          className={`flex justify-start px-3 w-40 ${returnBgColor(button.step)} `}>
          {button.label}
        </Button>
      )}
    </div>
  )
}

export default AsideCreateGroup