import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

import { useAuthContext } from "../context/auth-context"
import { handleLoginInputErrors } from "../utils/handle-input-error"

export function useLogin() {
   const [loading, setLoading] = useState(false)
   const { setAuthUser } = useAuthContext()

   async function login(username, password) {
      const validateInput = handleLoginInputErrors(username, password)
      if (!validateInput) return

      try {
         setLoading(true)

         await axios
            .post(
               "/api/auth/login",
               { username, password },
               { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
               if (response.status === 200) toast.success("Login successful.")
               if (response.status === 400) toast.error("Invalid username or password.")

               const data = response.data
               if (!data) throw new Error("Failed to login.")

               // Save user data in local storage
               localStorage.setItem("chat-user", JSON.stringify(data))

               // update user auth context
               setAuthUser(data)
            })
      } catch (error) {
         toast.error(error.response.data.message)
      } finally {
         setLoading(false)
      }
   }

   return { loading, login }
}
