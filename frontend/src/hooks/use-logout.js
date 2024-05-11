import { useState } from "react"
import axios from "axios"

import { useAuthContext } from "../context/auth-context"
import toast from "react-hot-toast"

export function useLogout() {
   const [loading, setLoading] = useState(false)
   const { setAuthUser } = useAuthContext()

   async function logout() {
      try {
         setLoading(true)

         await axios
            .post("/api/auth/logout", { headers: { "Content-Type": "application/json" } })
            .then((response) => {
               if (response.status === 200) {
                  localStorage.removeItem("chat-user")
                  setAuthUser(null)
               }

               if (response.status === 400) toast.error("Couldn't logout. Please try again.")
            })
      } catch (error) {
         toast.error(error.response.data.message)
      } finally {
         setLoading(false)
      }
   }

   return { loading, logout }
}
