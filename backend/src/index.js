import { web } from "../src/app/web.js"
import { connectToDb } from "./lib/db.js"

web.listen(process.env.PORT, () => {
   connectToDb()
   console.log(`Server is running on port ${process.env.PORT}`)
})
