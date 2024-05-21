"use client"
import Aside from "@/app/(m2)/components/Aside"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconType } from "react-icons/lib";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { MdOutlineTask } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface IActivitiesArray {
  slug: "voting" | "distributeTasks" | "createTask"
  name: string
  description: string
  icon: IconType
  classIcon: string
}

const Activities = () => {
  const router = useRouter()
  const currentPath = usePathname()
  const [activitySelected, setActivitySelected] = useState<string>()

  function navigateBack() {
    router.back()
  }

  function selectActivity(activity: string) {
    if (activity === activitySelected) {
      return setActivitySelected(undefined)
    }
    setActivitySelected(activity)
  }

  function createActivity() {
    router.push(`${currentPath}/${activitySelected}`)
  }

  const activitiesArray = [
    {
      slug: "createTask",
      name: "Criar tarefa",
      description: "Crie atividades/objetivos para seu time!",
      icon: MdOutlineTask,
      classIcon: "text-5xl",
    },
    {
      slug: "distributeTasks",
      name: "Distribuição de tarefas",
      description: "Distribua as tarefas para o seu grupo!",
      icon: FaTasks,
      classIcon: "text-5xl",
    },
    {
      slug: "voting",
      name: "Votação",
      description: "Crie votações para seu grupo decidir!",
      icon: MdOutlineHowToVote,
      classIcon: "text-5xl",
    },
  ] as IActivitiesArray[]

  return (
    <div className="flex flex-col max-w-[70rem] w-full">
      <div className="flex flex-col gap-5 mb-4">
        <Button variant={"outline"} onClick={navigateBack} className="flex gap-2 w-fit">
          <FaArrowLeft className="text-slate-700" />
          Voltar
        </Button>
        <h1 className="text-2xl font-semibold">Escolha uma atividade</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 gap-y-5 w-full">
        {activitiesArray.map(activity =>
          <Card
            key={activity.name}
            onClick={() => selectActivity(activity.slug)}
            className={`cursor-pointer transition duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300 ${activitySelected === activity.slug && "border-blue-400 ring-2"}`}>

            <CardHeader>
              <CardTitle className="text-xl">{activity.name}</CardTitle>
              <CardDescription className="text-base">{activity.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-end items-center">
              <activity.icon className={cn("text-6xl text-slate-700", activity.classIcon)} />
            </CardContent>
          </Card>
        )}
      </div>
      <Button disabled={!activitySelected} variant={`${activitySelected ? "default" : "outline"}`} onClick={createActivity} className="flex gap-2 w-fit self-end mt-5">
        <FaCheck className={`${activitySelected && "text-white"}`} />
        Criar
      </Button>
    </div>
  )
}
export default Activities