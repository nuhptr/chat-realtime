import React from "react"

import LoginPages from "./pages/login"
import SignUpPages from "./pages/signup"
import HomePages from "./pages/home"

export default function App() {
   return (
      <div className="flex items-center justify-center h-screen p-4">
         <HomePages />
      </div>
   )
}
