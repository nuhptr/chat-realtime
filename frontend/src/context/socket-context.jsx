/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react"
import io from "socket.io-client"

import { useAuthContext } from "./auth-context"

export const SocketContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useSocketContext() {
   return useContext(SocketContext)
}

export function SocketContextProvider({ children }) {
   const [socket, setSocket] = useState(null)
   const [onlineUsers, setOnlineUsers] = useState([])

   const { authUser } = useAuthContext()

   useEffect(() => {
      if (authUser) {
         const socket = io("http://localhost:8000", { query: { userId: authUser._id } })

         setSocket(socket)

         //* socket.on() is used to listen to the events. Can be used both on client and server side
         socket.on("getOnlineUsers", (users) => setOnlineUsers(users))

         return () => socket.close()
      } else {
         if (socket) {
            socket.close()
            setSocket(null)
         }
      }
   }, [authUser])

   return (
      <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
   )
}
