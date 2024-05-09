import { IoSearchSharp } from "react-icons/io5"

export default function SearchInput() {
   return (
      <form className="flex items-center gap-2">
         <input type="text" placeholder="search.." className="rounded-full input input-bordered" />
         <button
            type="submit"
            className="text-white bg-green-500 btn btn-circle hover:bg-green-600">
            <IoSearchSharp className="w-6 h-6 outline-none" />
         </button>
      </form>
   )
}
