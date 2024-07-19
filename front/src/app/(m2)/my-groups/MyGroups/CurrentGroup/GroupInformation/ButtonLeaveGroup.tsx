import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useContext } from "react"
import { MyGroupsContext } from "../../MyGroupsContext"
import { GroupInformationContext } from "../GroupInformationContext"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import GroupController from "@/controllers/GroupController"
import { Session } from "next-auth"

interface ButtonLeaveGroupProps {
  session: Session
}

const ButtonLeaveGroup = ({ session }: ButtonLeaveGroupProps) => {
  const { currentGroup, setCurrentGroup } = useContext(GroupInformationContext)
  const { groups, setMyGroupsContext } = useContext(MyGroupsContext)
  const pathname = usePathname();
  const router = useRouter();

  function leaveGroup() {
    GroupController.deleteParticipant(currentGroup!.id, session.user.id)
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete('group');
    router.push(`${pathname}/?${currentUrl.searchParams.toString()}`)
    setMyGroupsContext(prev => ({ ...prev, groups: prev.groups?.filter(group => group.id !== currentGroup!.id) }))
    setCurrentGroup(prev => ({ ...prev!, currentGroup: undefined }))
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