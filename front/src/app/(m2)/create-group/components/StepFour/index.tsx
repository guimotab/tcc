import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/classes/FormCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext, useState } from "react"
import { Input } from "@/components/ui/input"
import GroupController from "@/controllers/GroupController"
import IGroup from "@/interfaces/IGroup"
import Participants from "./components/Participants"
import LoadingButton from "@/components/LoadingButton"
import { setTimeout } from "timers"
import { toast } from "@/components/ui/use-toast"
import ResolveResponses from "@/utils/resolveResponseErrors"
import Link from "next/link"
import { Session } from "next-auth"
import { CreateChatContext } from "@/providers/CreateChatContext"
import { createToast } from "@/utils/createToastUtil"

interface StepFourProps {
  session: Session
}

const StepFour = ({ session }: StepFourProps) => {

  const router = useRouter()
  const { formStepsContext, setFormStepsContext } = useContext(CreateChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false)
  const [groupCreated, setGroupCreated] = useState(false)

  function prevStep() {
    if (formSteps.verifyStepThree()) {
      router.back()
    }
  }
  async function finish() {
    setIsLoadingSubmit(true)
    const dataGroup = {
      name: formSteps.nameGroup,
      description: formSteps.description,
    } as IGroup
    createGroupRequest(dataGroup)
  }

  async function createGroupRequest(dataGroup: IGroup) {

    const [respGroup] = await Promise.all([
      GroupController.createGroup(dataGroup, session.user, formSteps.participants),
      new Promise((resolve) => setTimeout(resolve, 1000)),
    ])

    if (respGroup.resp !== "Success") {
      const messageResponse = new ResolveResponses(respGroup.resp)
      createToast("destructive", messageResponse)
      return setIsLoadingSubmit(false)
    }
    const messageResponse = new ResolveResponses(respGroup.resp, { title: "Grupo criado com sucesso!", description: "Convites enviados por email aos participantes." })
    createToast("default", messageResponse)
    setIsLoadingSubmit(false)
    setGroupCreated(true)
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
            <div className="flex w-full">

              <div className="space-y-5 w-full">

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
            </div>

            <div className="flex justify-center">
              <div className="flex items-center justify-between w-full max-w-[17rem]">
                <Button onClick={prevStep} variant={"outline"}>Voltar</Button>


                {!groupCreated ?
                  isLoadingSubmit ?
                    <LoadingButton styleButton="w-[5.27rem]" />
                    :
                    <Button
                      onClick={finish}
                      variant={formSteps.verifyStepThree() ? "default" : "outline"}
                      disabled={!formSteps.verifyStepThree()}>
                      Finalizar
                    </Button>
                  :
                  <Link href={"chat"}>
                    <Button>Ver grupo</Button>
                  </Link>
                }
              </div>
            </div>

          </div>
        </div>
      }
    </>
  )
}
export default StepFour
