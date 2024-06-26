import { getReceiverSocketId, io } from "../lib/socket.js"

import { Message } from "../model/message-model.js"
import { Conversation } from "../model/conversation-model.js"

//* SEND MESSAGE CONTROLLER
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

      //* THIS WILL SAVE THE MESSAGE AND CONVERSATION IN PARALLEL
      await Promise.all([newMessage.save(), conversation.save()])

      //* SOCKET IO FUNCTIONALITY WILL GO HERE
      const receiverSocketId = getReceiverSocketId(receiverId)
      if (receiverSocketId) {
         // io.to<socket_id>.emit() is used to send events to a specific client
         io.to(receiverSocketId).emit("newMessage", newMessage)
      }

      res.status(201).json(newMessage)
   } catch (error) {
      console.error("Error in Send Message Controller: ", error.message)
      res.status(500).json({ message: "Internal Server Error." })
   }
}

//* GET MESSAGES CONTROLLER
export async function getMessages(req, res) {
   try {
      const { id: userChatToId } = req.params
      const senderId = req.user._id

      /**
       * THIS WILL FIND THE CONVERSATION BETWEEN THE SENDER AND THE RECEIVER
       * NOT REFERENCE TO THE MESSAGES BUT THE ACTUAL MESSAGES
       * */
      const conversation = await Conversation.findOne({
         participants: { $all: [senderId, userChatToId] },
      }).populate("messages")

      if (!conversation) return res.status(200).json([])

      const messages = conversation.messages

      res.status(200).json(messages)
   } catch (error) {
      console.error("Error in Get Messages Controller: ", error.message)
      res.status(500).json({ message: "Internal Server Error." })
   }
}
