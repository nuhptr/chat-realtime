import mongoose from "mongoose"

const userModel = new mongoose.Schema(
   {
      fullName: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true, minLength: 6 },
      gender: { type: String, required: true, enum: ["male", "female"] },
      profilePic: { type: String, default: "" },
   },
   { timestamps: true } //* createdAt and updatedAt => Member since and Last seen
)

export const User = mongoose.model("User", userModel)
