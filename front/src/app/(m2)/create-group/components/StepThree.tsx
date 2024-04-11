import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/classes/FormCreateGroup"
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
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { FaCheck } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import defaultRoles from "@/types/defaultRoles"
import { IconType } from "react-icons/lib"

interface StepThreeProps {
  formSteps: FormCreateGroup
  setFormSteps: Dispatch<SetStateAction<FormCreateGroup>>
}
const StepThree = ({ formSteps, setFormSteps }: StepThreeProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const arrayRoles = ["Líder", "Admin", "Editor", "Usuário"]
  const [currentRole, setCurrentRole] = useState<string>(arrayRoles[arrayRoles.length - 1])

  function nextStep() {
    if (formSteps.participants.length === 0) {
      return
    }
    nextStepCreateGroup(router, stepURL)
  }

  const infoRoles = [
    {
      role: "Líder",
      deleteGroup: <FaCheck />,
      editGroup: <FaCheck />,
      managerUsers: <FaCheck />
    }, {
      role: "Admin",
      deleteGroup: undefined,
      editGroup: <FaCheck />,
      managerUsers: <FaCheck />
    }, {
      role: "Editor",
      deleteGroup: undefined,
      editGroup: <FaCheck />,
      managerUsers: undefined
    }, {
      role: "Usuário",
      deleteGroup: undefined,
      editGroup: undefined,
      managerUsers: <IoWarningOutline className="text-xl" />
    },
  ] as { role: defaultRoles, deleteGroup: JSX.Element, editGroup: JSX.Element, managerUsers: JSX.Element }[]

  return (
    <>
      {stepURL === "3" &&
        <>
          <div className="space-y-2">
            <Label className="font-semibold text-xl">Atribuir Cargos</Label>
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
                  <Badge>Líder (você)</Badge>
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
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-xl">Descrição dos Cargos</Label>
            <div>

              <Card>
                <Table>
                  <TableCaption><div className="px-3 pb-1.5 flex gap-1 items-center"><IoWarningOutline className="text-xl" />Permissão limitada.</div></TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">Cargo</TableHead>
                      <TableHead className="text-center">Excluir Grupo</TableHead>
                      <TableHead className="text-center">Editar Grupo</TableHead>
                      <TableHead className="text-center">Gerenciar Usuários</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {infoRoles.map(info =>
                      <TableRow >
                        <TableCell className="text-center" >{info.role}</TableCell>
                        <TableCell><div className="flex w-full justify-center">{info.deleteGroup}</div></TableCell>
                        <TableCell><div className="flex w-full justify-center">{info.editGroup}</div></TableCell>
                        <TableCell><div className="flex w-full justify-center">{info.managerUsers}</div></TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Card>

            </div>
          </div>

          <Button onClick={nextStep} variant={formSteps.verifyStepTwo() ? "default" : "ghost"}>Avançar etapa</Button>
        </>
      }
    </>
  )
}
export default StepThree
