import FormCreateGroup from "@/classes/FormCreateGroup"
import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Group } from "@prisma/client"
import IParticipantsGroup from "@/interfaces/IParticipantsGroup"
import { User } from "@prisma/client"
import { CreateChatContext } from "@/providers/CreateChatContext"
import defaultRoles from "@/types/defaultRoles"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useContext, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

interface FormAddNewParticipantsProps {
  usersOnGroup: ({
    role: string;
  } & User )[]
  participants: {
    email: string;
    role: defaultRoles;
  }[] | undefined
  setParticipants: Dispatch<SetStateAction<{
    email: string;
    role: defaultRoles;
  }[] | undefined>>
}

const FormAddNewParticipants = ({ usersOnGroup, participants, setParticipants }: FormAddNewParticipantsProps) => {

  const formSchema = z.object({
    emailParticipant: z.string().email("Email inválido!"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailParticipant: "",
    },
  })

  function onAddParticipant(formValues: z.infer<typeof formSchema>) {
    const canAddedUser = checkIfCanAddUser(formValues.emailParticipant)
    if (!canAddedUser) {
      return
    }
    const participantGroup = {
      email: formValues.emailParticipant,
      role: "Usuário"
    } as IParticipantsGroup
    setParticipants(prev => ([...prev || [], participantGroup]))
    form.setValue("emailParticipant", "")
  }

  function checkIfCanAddUser(newParticipantEmail: string) {
    const alreadyAdded = participants?.find(participant => participant.email === newParticipantEmail)
    const alreadyExistsOnGroup = usersOnGroup?.find(participant => participant.email === newParticipantEmail)
    if (alreadyAdded) {
      form.setError("emailParticipant", { message: "Esse participante já foi adicionado na lista" })
      return false
    }

    if (alreadyExistsOnGroup) {
      form.setError("emailParticipant", { message: "Esse participante já está no grupo" })
      return false
    }

    return true
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

export default FormAddNewParticipants