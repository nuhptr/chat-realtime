import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import HomePages from "./pages/home"
import LoginPages from "./pages/login"
import SignUpPages from "./pages/signup"

export default function App() {
   return (
      <div className="flex items-center justify-center h-screen p-4">
         {/* Apply List Route */}
         <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/login" element={<LoginPages />} />
            <Route path="/signup" element={<SignUpPages />} />
         </Routes>
         <Toaster />
      </div>
   )
}
