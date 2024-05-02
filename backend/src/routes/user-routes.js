import express from "express"

import { protectedRoute } from "../middleware/protected-route"
import { getUsersForSidebar } from "../controller/user-controller"

export const userRouter = express.Router()

// index route
userRouter.get("/", protectedRoute, getUsersForSidebar)
