"use client"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { IoSendSharp } from "react-icons/io5"
import { io } from "socket.io-client"
import { DataContext } from "../../page"
import useCurrentUser from "../../../../../../states/hooks/useCurrentUser"

const ChatInput = () => {
  const currentUser = useCurrentUser()
  const { currentGroup } = useContext(DataContext)
  const [fieldChat, setFieldChat] = useState("")
  const socket = io("http://localhost:4000/chat")

  useEffect(() => {
    setFieldChat("")
    return () => {
      socket.off("message")
    }
  }, [currentGroup])

  function handleTypeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value
    setFieldChat(value)
    autoResizeTextarea(event.target)
  }

  function handleKeyBoard(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && event.shiftKey) {

      setFieldChat(value => value + "\n")
    } else if (event.key === "Enter") {
      event.preventDefault();
      // handleSendMessage()
    }
  }
  function handleSendMessage() {
    const verifiedMessage = fieldChat.trim() !== ""
    if (verifiedMessage) {
      const content = fieldChat
      const sender = currentUser
      const chatId = currentGroup!.id
      socket.emit("message", { content, sender, chatId })
      // setFieldChat("")
    }
  }

  const autoResizeTextarea = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'; // Redefine a altura para que a altura seja recalculada corretamente
    element.style.height = `${element.scrollHeight}px`; // Define a altura com base no conteúdo
  };

  return (
    <div className="flex max-h-[13rem] bg-white border-slate-300 max-w-[80rem] w-full rounded-lg">
      <div className="flex max-h-[13rem] overflow-y-auto rounded-lg w-full ">
        <textarea
          onKeyDown={handleKeyBoard}
          onChange={handleTypeMessage}
          placeholder="Digite sua mensagem..."
          cols={30}
          className="flex-1 min-h-[40px] resize-none text-lg w-full border-none outline-none rounded-lg px-3 py-2 overflow-hidden" />
      </div>
      <IoSendSharp
        onClick={handleSendMessage}
        className="text-3xl mx-2 mb-2 text-slate-700 hover:text-slate-500 self-end" />
    </div>
  )
}

export default ChatInput