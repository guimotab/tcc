import { Button } from "@/components/ui/button"
import stepCreateGroup from "@/types/stepCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext, useEffect } from "react"
import FormAddUsers from "./FormAddUsers"
import UsersAdded from "./UsersAdded"
import FormCreateGroup from "@/classes/FormCreateGroup"
import { CreateChatContext } from "@/providers/CreateChatContext"
import { Session } from "next-auth"

interface StepTwoProps {
  session: Session
}

const StepTwo = ({ session }: StepTwoProps) => {
  const { formStepsContext, setFormStepsContext } = useContext(CreateChatContext)
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
                <UsersAdded session={session} key={participant.email} participant={participant} />
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