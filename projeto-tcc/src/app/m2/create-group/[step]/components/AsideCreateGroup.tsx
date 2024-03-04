import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface AsideCreateGroupProps {
  step: '1' | '2' | '3' | '4'
}
const AsideCreateGroup = ({ step }: AsideCreateGroupProps) => {
  const router = useRouter()

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
  ]
  function navigateSteps(step: string) {
    router.push(`./${step}`)
  }
  return (
    <div className="flex flex-col gap-3">
      {buttons.map(button =>
        <Button
          key={button.step}
          onClick={event => navigateSteps(button.step)}
          variant={"ghost"}
          className={`flex justify-start px-3 w-40 ${step === button.step ? "bg-slate-200 hover:bg-slate-200" : "bg-white"}`}>
          {button.label}
        </Button>
      )}
    </div>
  )
}

export default AsideCreateGroup