import SearchInput from "./search-input"
import Conversations from "./conversations"
import LogoutButton from "./logout-button"

export default function Sidebar() {
   return (
      <div className="py-8 pl-8 max-sm:pl-4 max-sm:py-4">
         <SearchInput />
         <div className="px-3 divider"></div>
         <Conversations />
         <LogoutButton />
      </div>
   )
}
