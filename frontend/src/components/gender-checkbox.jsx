import React from "react"

export default function GenderCheckbox() {
   return (
      <div className="flex gap-x-2">
         <div className="form-control">
            <label htmlFor="male" className="gap-2 cursor-pointer label">
               <span className="text-white label-text">Male</span>
               <input
                  type="checkbox"
                  name="male"
                  className="border-white checkbox checked:border-green-500 [--chkbg:theme(colors.green.500)] [--chkfg:white]"
               />
            </label>
         </div>

         <div className="form-control">
            <label htmlFor="female" className="gap-2 cursor-pointer label">
               <span className="text-white label-text">Female</span>
               <input
                  type="checkbox"
                  className="border-white checkbox checked:border-rose-500 [--chkbg:theme(colors.rose.500)] [--chkfg:white]"
               />
            </label>
         </div>
      </div>
   )
}
