import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { MyGroupsContext } from "../../MyGroupsContext"
import { GroupInformationContext } from "../GroupInformationContext"

const ButtonLeaveGroup = () => {
  const { currentGroup } = useContext(GroupInformationContext)
  const { groups, setMyGroupsContext } = useContext(MyGroupsContext)

  function leaveGroup() {
    setMyGroupsContext(prev => ({ ...prev, groups: prev.groups?.filter(group => group.id !== currentGroup!.id) }))
  }

  return (
    <div className="self-end">
      <AlertDialog>

        <AlertDialogTrigger className={cn(buttonVariants({ variant: "destructive", size: "sm" }), "font-medium")}>
          Sair do Grupo
        </AlertDialogTrigger>

        <AlertDialogContent>

          <AlertDialogHeader>
            <AlertDialogTitle>Você deseja mesmo sair?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao sair do grupo, você precisará receber outro convite para participar novamente!
            </AlertDialogDescription >
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={leaveGroup} className={cn(buttonVariants({ variant: "destructive" }), "font-medium")}>
              Sair do grupo
            </AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
export default ButtonLeaveGroup