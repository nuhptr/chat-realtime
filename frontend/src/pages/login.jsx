import React from "react"

export default function LoginPages() {
   return (
      <div className="flex flex-col items-center justify-center mx-auto min-w-96">
         <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
               Login <span className="text-green-500">Messenger</span>
            </h1>

            <form action="">
               <div className="mt-1 tracking-tight">
                  <label htmlFor="username" className="p-2 label">
                     <span className="text-base label-text">Username</span>
                  </label>
                  <input
                     type="text"
                     name="username"
                     placeholder="Enter username."
                     className="w-full h-10 input input-bordered"
                  />
               </div>

               <div className="mt-1 tracking-tight">
                  <label htmlFor="password" className="p-2 label">
                     <span className="text-base label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter Password"
                     className="w-full input input-bordered"
                  />
               </div>

               <a
                  href="#"
                  className="inline-block mt-2 text-sm hover:underline hover:text-green-600">
                  {"Don't"} have an account? Register
               </a>

               <div>
                  <button className="w-full h-10 mt-2 text-white bg-green-600 border-none hover:bg-green-700 btn btn-sm">
                     Login
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}
