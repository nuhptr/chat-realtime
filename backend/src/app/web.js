import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"

import { authRouter } from "../routes/auth-routes.js"
import { messageRouter } from "../routes/message-routes.js"
import { userRouter } from "../routes/user-routes.js"

import { app } from "./socket/index.js"

dotenv.config()

app.use(cors())
app.use(express.json()) //* Parse JSON bodiess
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/messages", messageRouter)
app.use("/api/users", userRouter)
