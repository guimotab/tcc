import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/utils/FormCreateGroup"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { AiOutlineUserDelete } from "react-icons/ai";
import { nextStepCreateGroup } from "../page"
import IParticipantsGroup from "@/interfaces/IParticipantsGroup"
interface StepTwoProps {
  formSteps: FormCreateGroup
  setFormSteps: Dispatch<SetStateAction<FormCreateGroup>>
}
const StepTwo = ({ formSteps, setFormSteps }: StepTwoProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup

  const formSchema = z.object({
    emailParticipant: z.string().endsWith(".com"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailParticipant: "",
    },
  })
  function onAddParticipant(formValues: z.infer<typeof formSchema>) {
    const participantGroup = {
      email: formValues.emailParticipant,
      role: "Usuário"
    } as IParticipantsGroup
    formSteps.updateFormStepTwo(participantGroup)
    setFormSteps(formSteps)
  }

  function nextStep() {
    if (formSteps.participants.length === 0) {
      return
    }
    nextStepCreateGroup(router, stepURL)
  }

  const fieldsForm = [
    {
      name: "emailParticipant" as "emailParticipant",
      label: "Email do integrante",
      placeholder: "Digite o email"
    },
  ]
  return (
    <>
      {stepURL === "2" ?
        <>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onAddParticipant)} className="flex flex-col space-y-3">
              {fieldsForm.map(fieldForm =>
                <FormField
                  key={fieldForm.name}
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {fieldForm.label}
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-4 items-center">
                          <Input placeholder={fieldForm.placeholder} {...field} />
                          <Button size={"sm"} type="submit">Adicionar usuário</Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
            </form>
          </FormProvider >
          <div className="w-full">
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
                  <div>
                    <AiOutlineUserDelete className="text-2xl hover:text-destructive" />
                  </div>
                </Card>
              </li>
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
                  <div>
                    <AiOutlineUserDelete className="text-2xl hover:text-destructive" />
                  </div>
                </Card>
              </li>
            </ul>
          </div>
          <Button onClick={nextStep} variant={formSteps.verifyStepTwo() ? "default" : "ghost"}>Avançar etapa</Button>
        </>
        : ""

      }
    </>
  )
}
export default StepTwo