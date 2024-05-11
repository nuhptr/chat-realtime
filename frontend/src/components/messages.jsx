import { useEffect, useRef } from "react"

import { useGetMessage } from "../hooks/use-get-message"

import Message from "./message"
import MessageSkeleton from "./ui/message-skeleton"
import { useListenMessages } from "../hooks/use-listen-messages"

export default function Messages() {
   // {_id, senderId, receiverId, message, createdAt, updatedAt, __v}
   const { loading, messages } = useGetMessage()
   useListenMessages() // Custom hook to listen to new messages
   const lastMessageRef = useRef()

   useEffect(() => {
      setTimeout(() => {
         lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
   }, [messages])

   return (
      <div className="flex-1 py-6 overflow-auto no-scrollbar">
         {!loading &&
            messages.length > 0 &&
            messages.map((message) => (
               <div key={message._id} ref={lastMessageRef}>
                  <Message message={message} />
               </div>
            ))}

         {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

         {!loading && messages.length === 0 && (
            <p className="flex items-center justify-center h-full tracking-tight text-white">
               Send a message to start the conversation
            </p>
         )}
      </div>
   )
}
