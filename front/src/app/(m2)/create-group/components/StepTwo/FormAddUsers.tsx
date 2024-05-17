import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import IParticipantsGroup from "@/interfaces/IParticipantsGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormChatContext } from "@/providers/FormChatContext"
import FormCreateGroup from "@/classes/FormCreateGroup";


const FormAddUsers = () => {

  const { formStepsContext, setFormStepsContext } = useContext(FormChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)

  const formSchema = z.object({
    emailParticipant: z.string().email("Email inválido!"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailParticipant: "guimotab22@gmail.com",
    },
  })
  function onAddParticipant(formValues: z.infer<typeof formSchema>) {
    const alreadyExists = checkIfAlreadyExist(formValues.emailParticipant)
    if (alreadyExists) {
      form.setError("emailParticipant", { message: "Esse participante já existe" })
      return
    }
    const participantGroup = {
      email: formValues.emailParticipant,
      role: "Usuário"
    } as IParticipantsGroup
    formSteps.updateFormStepTwo(participantGroup)
    setFormStepsContext(formSteps)
  }

  function checkIfAlreadyExist(newParticipantEmail: string) {
    const finded = formSteps.participants.find(participant => participant.email === newParticipantEmail)
    if (finded) {
      return true
    }
    return false
  }

  const fieldsForm = [
    {
      name: "emailParticipant" as "emailParticipant",
      label: "Email do integrante",
      placeholder: "Digite o email"
    },
  ]
  return (
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
  )
}

export default FormAddUsers