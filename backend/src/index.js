import dotenv from "dotenv"

import { web } from "../src/app/web.js"
import { connectToDb } from "./lib/db.js"

const PORT = process.env.PORT || 8000

dotenv.config()

web.listen(PORT, () => {
   connectToDb()
   console.log(`Server is running on port ${PORT}`)
})
