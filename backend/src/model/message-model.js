import mongoose from "mongoose"

//* Private Messages
const messageModel = new mongoose.Schema(
   {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      message: { type: String, required: true },
   },
   { timestamps: true } //* createdAt and updatedAt fields will be added automatically
)

export const Message = mongoose.model("Message", messageModel)
