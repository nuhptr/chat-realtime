import toast from "react-hot-toast"

// Handle input errors for login
export function handleLoginInputErrors(username, password) {
   if (!username || !password) {
      toast.error("Please fill all the fields.")
      return false
   }

   return true
}

// Handle input errors for signup
export function handleSignupInputErrors({ fullName, username, password, confirmPassword, gender }) {
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
