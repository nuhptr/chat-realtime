import { useState } from "react"
import { Link } from "react-router-dom"

import { useSignup } from "../hooks/use-signup"

import GenderCheckbox from "../components/gender-checkbox"

export default function SignUpPages() {
   const [inputs, setInputs] = useState({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
   })

   const { loading, signup } = useSignup()

   const handleCheckboxChange = (gender) => {
      setInputs({ ...inputs, gender })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      await signup(inputs)
   }

   return (
      <div className="flex flex-col items-center justify-center mx-auto min-w-96">
         <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg">
            <h1 className="text-3xl font-semibold text-center text-white">
               Sign Up <span className="text-green-400">Messenger</span>
            </h1>

            <form onSubmit={handleSubmit}>
               <div className="mt-2 tracking-tight">
                  <label htmlFor="full-name" className="p-2 label">
                     <span className="text-base text-white label-text">Full Name</span>
                  </label>
                  <input
                     type="text"
                     name="full-name"
                     placeholder="Jhon Doe"
                     className="w-full input input-bordered"
                     value={inputs.fullName}
                     onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
                     value={inputs.username}
                     onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                  />
               </div>

               <div className="mt-1 mb-2 tracking-tight">
                  <label htmlFor="password" className="p-2 label">
                     <span className="text-base text-white label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     name="password"
                     placeholder="Enter Password."
                     className="w-full input input-bordered"
                     value={inputs.password}
                     onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                  />
               </div>

               <div className="mt-1 mb-2 tracking-tight">
                  <label htmlFor="confirm-password" className="p-2 label">
                     <span className="text-base text-white label-text">Confirm Password</span>
                  </label>
                  <input
                     type="password"
                     name="confirm-password"
                     placeholder="Confirm Password."
                     className="w-full input input-bordered"
                     value={inputs.confirmPassword}
                     onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                  />
               </div>

               <GenderCheckbox
                  onCheckboxChange={handleCheckboxChange}
                  selectedGender={inputs.gender}
               />

               <div>
                  <button
                     type="submit"
                     className="w-full mt-6 text-white bg-green-600 border-none hover:bg-green-700 btn btn-md"
                     disabled={loading}>
                     {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                  </button>
               </div>

               <Link
                  to="/login"
                  className="inline-block w-full mt-2 text-sm text-center text-white hover:underline hover:text-green-600">
                  Already Have an Account? Login
               </Link>
            </form>
         </div>
      </div>
   )
}
