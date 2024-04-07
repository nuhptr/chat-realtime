import express from "express"
import helmet from "helmet"

import { authRouter } from "../routes/auth-routes.js"

export const web = express()
web.use(helmet())
web.use(express.json())
web.use(express.urlencoded({ extended: true }))

web.use("/api/auth", authRouter)
