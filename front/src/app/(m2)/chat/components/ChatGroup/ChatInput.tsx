"use client"
import { ChatContext } from "@/providers/ChatContext"
import { Session } from "next-auth"
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react"
import { IoSendSharp } from "react-icons/io5"

interface ChatInputProps {
  session: Session
}

const ChatInput = ({ session }: ChatInputProps) => {
  const { currentGroup, socket } = useContext(ChatContext)
  const [fieldChat, setFieldChat] = useState("")
  const inputChat = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setFieldChat("")
    if (inputChat.current) {
      inputChat.current.focus()
    }
  }, [currentGroup])

  function handleTypeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value
    setFieldChat(value)
    autoResizeTextarea(event.target)
  }

  function handleKeyBoard(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && event.shiftKey) {
      setFieldChat(value => value)
    } else if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage()
      event.currentTarget.style.height = 'auto'
    }
  }
  function handleSendMessage() {
    const verifiedMessage = fieldChat.trim() !== ""
    if (verifiedMessage) {
      const content = fieldChat
      const sender = session.user
      const chatId = currentGroup!.id
      socket.emit("message", { content, sender, chatId })
      setFieldChat("")
    }
  }

  const autoResizeTextarea = (element: HTMLTextAreaElement) => {
    element.style.height = 'auto'; // Redefine a altura para que a altura seja recalculada corretamente
    element.style.height = `${element.scrollHeight}px`; // Define a altura com base no conteúdo
  };

  return (
    <div className="flex max-h-[13rem] bg-white border-slate-300 w-full rounded-lg">
      <div className="flex max-h-[13rem] overflow-y-auto rounded-lg w-full ">
        <textarea
          id="textarea-chat"
          value={fieldChat}
          autoFocus
          ref={inputChat}
          onKeyDown={handleKeyBoard}
          onChange={handleTypeMessage}
          maxLength={500}
          rows={1}
          placeholder="Digite sua mensagem..."
          className="resize-none text-lg w-full border-none outline-none rounded-lg px-3 py-2 overflow-hidden" />
      </div>
      <IoSendSharp
        onClick={handleSendMessage}
        className="text-3xl mx-2 mb-2 text-slate-700 hover:text-slate-500 self-end" />
    </div>
  )
}

export default ChatInput