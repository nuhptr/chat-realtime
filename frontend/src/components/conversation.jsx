export default function Conversation() {
   return (
      <>
         <div className="flex items-center gap-2 px-2 py-2 cursor-pointer rounded-xl hover:bg-green-500">
            <div className="avatar online">
               <div className="w-12 rounded-full">
                  <img
                     src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                     alt="User Avatar"
                  />
               </div>
            </div>

            <div className="flex flex-col flex-1">
               <div className="flex justify-between gap-3">
                  <p className="text-base font-semibold tracking-tight text-gray-200">Jhon Doe</p>
                  <span className="text-xl">⛳️</span>
               </div>
            </div>
         </div>

         <div className="w-full pt-[0.5px] opacity-30 rounded-full my-0 bg-white" />
      </>
   )
}
