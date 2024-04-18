interface BlockScreenLoadingProps {
  canShow: boolean
}
const BlockScreenLoading = ({ canShow }: BlockScreenLoadingProps) => {
  return canShow && (
    <div className="w-screen h-screen absolute left-0 top-0">
      <div className="border-t-[1rem] w-32 h-32 border-sky-900 rounded-1/2 animate-spin"></div>
    </div>
  )
}
export default BlockScreenLoading