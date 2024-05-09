export default function Message() {
   return (
      <div className="chat chat-end gap-y-2">
         <div className="chat-image avatar">
            <div className="w-10 rounded-full">
               <img
                  src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                  alt="Tailwind css chat buuble component"
               />
            </div>
         </div>

         <div className="text-white bg-green-500 chat-bubble">Hi! What&apos;s up!</div>
         <div className="flex items-center text-xs text-white opacity-50 chat-footer">12.42</div>
      </div>
   )
}
