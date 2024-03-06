import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/utils/FormCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { DropResult } from "@hello-pangea/dnd"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
interface StepFourProps {
  formSteps: FormCreateGroup
  setFormSteps: Dispatch<SetStateAction<FormCreateGroup>>
}
const StepFour = ({ formSteps, setFormSteps }: StepFourProps) => {
  const router = useRouter()
  const [checkRole, setCheckRole] = useState(formSteps.roles.length === 0 ? false : true)
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const arrayRoles = ["Líder", "Admin", "Novo Cargo", "Cargo Básico", "Usuário"]
  const [currentRole, setCurrentRole] = useState<string>(arrayRoles[arrayRoles.length - 1])

  function onDragOver(e: DropResult) {
    if (e.destination) {
      const destinationIndex = e.destination.index
      const fromIndex = e.source.index
      if (fromIndex !== 0 && fromIndex !== 1 && fromIndex !== arrayRoles.length - 1) {
        if (destinationIndex !== 0 && destinationIndex !== 1 && destinationIndex !== arrayRoles.length - 1) {
          const element = arrayRoles.splice(fromIndex, 1)[0]
          arrayRoles.splice(destinationIndex, 0, element);
        }
      }
    }
  }
  function prevStep() {
    if (formSteps.verifyStepThree()) {
      router.back()
    }
  }
  function finish() {

  }

  return (
    <>
      {stepURL === "4" ?
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
                    <li>
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
                <Dialog>
                  <DialogTrigger>
                    <Button>Finalizar</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle><p className="text-xl">Aviso!</p></DialogTitle>
                      <DialogDescription className="space-y-4">
                        <div className="text-base">
                          Ao confirmar, você enviará no email de cada participante o acesso ao seu grupo, podendo eles aceitarem ou não.
                        </div>
                        <div className="flex justify-center">
                          <div className="flex justify-between w-full max-w-[15rem]">
                            <DialogClose asChild>
                              <Button variant={"outline"} >Voltar</Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button>Entendi</Button>
                            </DialogClose>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        : ""}
    </>
  )

}
export default StepFour
