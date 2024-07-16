import { Dispatch, SetStateAction } from "react"
import { FaTasks } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"

interface AsideIconsProps {
  sectionSelected: "task" | "group"
  setSectionSelected: Dispatch<SetStateAction<"task" | "group">>
}

const AsideIcons = ({ sectionSelected, setSectionSelected }: AsideIconsProps) => {
  function changeSection(section: "task" | "group") {
    setSectionSelected(section)
  }

  return (
    <div className="flex flex-col items-center gap-2 h-fit -ml-10 ">
      <FaUserGroup
        data-active={sectionSelected === "group"}
        onClick={() => changeSection("group")}
        className="text-4xl text-slate-700 border-2 data-[active=true]:border-blue-400/90 data-[active=false]:border-slate-200 rounded-md p-1.5 cursor-pointer" />
      <FaTasks
        data-active={sectionSelected === "task"}
        onClick={() => changeSection("task")}
        className="text-4xl text-slate-700 border-2 data-[active=true]:border-blue-400/90 data-[active=false]:border-slate-200 rounded-md p-1.5 cursor-pointer" />
    </div>
  )
}

export default AsideIcons