import { BsArrowRightCircleFill } from "react-icons/bs"

export default function MessageInput() {
   return (
      <form className="px-4 my-3">
         <div className="relative w-full">
            <input
               type="text"
               className="block w-full p-4 text-sm text-black bg-white border border-gray-300 rounded-2xl bg-opacity-20 backdrop-filter backdrop-blur-lg active:outline-none focus:outline-none focus:ring-0 focus:border-white placeholder:text-black placeholder:text-opacity-30"
               placeholder="Type a message.."
            />
            <button type="submit" className="absolute inset-y-0 flex items-center end-0 pe-3">
               <BsArrowRightCircleFill className="w-6 h-6 text-white" />
            </button>
         </div>
      </form>
   )
}
