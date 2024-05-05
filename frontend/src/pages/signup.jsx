import React from "react"
import GenderCheckbox from "../components/gender-checkbox"

export default function SignUpPages() {
   return (
      <div className="flex flex-col items-center justify-center mx-auto min-w-96">
         <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg">
            <h1 className="text-3xl font-semibold text-center text-white">
               Sign Up <span className="text-green-400">Messenger</span>
            </h1>

            <form action="">
               <div className="mt-2 tracking-tight">
                  <label htmlFor="full-name" className="p-2 label">
                     <span className="text-base text-white label-text">Full Name</span>
                  </label>
                  <input
                     type="text"
                     name="full-name"
                     placeholder="Jhon Doe"
                     className="w-full input input-bordered"
                  />
               </div>

               <div className="mt-1 tracking-tight">
                  <label htmlFor="username" className="p-2 label">
                     <span className="text-base text-white label-text">Username</span>
                  </label>
                  <input
                     type="text"
                     name="username"
                     placeholder="jhondoe"
                     className="w-full input input-bordered"
                  />
               </div>

               <div className="mt-1 mb-2 tracking-tight">
                  <label htmlFor="password" className="p-2 label">
                     <span className="text-base text-white label-text">Password</span>
                  </label>
                  <input
                     type="text"
                     name="password"
                     placeholder="*******"
                     className="w-full input input-bordered"
                  />
               </div>

               <GenderCheckbox />

               <div>
                  <button className="w-full mt-6 text-white bg-green-600 border-none hover:bg-green-700 btn btn-md">
                     Register
                  </button>
               </div>

               <a
                  href="#"
                  className="inline-block w-full mt-2 text-sm text-center text-white hover:underline hover:text-green-600">
                  Already Have an Account? Login
               </a>
            </form>
         </div>
      </div>
   )
}
