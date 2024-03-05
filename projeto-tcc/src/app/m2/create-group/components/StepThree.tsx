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
import { IoMdMenu } from "react-icons/io";
interface StepThreeProps {
  formSteps: FormCreateGroup
  setFormSteps: Dispatch<SetStateAction<FormCreateGroup>>
}
const StepThree = ({ formSteps, setFormSteps }: StepThreeProps) => {
  const router = useRouter()
  const [checkRole, setCheckRole] = useState(formSteps.roles.length === 0 ? false : true)
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup

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
                <Button size={"sm"}>Criar cargos</Button>
              </div>
              <ul className="flex flex-col gap-3 max-w-[20rem]">
                <li className="flex items-center gap-3">
                  <IoMdMenu className="text-2xl" />
                  <Card className="flex items-center gap-8 pr-2">
                    <Input value={"Líder"} className="border-none shadow-none focus-visible:ring-0" />
                    <MdDelete className="text-2xl  hover:text-destructive" />
                  </Card>
                </li>
                <li>
                  <Card className="flex items-center gap-8 pr-2">
                    <Input value={"Admin"} className="border-none shadow-none focus-visible:ring-0" />
                    <MdDelete className="text-3xl  hover:text-destructive" />
                  </Card>
                </li>
                <li>
                  <Card className="flex items-center gap-8 pr-2">
                    <Input value={"Usuário"} className="border-none shadow-none focus-visible:ring-0" />
                    <MdDelete className="text-3xl  hover:text-destructive" />
                  </Card>
                </li>
              </ul>
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
                <Badge>
                  <p>Usuário</p>
                </Badge>
              </Card>
            </li>
          </ul>
          <Button variant={formSteps.verifyStepTwo() ? "default" : "ghost"}>Avançar etapa</Button>
        </>
        : ""

      }
    </>
  )
}
export default StepThree