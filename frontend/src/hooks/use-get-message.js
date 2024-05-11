import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

import { useConversationState } from "../zustand"

export function useGetMessage() {
   const [loading, setLoading] = useState(false)
   const { messages, setMessages, selectedConversation } = useConversationState()

   const getMessages = useCallback(async () => {
      try {
         setLoading(true)

         await axios.get(`/api/messages/${selectedConversation._id}`).then((response) => {
            const data = response.data
            if (!data) throw new Error("Couldn't get messages.")

            setMessages(data)
         })
      } catch (error) {
         toast.error("Couldn't get messages, please try again.")
      } finally {
         setLoading(false)
      }
   }, [selectedConversation._id, setMessages])

   useEffect(() => {
      if (selectedConversation._id) getMessages()
   }, [getMessages, selectedConversation._id])

   return { loading, messages }
}
