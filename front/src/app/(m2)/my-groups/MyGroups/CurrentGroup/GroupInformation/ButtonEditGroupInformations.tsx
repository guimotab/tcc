import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { MdModeEdit } from "react-icons/md"
import { z } from "zod"
import { GroupInformationContext } from "../GroupInformationContext"
import { useContext } from "react"
import { MyGroupsContext } from "../../MyGroupsContext"
import GroupController from "@/controllers/GroupController"

interface ButtonEditGroupInformationsProps {
}

interface formArray<T> {
  name: T,
  label: string,
  placeholder: string
}

const ButtonEditGroupInformations = ({ }: ButtonEditGroupInformationsProps) => {
  const { currentGroup, setCurrentGroup } = useContext(GroupInformationContext)
  const { groups, setMyGroupsContext } = useContext(MyGroupsContext)

  const editSchema = z.object({
    nameGroup: z.string().min(1, "O nome do grupo é obrigatório").max(15, "O nome pode ter até 15 caracteres"),
    description: z.string().max(30, "A descrição pode ter até 30 caracteres"),
  })

  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      nameGroup: currentGroup!.name,
      description: currentGroup!.description,
    },
  })

  function onSubmit(formValues: z.infer<typeof editSchema>) {
    const name = formValues!.nameGroup
    const description = formValues!.description
    
    GroupController.updateGroupInformations({ ...currentGroup!, name, description })

    //muda a nível de currentGroup
    setCurrentGroup(prev => ({ ...prev!, currentGroup: { ...prev!.currentGroup!, name, description } }))

    //muda a nível de allGroups
    const groupsUpdated = [...groups!]
    const indexGroup = groupsUpdated.findIndex(group => group.id === currentGroup?.id)
    groupsUpdated.splice(indexGroup, 1, { ...currentGroup!, name, description })
    setMyGroupsContext(prev => ({ ...prev, groups: groupsUpdated }))
  }

  function reset() {
    form.setValue("nameGroup", currentGroup!.name)
    form.setValue("description", currentGroup!.description)
  }

  const fieldsForm = [
    {
      name: "nameGroup",
      label: "Nome do Grupo",
      placeholder: "Nome do grupo"
    },
    {
      name: "description",
      label: "Descrição (Opcional)",
      placeholder: "Adicione a descrição aqui"
    },
  ] as formArray<keyof z.infer<typeof editSchema>>[]

  return (
    <AlertDialog>

      <AlertDialogTrigger className="border rounded-md p-1.5 cursor-pointer">
        <MdModeEdit className="text-xl text-gray-900 " />
      </AlertDialogTrigger>

      <AlertDialogContent>

        <AlertDialogHeader>
          <AlertDialogTitle>Alterar informações</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col gap-1">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-3">

              {fieldsForm.map(fieldForm =>
                <FormField
                  key={fieldForm.name}
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{fieldForm.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={fieldForm.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <AlertDialogFooter>
                <AlertDialogCancel
                  onClick={reset}
                  type="button">
                  Cancelar
                </AlertDialogCancel>
                <AlertDialogAction
                  type="submit"
                  disabled={form.getValues("nameGroup").length === 0}
                  className={cn(buttonVariants({ variant: form.getValues("nameGroup").length > 0 ? "default" : "outline" }))}>
                  Concluir
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </FormProvider>
        </div>


      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ButtonEditGroupInformations