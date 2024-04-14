import { Button } from "@/components/ui/button"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import stepCreateGroup from "@/types/stepCreateGroup"
import FormCreateGroup from "@/classes/FormCreateGroup"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction, useContext } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { FormChatContext } from "../page"

type formNames = "nameGroup" | "description"

interface formArray {
  name: formNames,
  label: string,
  placeholder: string
}

interface StepOneProps {
}

const StepOne = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const stepURL = searchParams.get("step") as stepCreateGroup
  const { formStepsContext, setFormStepsContext } = useContext(FormChatContext)
  const formSteps = new FormCreateGroup(formStepsContext)

  const formSchema = z.object({
    nameGroup: z.string().min(1, "O nome do grupo é obrigatório"),
    description: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nameGroup: formSteps.nameGroup,
      description: formSteps.description,
    },
  })

  function onSubmit(formValues: z.infer<typeof formSchema>) {
    formSteps.updateFormStepOne(formValues)
    const canNextStep = formSteps.verifyStepOne()
    // if(canNextStep){
      setFormStepsContext(formSteps)
    router.push(`./create-group/?step=${Number(stepURL) + 1}`)
    // } 
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
  ] as formArray[]

  return (
    <>
      {stepURL === "1" &&
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

            <Button type="submit">Avançar etapa</Button>
          </form>
        </FormProvider>
      }
    </>
  )
}
export default StepOne