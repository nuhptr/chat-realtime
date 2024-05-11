import { useConversationState } from "../zustand"
import { useSocketContext } from "../context/socket-context"

export default function Conversation({ conversation, emoji, lastIndex }) {
   const { selectedConversation, setSelectedConversation } = useConversationState()

   const isSelected = selectedConversation?._id === conversation._id

   const { onlineUsers } = useSocketContext()
   const isOnline = onlineUsers.includes(conversation._id)

   return (
      <>
         <div
            className={`flex items-center gap-2 px-2 py-2 cursor-pointer rounded-xl hover:bg-green-500 
            ${isSelected ? "bg-green-500" : ""}`}
            onClick={() => setSelectedConversation(conversation)}>
            <div className={`avatar ${isOnline ? "online" : ""}`}>
               <div className="w-12 rounded-full">
                  <img
                     src={
                        conversation.profilePic ||
                        "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                     }
                     alt="User Avatar"
                  />
               </div>
            </div>

            <div className="flex flex-col flex-1">
               <div className="flex justify-between gap-3">
                  <p className="text-base font-semibold tracking-tight text-gray-200">
                     {conversation.fullName}
                  </p>
                  <span className="text-xl">{emoji}</span>
               </div>
            </div>
         </div>

         {!lastIndex && <div className="w-full pt-[0.5px] opacity-30 rounded-full my-0 bg-white" />}
      </>
   )
}
