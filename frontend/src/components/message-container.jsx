import Messages from "./messages"
import MessageInput from "./message-input"

export default function MessageContainer() {
   return (
      <div className="md:min-w-[450px] flex flex-col py-8 pr-8 max-sm:py-4 max-sm:pr-4">
         <>
            {/* Header */}
            <div className="px-5 py-3 bg-white border border-white rounded-full border-opacity-30 bg-opacity-10 backdrop-blur-lg backdrop-filter">
               <span className="text-white label-text">To: </span>{" "}
               <span className="font-bold text-white ">Jhon Doe</span>
            </div>

            <Messages />
            <MessageInput />
         </>
      </div>
   )
}
