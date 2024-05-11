import { Server } from "socket.io"
import http from "http"
import express from "express"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
   //* CHANGE LATER TO THE FRONTEND URL WHEN DEPLOYED
   cors: { origin: ["http://localhost:3000"], methods: ["GET", "POST"] },
})

const userSocketMap = {} // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
   return userSocketMap[receiverId]
}

io.on("connection", (socket) => {
   console.log("a user connected", socket.id)

   const userId = socket.handshake.query.userId
   if (userId != "undefined") userSocketMap[userId] = socket.id

   // io.emit() is used to send events to all the connected clients
   io.emit("getOnlineUsers", Object.keys(userSocketMap))

   // socket.on() is used to listen to the events. can be used both on client and server side
   socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
      delete userSocketMap[userId] // remove the user from the userSocketMap
      io.emit("getOnlineUsers", Object.keys(userSocketMap)) // send the updated list of online users to all the connected clients
   })
})

export { app, io, server }
