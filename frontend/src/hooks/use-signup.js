import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"

import { useAuthContext } from "../context/auth-context"

export function useSignup() {
   const [loading, setLoading] = useState(false)
   const { setAuthUser } = useAuthContext()

   const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
      const success = handleInputErrors({ fullName, password, username, confirmPassword, gender })
      if (!success) return

      try {
         setLoading(true)

         await axios
            .post(
               "/api/auth/signup",
               { fullName, username, password, confirmPassword, gender },
               { headers: { "Content-Type": "application/json" } }
            )
            .then((response) => {
               if (response.status === 201) {
                  toast.success("Account created successfully.")
               }

               if (response.status === 400) {
                  toast.error("Username already exists.")
               }

               const data = response.data

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

   return { loading, signup }
}

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
   if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill all the fields.")
      return false
   }

   if (password !== confirmPassword) {
      toast.error("Password does not match.")
      return false
   }

   if (password.length < 6) {
      toast.error("Password must be at least 6 characters.")
      return false
   }

   return true
}
