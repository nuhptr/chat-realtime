import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import HomePages from "./pages/home"
import LoginPages from "./pages/login"
import SignUpPages from "./pages/signup"

import { useAuthContext } from "./context/auth-context"

export default function App() {
   const { authUser } = useAuthContext()

   // Apply list routes and add authUser to check if user is logged in or not
   return (
      <div className="flex items-center justify-center h-screen p-4">
         <Routes>
            <Route path="/" element={authUser ? <HomePages /> : <Navigate to="/login" />} />
            <Route path="/login" element={authUser ? <Navigate to="/" /> : <LoginPages />} />
            <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUpPages />} />
         </Routes>
         <Toaster />
      </div>
   )
}
