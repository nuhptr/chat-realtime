import { User } from "../model/user-model.js"

export async function getUsersForSidebar(req, res) {
   try {
      const loggedInUserId = req.user._id

      //* $ne is a mongoose operator that means not equal to
      //* & -password will exclude the password field
      const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

      res.status(200).json(filteredUsers)
   } catch (error) {
      console.error("Error in Get Users For Sidebar For Controller: ", error.message)
      res.status(500).json({ message: "Internal Server Error." })
   }
}
