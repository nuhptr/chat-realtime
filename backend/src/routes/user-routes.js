import express from "express"

import { protectedRoute } from "../middleware/protected-route.js"
import { getUsersForSidebar } from "../controller/user-controller.js"

export const userRouter = express.Router()

// index route
userRouter.get("/", protectedRoute, getUsersForSidebar)
