import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import defaultRoles from "@/types/defaultRoles"
import { FaCheck } from "react-icons/fa6"
import { IoWarningOutline } from "react-icons/io5"

const RolesDescription = () => {

  const infoRoles = [
    {
      role: "Líder",
      deleteGroup: <FaCheck />,
      editGroup: <FaCheck />,
      managerUsers: <FaCheck />
    }, {
      role: "Admin",
      deleteGroup: undefined,
      editGroup: <FaCheck />,
      managerUsers: <FaCheck />
    }, {
      role: "Editor",
      deleteGroup: undefined,
      editGroup: <FaCheck />,
      managerUsers: undefined
    }, {
      role: "Usuário",
      deleteGroup: undefined,
      editGroup: undefined,
      managerUsers: <IoWarningOutline className="text-xl" />
    },
  ] as { role: defaultRoles, deleteGroup: JSX.Element, editGroup: JSX.Element, managerUsers: JSX.Element }[]
  

  return (
    <Table>
      <TableCaption><div className="px-3 pb-1.5 flex gap-1 items-center"><IoWarningOutline className="text-xl" />Permissão limitada.</div></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Cargo</TableHead>
          <TableHead className="text-center">Excluir Grupo</TableHead>
          <TableHead className="text-center">Editar Grupo</TableHead>
          <TableHead className="text-center">Gerenciar Usuários</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {infoRoles.map(info =>
          <TableRow key={info.role} >
            <TableCell className="text-center" >{info.role}</TableCell>
            <TableCell><div className="flex w-full justify-center">{info.deleteGroup}</div></TableCell>
            <TableCell><div className="flex w-full justify-center">{info.editGroup}</div></TableCell>
            <TableCell><div className="flex w-full justify-center">{info.managerUsers}</div></TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
export default RolesDescription