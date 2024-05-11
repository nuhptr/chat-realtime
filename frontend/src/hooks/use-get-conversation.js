import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

export function useGetConversation() {
   const [loading, setLoading] = useState(false)
   const [conversations, setConversations] = useState([])

   const getConversation = useCallback(async () => {
      try {
         setLoading(true)

         await axios.get("/api/users").then((response) => {
            const data = response.data
            if (data.length === 0) toast.error("No conversation found.")

            setConversations(data)
         })
      } catch (error) {
         toast.error("Problem fetching conversation. Please try again.")
      } finally {
         setLoading(false)
      }
   }, [])

   useEffect(() => {
      getConversation()
   }, [getConversation])

   return { loading, conversations }
}
