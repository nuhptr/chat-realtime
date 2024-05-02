import express from "express"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

import { authRouter } from "../routes/auth-routes.js"
import { messageRouter } from "../routes/message-routes.js"

export const web = express()

dotenv.config()

web.use(helmet())
web.use(express.json()) //* Parse JSON bodiess
web.use(express.urlencoded({ extended: true }))
web.use(cookieParser())

web.use("/api/auth", authRouter)
web.use("/api/messages", messageRouter)
