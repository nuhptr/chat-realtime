import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()

const server = http.createServer(app)

const io = new Server(server, {
   cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
   },
})

io.on("connection", (socket) => {
   console.log("a user connected")

   // socket.on() is used to listen to the events. Can be used both on client and server side
   socket.on("disconnect", () => {
      console.log("user disconnected")
   })
})

export { app, io, server }
