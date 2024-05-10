import { Link } from "react-router-dom"

export default function LoginPages() {
   return (
      <div className="flex flex-col items-center justify-center mx-auto min-w-96">
         <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg">
            <h1 className="text-3xl font-semibold text-center text-white">
               Login <span className="text-green-400">Messenger</span>
            </h1>

            <form action="">
               <div className="mt-2 tracking-tight">
                  <label htmlFor="username" className="p-2 label">
                     <span className="text-base text-white label-text">Username</span>
                  </label>
                  <input
                     type="text"
                     name="username"
                     placeholder="Enter username."
                     className="w-full input input-bordered"
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
                  />
               </div>

               <div>
                  <button className="w-full mt-6 text-white bg-green-600 border-none hover:bg-green-700 btn btn-md">
                     Login
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
