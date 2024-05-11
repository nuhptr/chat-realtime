import { getRandomEmoji } from "../utils/emojis"
import { useGetConversation } from "../hooks/use-get-conversation"

import Conversation from "./conversation"

export default function Conversations() {
   // { fullName, gender, _id, username, profilePic, createdAt, updatedAt, __v }
   const { loading, conversations } = useGetConversation()

   return (
      <div className="flex flex-col pt-8 overflow-auto gap-y-2 no-scrollbar">
         {conversations.map((conversation, index) => (
            <Conversation
               key={conversation._id}
               conversation={conversation}
               emoji={getRandomEmoji()}
               lastIndex={index === conversations.length - 1}
            />
         ))}

         {loading ? <span className="loading loading-spinner"></span> : null}
      </div>
   )
}
