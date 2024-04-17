import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/classes/FormCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FormChatContext } from "../../page"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import InvitesController from "@/controllers/InvitesController"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"
import EmailController from "@/controllers/EmailController"
import IEmail from "@/interfaces/IEmail"
import Participants from "./components/Participants"
interface StepFourProps {
}

const StepFour = ({ }: StepFourProps) => {

  const currentUser = useCurrentUser()
  const router = useRouter()
  const { formStepsContext, setFormStepsContext } = useContext(FormChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup

  function prevStep() {
    if (formSteps.verifyStepThree()) {
      router.back()
    }
  }
  async function finish() {
    const dataGroup = {
      name: formSteps.nameGroup,
      description: formSteps.description,
    } as IGroup

    const respGroup = await GroupController.createGroup(dataGroup, currentUser, formSteps.participants)

    if (respGroup.resp !== "Success") {
      console.log(respGroup.resp);
      return
    }

    console.log("Sucesso");
  }

  return (
    <>
      {stepURL === "4" &&
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-xl font-medium">Revise as informações</h1>
            <Label htmlFor="">Clique nas etapas ao lado para fazer alterações caso precise.</Label>
          </div>
          <div className="space-y-4">
            <div className="space-y-5">

              <div>
                <Label>Nome do grupo</Label>
                <Input value={formSteps.nameGroup} readOnly />
              </div>

              <div>
                <Label>Descriçao do grupo</Label>
                <Input value={formSteps.description} readOnly />
              </div>

              <div>
                <Label>Participantes</Label>
                <ul className="space-y-3">
                  {formSteps.participants[0] &&
                    formSteps.participants.map(participant =>
                      <Participants key={participant.email} participant={participant} />
                    )}
                </ul>
              </div>

            </div>

            <div className="flex justify-center">
              <div className="flex items-center justify-between w-full max-w-[17rem]">
                <Button onClick={prevStep} variant={"outline"}>Voltar</Button>

                <Button
                  onClick={finish}
                  variant={formSteps.verifyStepThree() ? "default" : "outline"}
                  disabled={!formSteps.verifyStepThree()}>
                  Finalizar
                </Button>
              </div>
            </div>

          </div>
        </div>
      }
    </>
  )
}
export default StepFour
