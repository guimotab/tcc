import Aside from "@/app/(m2)/components/Aside"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconType } from "react-icons/lib";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { MdOutlineTask } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import VotingForm from "./Forms/VotingForm";

interface IParamsURL {
  params: {
    groupId: string
    typeActivity: string
  }
}

const CreateActivity = ({ params }: IParamsURL) => {

  const grouId = params.groupId
  const typeActivity = params.typeActivity

  return (
    <main className="flex w-screen h-screen">
      <Aside />
      <div className="flex flex-col items-center w-full py-16">
        <div className="flex flex-col max-w-[70rem] w-full">
          <VotingForm />
        </div>
      </div>
    </main>
  )
}
export default CreateActivity