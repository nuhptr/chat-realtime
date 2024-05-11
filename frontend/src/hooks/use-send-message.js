import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

import { useConversationState } from "../zustand"

export function useSendMessage() {
   const [loading, setLoading] = useState(false)
   const { messages, setMessages, selectedConversation } = useConversationState()

   async function sendMessage(message) {
      try {
         setLoading(true)

         await axios
            .post(
               `/api/messages/send/${selectedConversation._id}`,
               { message },
               { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
               const data = response.data
               if (!data) throw new Error("Couldn't send message.")

               setMessages([...messages, data])
            })
      } catch (error) {
         toast.error("Couldn't send message. Please try again.")
      } finally {
         setLoading(false)
      }
   }

   return { loading, sendMessage }
}
