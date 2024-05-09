export default function MessageInput() {
   return (
      <form className="px-4 my-3">
         <div className="w-full">
            <input
               type="text"
               className="block w-full p-4 text-sm text-black bg-white border border-gray-300 rounded-2xl bg-opacity-20 backdrop-filter backdrop-blur-lg active:outline-none focus:outline-none focus:ring-0 focus:border-white"
            />
         </div>
      </form>
   )
}
