import React from "react"

import Sidebar from "../components/sidebar"
import MessageContainer from "../components/message-container"

export default function HomePages() {
   return (
      <div className="flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
         <Sidebar />
         {/* <MessageContainer /> */}
      </div>
   )
}
