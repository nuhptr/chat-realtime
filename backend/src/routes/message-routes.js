import express from "express"

import { sendMessage } from "../controller/message-controller.js"
import { protectedRoute } from "../middleware/protected-route.js"

export const messageRouter = express.Router()

messageRouter.post("/send/:id", protectedRoute, sendMessage)
