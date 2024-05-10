import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"

import { authRouter } from "../routes/auth-routes.js"
import { messageRouter } from "../routes/message-routes.js"
import { userRouter } from "../routes/user-routes.js"

export const web = express()

dotenv.config()

web.use(cors())
web.use(express.json()) //* Parse JSON bodiess
web.use(cookieParser())

web.use("/api/auth", authRouter)
web.use("/api/messages", messageRouter)
web.use("/api/users", userRouter)
