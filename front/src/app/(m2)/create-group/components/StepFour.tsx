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
import { FormChatContext } from "../page"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
interface StepFourProps {
}

const StepFour = ({ }: StepFourProps) => {
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
  function finish() {

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
                  {formSteps.participants[0] && formSteps.participants.map(participant =>
                    <li key={participant.email}>
                      <Card className="flex items-center justify-between px-6 py-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="flex items-center">
                            <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                              <AvatarFallback>{participant.email[0].toLocaleUpperCase()}</AvatarFallback>
                            </div>
                          </Avatar>
                          <Label>{participant.email}</Label>
                        </div>
                        <Badge>
                          <p>{participant.role} {participant.role === "Líder" ? "(você)" : ""}</p>
                        </Badge>
                      </Card>
                    </li>
                  )}
                </ul>
              </div>

            </div>

            <div className="flex justify-center">
              <div className="flex items-center justify-between w-full max-w-[17rem]">
                <Button onClick={prevStep} variant={"outline"}>Voltar</Button>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button>Finalizar</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Aviso!</AlertDialogTitle>
                      <AlertDialogDescription className="text-base">
                        Ao confirmar, você enviará no email de cada participante o acesso ao seu grupo, podendo eles aceitarem ou não.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Voltar</AlertDialogCancel>
                      <AlertDialogAction>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

              </div>
            </div>

          </div>
        </div>
      }
    </>
  )

}
export default StepFour
