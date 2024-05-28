import Aside from "@/app/(m2)/components/Aside"
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