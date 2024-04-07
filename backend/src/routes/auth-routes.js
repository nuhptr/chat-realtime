import express from "express"

import { login, logout, signup } from "../controller/auth-controller.js"

export const authRouter = express.Router()

authRouter.post("/login", login)
authRouter.post("/signup", signup)
authRouter.post("/logout", logout)
