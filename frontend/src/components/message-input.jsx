import { useState } from "react"
import { BsArrowRightCircleFill } from "react-icons/bs"

import { useSendMessage } from "../hooks/use-send-message"

export default function MessageInput() {
   const [message, setMessage] = useState("")
   const { loading, sendMessage } = useSendMessage()

   const handleSubmit = async (e) => {
      e.preventDefault()
      if (!message.trim()) return
      await sendMessage(message)
      setMessage("")
   }

   return (
      <form className="px-4 my-3" onSubmit={handleSubmit}>
         <div className="relative w-full">
            <input
               type="text"
               className="block w-full p-4 text-sm text-black bg-white border border-gray-300 rounded-2xl bg-opacity-20 backdrop-filter backdrop-blur-lg active:outline-none focus:outline-none focus:ring-0 focus:border-white placeholder:text-black placeholder:text-opacity-30"
               placeholder="Type a message.."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="absolute inset-y-0 flex items-center end-0 pe-3">
               {loading ? (
                  <span className="loading loading-spinner"></span>
               ) : (
                  <BsArrowRightCircleFill className="w-6 h-6 text-white" />
               )}
            </button>
         </div>
      </form>
   )
}
