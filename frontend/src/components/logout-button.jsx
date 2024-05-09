import { BsFillArrowLeftSquareFill } from "react-icons/bs"

export default function LogoutButton() {
   return (
      <div className="flex items-center py-4 mt-auto group gap-x-3">
         <BsFillArrowLeftSquareFill className="w-6 h-6 cursor-pointer text-rose-500 group-hover:text-rose-600" />{" "}
         <span className="text-lg tracking-tight text-white group-hover:text-rose-500 group-hover:cursor-pointer">
            Logout
         </span>
      </div>
   )
}
