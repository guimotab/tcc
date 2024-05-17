import { Button } from "@/components/ui/button"
import stepCreateGroup from "@/types/stepCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext, useEffect } from "react"
import { FormChatContext } from "@/providers/FormChatContext"
import FormAddUsers from "./FormAddUsers"
import UsersAdded from "./UsersAdded"
import FormCreateGroup from "@/classes/FormCreateGroup"

const StepTwo = () => {
  const { formStepsContext, setFormStepsContext } = useContext(FormChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup

  function nextStep() {
    router.push(`./create-group/?step=${Number(stepURL) + 1}`)
  }

  return (
    <>
      {stepURL === "2" &&
        <>
          <div className="w-full">
            <ul className="flex flex-col gap-3">

              <FormAddUsers />

              {formSteps.participants.map(participant =>
                <UsersAdded key={participant.email} participant={participant} />
              )}

            </ul>
          </div>

          <Button onClick={nextStep} disabled={!formSteps.verifyStepTwo()} variant={formSteps.verifyStepTwo() ? "default" : "ghost"}>Avançar etapa</Button>
        </>
      }
    </>
  )
}
export default StepTwo