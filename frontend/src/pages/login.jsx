import { Link } from "react-router-dom"
import { useState } from "react"

import { useLogin } from "../hooks/use-login"

export default function LoginPages() {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

   const { loading, login } = useLogin()

   const handleSubmit = async (e) => {
      e.preventDefault()
      await login(username, password)
   }

   return (
      <div className="flex flex-col items-center justify-center mx-auto min-w-96">
         <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg">
            <h1 className="text-3xl font-semibold text-center text-white">
               Login <span className="text-green-400">Messenger</span>
            </h1>

            <form onSubmit={handleSubmit}>
               <div className="mt-2 tracking-tight">
                  <label htmlFor="username" className="p-2 label">
                     <span className="text-base text-white label-text">Username</span>
                  </label>
                  <input
                     type="text"
                     name="username"
                     placeholder="Enter username."
                     className="w-full input input-bordered"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>

               <div className="mt-1 tracking-tight">
                  <label htmlFor="password" className="p-2 label">
                     <span className="text-base text-white label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter Password"
                     className="w-full input input-bordered"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>

               <div>
                  <button
                     className="w-full mt-6 text-white bg-green-600 border-none hover:bg-green-700 btn btn-md"
                     type="submit"
                     disabled={loading}>
                     {loading ? <span className="loading loading-spinner"></span> : "Login"}
                  </button>
               </div>

               <Link
                  to="/signup"
                  className="inline-block w-full mt-2 text-sm text-center text-white hover:underline hover:text-green-600">
                  {"Don't"} have an account? Register
               </Link>
            </form>
         </div>
      </div>
   )
}
