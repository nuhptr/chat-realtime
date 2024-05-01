import express from "express"
import helmet from "helmet"

import { authRouter } from "../routes/auth-routes.js"
import { messageRouter } from "../routes/message-routes.js"

export const web = express()
web.use(helmet())
web.use(express.json()) //* Parse JSON bodiess
web.use(express.urlencoded({ extended: true }))

web.use("/api/auth", authRouter)
web.use("/api/messages", messageRouter)
