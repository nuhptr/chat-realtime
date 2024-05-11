import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import App from "./App.jsx"

import { AuthContextProvider } from "./context/auth-context.jsx"
import { SocketContextProvider } from "./context/socket-context.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* Apply Browser Router For Routing React App */}
      <BrowserRouter>
         <AuthContextProvider>
            <SocketContextProvider>
               <App />
            </SocketContextProvider>
         </AuthContextProvider>
      </BrowserRouter>
   </StrictMode>
)
