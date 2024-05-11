import { useEffect } from "react"

import { useSocketContext } from "../context/socket-context"
import { useConversationState } from "../zustand"

import notificationSound from "../assets/sounds/notification.mp3"

export function useListenMessages() {
   const { socket } = useSocketContext()
   const { messages, setMessages } = useConversationState()

   useEffect(() => {
      socket?.on("newMessage", (newMessage) => {
         newMessage.shouldShake = true
         const sound = new Audio(notificationSound)
         sound.play()
         setMessages([...messages, newMessage])
      })

      return () => socket?.off("newMessage")
   }, [messages, setMessages, socket])
}
