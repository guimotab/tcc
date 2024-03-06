import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/utils/FormCreateGroup"
import { useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { MdDelete } from "react-icons/md";
import { Separator } from "@/components/ui/separator"
import { DragDropContext, Draggable, DropResult, Droppable } from "@hello-pangea/dnd"
import { IoMdMenu } from "react-icons/io";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { nextStepCreateGroup } from "../page"
interface StepThreeProps {
  formSteps: FormCreateGroup
  setFormSteps: Dispatch<SetStateAction<FormCreateGroup>>
}
const StepThree = ({ formSteps, setFormSteps }: StepThreeProps) => {
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
  function nextStep() {
    if (formSteps.participants.length === 0) {
      return
    }
    nextStepCreateGroup(router, stepURL)
  }

  return (
    <>
      {stepURL === "3" ?
        <>
          <div>
            <div className="flex items-center gap-2">
              <input id="check-role" type="checkbox" onChange={event => setCheckRole(event.target.checked)} />
              <Label htmlFor="check-role">Criar hierarquia de cargos</Label>
            </div>
          </div>
          {checkRole ?
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-medium">Seus Cargos</h1>
                <Button size={"sm"}>Criar cargo</Button>
              </div>
              <DragDropContext onDragEnd={e => onDragOver(e)}>
                <Droppable droppableId="roles">
                  {(provided) => (
                    <ul className="flex flex-col gap-3 max-w-[18rem]" {...provided.droppableProps} ref={provided.innerRef} >
                      {arrayRoles.map((role, index) =>
                        <Draggable key={role} draggableId={role} index={index}>
                          {(provided) => (
                            <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="flex items-center gap-3 w-full" >
                              <IoMdMenu className="text-2xl" />
                              <Card className="flex items-center gap-8 pr-2 w-full">
                                <Input value={role} className="border-none shadow-none focus-visible:ring-0" onChange={e => ""} />
                                {role === "Líder" || role === "Admin" || role === "Usuário" ?
                                  "" :
                                  <MdDelete onClick={e => console.log("teste")} className="text-3xl hover:text-destructive cursor-default" />
                                }
                              </Card>
                            </li>
                          )}
                        </Draggable>
                      )}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
              <Separator className="my-5" />
            </div>
            : ""
          }
          <ul className="flex flex-col gap-3">
            <li className="">
              <Card className="flex items-center justify-between px-6 py-2">
                <div className="flex items-center gap-3">
                  <Avatar className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                      <AvatarFallback>G</AvatarFallback>
                    </div>
                  </Avatar>
                  <Label>guimota22@gmail.com</Label>
                </div>
                <Badge>
                  <p>Líder (você)</p>
                </Badge>
              </Card>
            </li>
            <li className="">
              <Card className="flex items-center justify-between px-6 py-2">
                <div className="flex items-center gap-3">
                  <Avatar className="flex items-center">
                    <div className="flex items-center justify-center w-9 h-9 bg-slate-300 rounded-full">
                      <AvatarFallback>P</AvatarFallback>
                    </div>
                  </Avatar>
                  <Label>pedro@gmail.com</Label>
                </div>
                <Select onValueChange={value => setCurrentRole(value)} value={currentRole} >
                  <SelectTrigger className="w-fit h-5">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                  <SelectContent>
                    {arrayRoles.map(role =>
                      role !== arrayRoles[0] ?
                        <SelectItem value={role}>{role}</SelectItem>
                        : ""
                    )}
                  </SelectContent>
                </Select>
              </Card>
            </li>
          </ul>
          <Button onClick={nextStep} variant={formSteps.verifyStepTwo() ? "default" : "ghost"}>Avançar etapa</Button>
        </>
        : ""

      }
    </>
  )
}
export default StepThree
