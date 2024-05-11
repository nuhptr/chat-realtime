import { BsFillArrowLeftSquareFill } from "react-icons/bs"

import { useLogout } from "../hooks/use-logout"

export default function LogoutButton() {
   const { loading, logout } = useLogout()

   return (
      <div className="py-4 mt-auto group">
         {!loading ? (
            <a href="/login" className="flex items-center gap-x-3" onClick={logout}>
               <BsFillArrowLeftSquareFill className="w-6 h-6 cursor-pointer text-rose-500 group-hover:text-rose-600" />{" "}
               <span className="text-lg tracking-tight text-white group-hover:text-rose-500 group-hover:cursor-pointer">
                  Logout
               </span>
            </a>
         ) : (
            <span className="loading loading-spinner"></span>
         )}
      </div>
   )
}
