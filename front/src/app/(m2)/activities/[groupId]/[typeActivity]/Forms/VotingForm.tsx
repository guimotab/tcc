"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import defaultRoles from "@/types/defaultRoles"
import { zodResolver } from "@hookform/resolvers/zod"
import dayjs from "dayjs"
import React from "react"
import { HTMLInputTypeAttribute, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { DateRange } from "react-day-picker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IVotingActivityWithoutDefaults } from "@/interfaces/activity/IVotingActivity"
import { IVotingWeightWithoutDefaults } from "@/interfaces/activity/IVotingWeight"
import ActivityController from "@/controllers/ActivityController"
import ResolveResponses from "@/utils/resolveResponseErrors"
import { toast } from "@/components/ui/use-toast"

type participantsVotingTypes = "Todos" | "Admin" | "Editor" | "Usuário"

interface IFields<T> {
  name: T
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute | "select" | "toggle" | "switch"
  classNameDiv?: string
}

interface IArrayVote {
  id: number,
  value: string
}

interface VotiginForm {
  groupId: string
}

const VotingForm = ({ groupId }: VotiginForm) => {
  const toggleParticipantsVoting = ["Todos", "Admin", "Editor", "Usuário"] as participantsVotingTypes[]
  const weightVotes = ["1", "2", "3"] as string[]
  const [isWeightedVoting, setIsWeightedVoting] = useState(false)
  const [roleWeight, setRoleWeight] = useState({ Usuário: "1", Editor: "1", Admin: "1", Líder: "1" } as Record<defaultRoles, "1" | "2" | "3">)
  const [data, setDate] = useState<DateRange | undefined>({
    from: dayjs().toDate(),
    to: dayjs().add(1).toDate(),
  })
  const [voteOptions, setVoteOptions] = useState<IArrayVote[]>([{ id: 1, value: "" }, { id: 2, value: "" }])
  const [multipleVotes, setMultipleVotes] = useState(false)

  const formSchema = z.object({
    title: z.string().min(1, "O email é obrigatório!"),
    participantsVoting: z.string().array().min(1, "Escolha pelo menos um cargo!"),
    weightedVoting: z.boolean(),
    dayStartEndVoting: z.object({
      from: z.date().optional(),
      to: z.date().optional(),
    }, { required_error: "Você deve escolher uma data de início e fim!" }),
    timeEndVoting: z.object({
      hour: z.string(),
      minute: z.string()
    }),
    questionVote: z.string().min(1, "A pergunta da votação é obrigatória!"),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Votação teste",
      participantsVoting: toggleParticipantsVoting,
      weightedVoting: false,
      dayStartEndVoting: {
        from: data?.from,
        to: data?.to,
      },
      timeEndVoting: {
        hour: dayjs().hour().toString(),
        minute: dayjs().minute().toString()
      },
      questionVote: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const startOfVoting = dayjs(values.dayStartEndVoting.from)
    const endOfVoting = dayjs(values.dayStartEndVoting.to)
      .set("hour", Number(values.timeEndVoting.hour)).set("minute", Number(values.timeEndVoting.minute))
    const arrayWeights = Object.entries(roleWeight).map(([key, value]) => ({ role: key, weight: Number(value) }))
    const weights = values.weightedVoting ? arrayWeights : toggleParticipantsVoting.map(participant => ({ role: participant, weight: 1 }))
    
    const votingForm = {
      title: values.title,
      startOfVoting: startOfVoting.toDate(),
      endOfVoting: endOfVoting.toDate(),
      rolesParticipating: values.participantsVoting.filter(participant => participant !== "Todos"),
      voteOptions: voteOptions.map(option => option.value.trim()).filter(option => option !== ""),
      canMultipleVote: multipleVotes,
      groupId,
      weights
    } as IVotingActivityWithoutDefaults & { weights: IVotingWeightWithoutDefaults[] }

    const respVote = await ActivityController.createNewVote(votingForm)

    if (!respVote.data) {
      const message = new ResolveResponses(respVote.resp)
      showToast("destructive", message)
    }

    console.log("sucesso!");

  }

  function handleParticipantsVoting(values: participantsVotingTypes[]) {
    form.clearErrors("participantsVoting")
    const hadOptionAll = form.getValues("participantsVoting")?.find(value => value === "Todos") //se o "Todos" estava marcado
    const hasOptionAll = values.find(value => value === "Todos") //se o "Todos" está marcado

    if (hadOptionAll && !hasOptionAll) {
      //se o botão "todos" foi deselecionado
      return form.setValue("participantsVoting", [])
    }


    if (!hadOptionAll && hasOptionAll) {
      //se o botão "todos" foi selecionado

      return form.setValue("participantsVoting", ["Todos", "Admin", "Editor", "Usuário"])
    }

    if (values.length === 3 && hasOptionAll) {
      //se todos os botões estavam selecionados porém um botão foi deselecionado e não foi o "Todos"
      const newValue = values.filter(value => value !== "Todos")
      return form.setValue("participantsVoting", newValue)
    }

    const selectedAll = values.length === 3
    if (selectedAll) {
      //se os 3 cargos são selecionados
      return form.setValue("participantsVoting", ["Todos", "Admin", "Editor", "Usuário"])
    }

    //se apenas alguns cargos são selecionados
    form.setValue("participantsVoting", values)
  }

  function handleWeightVoting(key: defaultRoles, value: "1" | "2" | "3") {
    if (!value) {
      return
    }
    setRoleWeight(prev => ({ ...prev, [key]: value }))
  }

  function changeRangeDate(value: DateRange | undefined) {
    setDate(value)
    form.setValue("dayStartEndVoting.from", value?.from)
    form.setValue("dayStartEndVoting.to", value?.to)
  }

  function changeTimeStartEndVoting(value: string, type: "endHour" | "endMin") {
    let newTimeEnd = { ...form.getValues("timeEndVoting") }
    if (type === "endHour") {
      newTimeEnd.hour = value
    } else {
      newTimeEnd.minute = value
    }
    form.setValue("timeEndVoting", newTimeEnd)
  }

  function createNewOption(newVoteArray: IArrayVote[], lastId: number) {
    //se o último input foi modificado, adiciona outro
    newVoteArray.push({ id: lastId + 1, value: "" })
  }

  function checkDeleteOption(id: number) {
    if (voteOptions.length === 2) {
      return
    }

    //penúltimo item
    const secondToLastItem = voteOptions[voteOptions.length - 2]
    const isSecondToLast = secondToLastItem.id === id
    if (isSecondToLast) {
      if (secondToLastItem.value === "") {
        const newVoteArray = [...voteOptions]
        newVoteArray.pop()
        setVoteOptions(newVoteArray)
      }
    }
  }

  function changeInputOptionVote(event: React.ChangeEvent<HTMLInputElement>, id: number) {
    const value = event.target.value
    const lastItem = voteOptions[voteOptions.length - 1]
    const indexItemChanged = voteOptions.findIndex(vote => vote.id === id)
    const voteChanged = [...voteOptions]

    voteChanged.splice(indexItemChanged, 1, { id: voteOptions[indexItemChanged].id, value })
    if (lastItem.id === id) {
      createNewOption(voteChanged, lastItem.id)
    }
    setVoteOptions(voteChanged)
  }

  function showToast(variant: "default" | "destructive", messageResponse: ResolveResponses) {
    const { title, description } = messageResponse.resolveResponse()
    toast({
      title,
      description,
      variant,
    })
  }

  const fields = [
    {
      name: "title",
      label: "Nome da votação",
      type: "text",
      placeholder: "Insira o nome da votação",
      classNameDiv: "col-span-2",
    },
    {
      name: "dayStartEndVoting",
      label: "Período da votação",
      type: "date",
      placeholder: "Escolha as datas",
      classNameDiv: "row-start-2 justify-end gap-1",
    },
    {
      name: "timeEndVoting",
      label: "Horário término da votação",
      type: "select",
      classNameDiv: "row-start-2",
    },
    {
      name: "participantsVoting",
      label: "Quem pode participar da votação?",
      type: "toggle",
      placeholder: "Insira o nome da votação",
      classNameDiv: "col-start-1 h-full col-span-2"
    },
    {
      name: "weightedVoting",
      label: "Votação com pesos personalizados?",
      type: "switch",
      placeholder: "Insira o nome da votação",
      classNameDiv: "row-start-1 row-span-3 col-span-2",
    },
    {
      name: "questionVote",
      label: "Pergunta da votação",
      type: "text",
      placeholder: "Insira a pergunta da votação",
      classNameDiv: "col-span-4",
    },

  ] as IFields<keyof z.infer<typeof formSchema>>[]

  const hours = Array.from({ length: 24 }, (_, index) => index.toString())
  const minutes = Array.from({ length: 60 }, (_, index) => index.toString())

  return (
    <div className="flex flex-col gap-3 px-8">
      <h1 className="text-2xl font-semibold">Criar Votação</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-4 grid-rows-[auto_auto_1fr] gap-x-8 gap-y-5 justify-start">
          {fields.map(fieldForm =>
            <React.Fragment key={fieldForm.name}>
              {(fieldForm.name === "title") &&
                <FormField
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    < FormItem className={fieldForm.classNameDiv}>
                      <FormLabel>{fieldForm.label}</FormLabel>
                      <FormControl>
                        <Input type={fieldForm.type} placeholder={fieldForm.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }

              {(fieldForm.name === "participantsVoting") &&
                <FormField
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    < FormItem className={fieldForm.classNameDiv}>
                      <FormLabel>{fieldForm.label}</FormLabel>
                      <ToggleGroup type="multiple" value={form.getValues("participantsVoting")} className="w-fit" onValueChange={handleParticipantsVoting} >
                        {toggleParticipantsVoting.map((toggle, index) =>
                          <ToggleGroupItem key={index} value={toggle} className="border">{toggle}</ToggleGroupItem>
                        )}
                      </ToggleGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }

              {fieldForm.name === "weightedVoting" &&
                <FormField
                  key={fieldForm.name}
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    <FormItem className={fieldForm.classNameDiv}>
                      {fieldForm.type === "switch" &&
                        <>
                          <FormLabel>{fieldForm.label}</FormLabel>
                          <Card className="flex flex-col px-4 py-2.5 w-fit gap-4 col-start-2 row-start-1">
                            <div className="flex items-center gap-5">
                              <div className="flex flex-col gap-1">
                                <Label className="text-base">Habilitar votação com pesos personalizados</Label>
                                <Label className="text-slate-500 font-medium">Ative essa opção para personalizar o peso dos votos de cada cargo</Label>
                              </div>
                              <Switch onCheckedChange={setIsWeightedVoting} />
                            </div>

                            {isWeightedVoting &&
                              <div className="space-y-3">
                                <Label className="text-base">Pesos do voto</Label>
                                <div className="grid grid-cols-[auto_auto] gap-3 w-full grid-">
                                  {Object.entries(roleWeight).reverse().map(([key, value]) =>
                                    <div className="flex max-w-[11rem] w-full justify-between items-center gap-3">
                                      <Label>{key}</Label>
                                      <ToggleGroup type="single" value={value} className="w-fit" onValueChange={event => handleWeightVoting(key as defaultRoles, event as "1" | "2" | "3")}>
                                        {weightVotes.map(weight =>
                                          <ToggleGroupItem key={weight} value={weight} className="border h-7 w-9">{weight}</ToggleGroupItem>
                                        )}
                                      </ToggleGroup>
                                    </div>
                                  )}
                                </div>
                              </div>
                            }
                          </Card>
                        </>
                      }

                      <FormMessage />
                    </FormItem>
                  )}
                />
              }

              {fieldForm.name === "dayStartEndVoting" &&
                <FormField
                  control={form.control}
                  name="dayStartEndVoting"
                  render={({ field }) => (
                    <FormItem className={cn("flex flex-col", fieldForm.classNameDiv)}>
                      <FormLabel className="w-fit">{fieldForm.label}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value?.from ? (
                                field.value.to ? (
                                  <>
                                    {dayjs(field.value.from).format("DD/MM/YYYY")} - {dayjs(field.value.to).format("DD/MM/YYYY")}
                                  </>
                                ) : (
                                  dayjs(field.value.from).format("DD/MM/YYYY")
                                )
                              ) : (
                                <span>{fieldForm.placeholder}</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="range"
                            selected={data}
                            onSelect={changeRangeDate}
                            disabled={(date) => date < dayjs().subtract(1, "d").toDate()}
                            initialFocus
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }

              {(fieldForm.name === "timeEndVoting") &&
                <FormField
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    < FormItem className={fieldForm.classNameDiv}>
                      <FormLabel>{fieldForm.label}</FormLabel>
                      <div className="flex items-center gap-1">
                        <Select onValueChange={value => changeTimeStartEndVoting(value, "endHour")} defaultValue={dayjs().hour().toString()}>
                          <FormControl>
                            <SelectTrigger className="w-20">
                              <SelectValue placeholder="Hora" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {hours.map(hour =>
                              // se os dias forem iguais, então hora final é >= que a hora atual
                              dayjs(form.getValues("dayStartEndVoting.from")).format("DD/MM/YYYY") === dayjs(form.getValues("dayStartEndVoting.to")).format("DD/MM/YYYY") ?
                                Number(hour) >= dayjs().hour() &&
                                <SelectItem key={hour} value={hour}>{hour.length < 2 ? `0${hour}` : hour}h</SelectItem>
                                :
                                <SelectItem key={hour} value={hour}>{hour.length < 2 ? `0${hour}` : hour}h</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <Select onValueChange={value => changeTimeStartEndVoting(value, "endMin")} defaultValue={dayjs().minute().toString()}>
                          <FormControl>
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Minuto" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {minutes.map(minute =>
                              // se os dias forem iguais, então minuto final é >= que minuto atual
                              dayjs(form.getValues("dayStartEndVoting.from")).format("DD/MM/YYYY") === dayjs(form.getValues("dayStartEndVoting.to")).format("DD/MM/YYYY")
                                && Number(form.getValues("timeEndVoting.hour")) === dayjs().hour() ?
                                  Number(minute) >= dayjs().minute() &&
                                  <SelectItem key={minute} value={minute}>{minute.length < 2 ? `0${minute}` : minute}min</SelectItem>
                                :
                                <SelectItem key={minute} value={minute}>{minute.length < 2 ? `0${minute}` : minute}min</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              }

              {(fieldForm.name === "questionVote") &&
                <FormField
                  control={form.control}
                  name={fieldForm.name}
                  render={({ field }) => (
                    < FormItem className={fieldForm.classNameDiv}>
                      <FormLabel>{fieldForm.label}</FormLabel>

                      <Card className="flex flex-col gap-4 px-3 pt-3 pb-6">

                        <FormControl>
                          <Input type={fieldForm.type} placeholder={fieldForm.placeholder} className="border-x-0 border-t-0 shadow-none rounded-none focus-visible:ring-0" {...field} />
                        </FormControl>

                        <ul className="space-y-4 px-3">
                          <Label>Opções</Label>
                          {voteOptions.map((vote) =>
                            <li key={vote.id} className="flex items-center justify-between gap-3 ">
                              <Input
                                type="text"
                                placeholder="Insira a opção..."
                                value={vote.value}
                                onChange={event => changeInputOptionVote(event, vote.id)}
                                onBlur={event => checkDeleteOption(vote.id)} />
                            </li>
                          )}
                          <div className="flex items-center gap-3">
                            <Label>Permitir várias votações</Label>
                            <Switch checked={multipleVotes} onCheckedChange={setMultipleVotes} />
                          </div>
                        </ul>
                      </Card>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              }
            </React.Fragment>
          )}

          <Button type="submit" className="col-span-4">Criar</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default VotingForm