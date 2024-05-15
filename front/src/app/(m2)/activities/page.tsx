"use client"
import Aside from "@/app/(m2)/components/Aside"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconType } from "react-icons/lib";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface IActivitiesArray {
  name: string
  description: string
  icon: IconType
  classIcon: string
}

const Activities = () => {
  const activitiesArray = [
    {
      name: "Votação",
      description: "Crie votações para seu grupo decidir!",
      icon: MdOutlineHowToVote
    },
    {
      name: "Distribuição de tarefas",
      description: "Distribua as tarefas para o seu grupo!",
      icon: FaTasks,
      classIcon: "text-4xl"
    },
  ] as IActivitiesArray[]
  return (
    <main className="flex w-screen h-screen">
      <Aside page="activities" />
      <div className="flex flex-col items-center w-full py-16">
        <div className="max-w-[70rem] w-full">

          <div className="grid grid-cols-2  gap-x-5 gap-y-5 w-fit">
            {activitiesArray.map(activite =>
              <Card key={activite.name}>
                <CardHeader>
                  <CardTitle className="text-xl">{activite.name}</CardTitle>
                  <CardDescription className="text-base">{activite.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <activite.icon className={cn("text-5xl", activite.classIcon)} />
                </CardContent>
              </Card>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}
export default Activities