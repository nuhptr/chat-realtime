import React from "react"

import SearchInput from "./search-input"
import Conversation from "./conversation"

export default function Sidebar() {
   return (
      <div>
         <SearchInput />
         <div className="px-3 divider"></div>
         <Conversation />
         {/* logout button */}
      </div>
   )
}
