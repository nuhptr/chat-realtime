import express from "express"

import { sendMessage } from "../controller/message-controller.js"

export const messageRouter = express.Router()

messageRouter.post("/send/:id", sendMessage)
