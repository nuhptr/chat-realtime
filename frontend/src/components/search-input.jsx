import { useState } from "react"
import { IoSearchSharp } from "react-icons/io5"

import { useConversationState } from "../zustand"
import { useGetConversation } from "../hooks/use-get-conversation"
import toast from "react-hot-toast"

export default function SearchInput() {
   const [search, setSearch] = useState()
   const { setSelectedConversation } = useConversationState()
   const { conversations } = useGetConversation()

   const handleSubmit = (e) => {
      e.preventDefault()
      if (!search) return
      if (search.length < 3) {
         return toast.error("Search must at least 3 characters long")
      }

      const conversation = conversations.find((c) =>
         c.fullName.toLowerCase().includes(search.toLowerCase())
      )

      if (conversation) {
         setSelectedConversation(conversation)
         setSearch("")
      } else {
         toast.error("Username not found")
      }
   }

   return (
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
         <input
            type="text"
            placeholder="search.."
            className="rounded-full input input-bordered"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <button
            type="submit"
            className="text-white bg-green-500 btn btn-circle hover:bg-green-600">
            <IoSearchSharp className="w-6 h-6 outline-none" />
         </button>
      </form>
   )
}
