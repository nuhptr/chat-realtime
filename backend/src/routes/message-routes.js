import express from "express"

import { getMessages, sendMessage } from "../controller/message-controller.js"
import { protectedRoute } from "../middleware/protected-route.js"

export const messageRouter = express.Router()

messageRouter.get("/:id", protectedRoute, getMessages)
messageRouter.post("/send/:id", protectedRoute, sendMessage)
