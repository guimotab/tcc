import { Session } from "next-auth"

interface CurrentGroupProps {
  session: Session
}

const GroupInformation = ({ session }: CurrentGroupProps) => {
  return (
    <div></div>
  )
}

export default GroupInformation