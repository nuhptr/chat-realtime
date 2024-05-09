import SearchInput from "./search-input"
import Conversations from "./conversations"
import LogoutButton from "./logout-button"

export default function Sidebar() {
   return (
      <div className="flex flex-col px-8 py-8 border-r border-white border-opacity-30 max-sm:pl-4 max-sm:py-4">
         <SearchInput />
         <Conversations />
         <LogoutButton />
      </div>
   )
}
