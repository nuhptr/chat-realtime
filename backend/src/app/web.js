import path from "path"
import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"

import { authRouter } from "../routes/auth-routes.js"
import { messageRouter } from "../routes/message-routes.js"
import { userRouter } from "../routes/user-routes.js"

import { connectToDb } from "../lib/db.js"
import { app, server } from "../lib/socket.js"

dotenv.config()

const __dirname = path.resolve()

const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json()) //* Parse JSON bodiess
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)

app.use(express.static(path.join(__dirname, "/frontend/dist")))

server.listen(PORT, function () {
   connectToDb()
   console.log(`Server is running on port ${PORT}`)
})
