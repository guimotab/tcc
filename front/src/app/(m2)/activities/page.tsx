"use client"
import Aside from "@/app/(m2)/components/Aside"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconType } from "react-icons/lib";
import { MdOutlineHowToVote } from "react-icons/md";


interface IActivitiesArray {
  name: string
  description: string
  icon: IconType
}

const Activities = () => {
  const activitiesArray = [
    {
      name: "Votação",
      description: "Crie votações para seu grupo decidir!",
      icon: MdOutlineHowToVote
    }
  ] as IActivitiesArray[]
  return (
    <main className="flex w-screen h-screen">
      <Aside page="activities" />
      <div className="flex flex-col items-center w-full py-16">
        <div className="max-w-[70rem] w-full">

          <div className="w-fit">
            {activitiesArray.map(activite =>
              <Card key={activite.name}>
                <CardHeader>
                  <CardTitle className="text-xl">Votação</CardTitle>
                  <CardDescription className="text-base">Crie votações para seu grupo decidir!</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <MdOutlineHowToVote className="text-5xl" />
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