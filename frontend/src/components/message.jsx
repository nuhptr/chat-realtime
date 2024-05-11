import { useAuthContext } from "../context/auth-context"
import { useConversationState } from "../zustand"
import { FormatTime } from "../utils/format-time"

export default function Message({ message }) {
   const { authUser } = useAuthContext()
   const { selectedConversation } = useConversationState()

   const isSender = message.senderId === authUser._id

   const chatClassname = isSender ? "chat-end" : "chat-start"
   const profilePic = isSender ? authUser.profilePic : selectedConversation?.profilePic
   const bubbleBgColor = isSender ? "bg-green-500 text-white" : "bg-gray-300 text-black"

   const formattedTime = FormatTime(message.createdAt)

   const shakeClass = message.shouldShake ? "shake" : ""

   return (
      <div className={`chat gap-y-2 ${chatClassname}`}>
         <div className="chat-image avatar">
            <div className="w-10 rounded-full">
               <img src={profilePic || ""} alt="user profile picture" />
            </div>
         </div>

         <div className={`chat-bubble ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
         <div className="flex items-center text-xs text-white opacity-50 chat-footer">
            {formattedTime}
         </div>
      </div>
   )
}
