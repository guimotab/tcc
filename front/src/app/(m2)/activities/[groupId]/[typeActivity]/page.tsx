import Aside from "@/app/(m2)/components/Aside"
import VotingForm from "./Forms/VotingForm";
import TypeActivity from "@/types/TypeActivities";

interface IParamsURL {
  params: {
    groupId: string
    typeActivity: string
  }
}

const CreateActivity = ({ params }: IParamsURL) => {

  const groupId = params.groupId
  const typeActivity = params.typeActivity as TypeActivity

  return (
    <main className="flex ">
      <Aside />
      <div className="flex flex-col items-center w-full py-16">
        <div className="flex flex-col max-w-[70rem] w-full">
          <VotingForm groupId={groupId}/>
        </div>
      </div>
    </main>
  )
}
export default CreateActivity