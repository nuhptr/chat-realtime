import jwt from "jsonwebtoken"

import { User } from "../model/user-model.js"

export async function protectedRoute(req, res, next) {
   try {
      const token = req.cookies.jwt
      if (!token) {
         return res.status(401).json({ message: "Unauthorized - No token provided." })
      }

      const decode = jwt.verify(token, process.env.JWT_SECRET)
      if (!decode) {
         return res.status(401).json({ message: "Unauthorized - Invalid token." })
      }

      // select("-password") is used to exclude the password field from the user object
      const user = await User.findById(decode.userId).select("-password")
      if (!user) {
         return res.status(401).json({ message: "User not found." })
      }

      req.user = user

      next()
   } catch (error) {
      console.log("Error in Protected Route Middleware: ", error.message)
      res.status(401).json({ message: "Unauthorized." })
   }
}
