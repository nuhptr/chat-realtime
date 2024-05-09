import Conversation from "./conversation"

export default function Conversations() {
   return (
      <div className="flex flex-col pt-8 overflow-auto gap-y-2 no-scrollbar">
         <Conversation />
         <Conversation />
         <Conversation />
         <Conversation />
         <Conversation />
         <Conversation />
         <Conversation />
         <Conversation />
      </div>
   )
}
