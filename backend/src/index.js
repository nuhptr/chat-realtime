import { server } from "../src/socket/index.js"
import { connectToDb } from "./lib/db.js"

server.listen(process.env.PORT, () => {
   connectToDb()
   console.log(`Server is running on port ${process.env.PORT}`)
})
