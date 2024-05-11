import { useEffect } from "react"
import { TbAlignBoxLeftMiddle } from "react-icons/tb"

import { useConversationState } from "../zustand"
import { useAuthContext } from "../context/auth-context"

import Messages from "./messages"
import MessageInput from "./message-input"

export default function MessageContainer() {
   const { selectedConversation, setSelectedConversation } = useConversationState()

   useEffect(() => {
      // Cleanup function (unmounting)
      return () => setSelectedConversation(null)
   }, [setSelectedConversation])

   return (
      <div className="md:min-w-[450px] flex flex-col py-8 pr-8 max-sm:py-4 max-sm:pr-4">
         {!selectedConversation && <NoChatSelected />}
         {selectedConversation && (
            <>
               {/* Header */}
               <div className="px-5 py-3 bg-white border border-white rounded-full border-opacity-30 bg-opacity-10 backdrop-blur-lg backdrop-filter">
                  <span className="text-white label-text">To: </span>{" "}
                  <span className="font-bold text-white ">{selectedConversation.fullName}</span>
               </div>

               <Messages />
               <MessageInput />
            </>
         )}
      </div>
   )
}

const NoChatSelected = () => {
   const { authUser } = useAuthContext()

   return (
      <div className="flex items-center justify-center w-full h-full">
         <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
            <TbAlignBoxLeftMiddle className="text-3xl text-center md:text-6xl" />
            <p className="text-2xl tracking-tight">Welcome 🚀 {authUser.fullName}</p>
            <p className="text-base font-normal tracking-tight">
               Select a chat to start messaging now.
            </p>
         </div>
      </div>
   )
}
