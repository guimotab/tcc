import { useRecoilValue } from "recoil"
import { currentUser } from "../atom"

const useCurrentUser = () => {
    return useRecoilValue(currentUser)
}
export default useCurrentUser