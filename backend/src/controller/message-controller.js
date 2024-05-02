import { Message } from "../model/message-model.js"
import { Conversation } from "../model/conversation-model.js"

export async function sendMessage(req, res) {
   try {
      const { message } = req.body
      const { id: receiverId } = req.params
      const senderId = req.user._id

      let conversation = await Conversation.findOne({
         participants: { $all: [senderId, receiverId] },
      })

      if (!conversation) {
         conversation = await Conversation.create({ participants: [senderId, receiverId] })
      }

      const newMessage = new Message({ senderId, receiverId, message })
      if (newMessage) {
         conversation.messages.push(newMessage._id)
      }

      //* This will save the message and conversation in parallel
      await Promise.all([newMessage.save(), conversation.save()])

      res.status(201).json(newMessage)
   } catch (error) {
      console.error("Error in Send Message Controller: ", error.message)
      res.status(500).json({ message: "Internal Server Error." })
   }
}
