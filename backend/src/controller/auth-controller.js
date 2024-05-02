import bcryptjs from "bcryptjs"

import { User } from "../model/user-model.js"
import { generateTokenAndSetCookie } from "../lib/generate-token.js"

//* Signup Controller
export async function signup(req, res) {
   try {
      const { fullName, username, password, confirmPassword, gender } = req.body

      if (password !== confirmPassword) {
         return res.status(400).json({ message: "Password and Confirm Password do not match" })
      }

      const user = await User.findOne({ username })
      if (user) {
         return res.status(400).json({ message: "Username already exists" })
      }

      //* Hashing the password
      const salt = await bcryptjs.genSalt(10)
      const hashPassword = await bcryptjs.hash(password, salt)

      //* https://avatar.iran.liara.run
      const boyPicture = `https://avatar.iran.liara.run/public/boy?username=${username}`
      const girlPicture = `https://avatar.iran.liara.run/public/girl?username=${username}`

      const newUser = new User({
         fullName,
         username,
         password: hashPassword,
         gender,
         profilePic: gender === "male" ? boyPicture : girlPicture,
      })

      if (newUser) {
         //* Generate token and set cookie
         generateTokenAndSetCookie(newUser._id, res)
         await newUser.save()

         res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
         })
      } else {
         res.status(400).json({ message: "Invalid user data" })
      }
   } catch (error) {
      console.error("Error in Signup Controller: ", error.message)
      res.status(500).json({ error: "Internal Server Error" })
   }
}

//* Login Controller
export async function login(req, res) {
   try {
      const { username, password } = req.body

      const user = await User.findOne({ username })
      const isPasswordMatch = await bcryptjs.compare(password, user?.password || "")

      if (!user || !isPasswordMatch) {
         return res.status(400).json({ message: "Username or Password is incorrect." })
      }

      generateTokenAndSetCookie(user._id, res)

      res.status(200).json({
         _id: user._id,
         fullName: user.fullName,
         username: user.username,
         profilePic: user.profilePic,
      })
   } catch (error) {
      console.error("Error in Login Controller: ", error.message)
      res.status(500).json({ error: "Internal Server Error" })
   }
}

//* Logout Controller
export function logout(req, res) {
   try {
      res.cookie("jwt", "", { maxAge: 0 })
      res.status(200).json({ message: "User has logged out." })
   } catch (error) {
      console.error("Error in Logout Controller: ", error.message)
      res.status(500).json({ error: "Internal Server Error" })
   }
}
