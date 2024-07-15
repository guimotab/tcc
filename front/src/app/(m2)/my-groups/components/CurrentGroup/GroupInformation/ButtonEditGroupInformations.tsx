import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import IGroup from "@/interfaces/IGroup"
import { MdModeEdit } from "react-icons/md"

interface ButtonEditGroupInformationsProps {
  currentGroup: IGroup
}

const ButtonEditGroupInformations = ({ currentGroup }: ButtonEditGroupInformationsProps) => {
  return (
    <div className="border rounded-md p-1.5 cursor-pointer">
      <AlertDialog>

        <AlertDialogTrigger >
          <MdModeEdit className="text-xl text-gray-900 -mb-1" />
        </AlertDialogTrigger>

        <AlertDialogContent>

          <AlertDialogHeader>
            <AlertDialogTitle>Alterar informações</AlertDialogTitle>
          </AlertDialogHeader>

          <div className="flex flex-col gap-1">
            <p>Nome: {currentGroup.name}</p>
            <p>Descrição: {currentGroup.description}</p>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>
              Concluir
            </AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default ButtonEditGroupInformations