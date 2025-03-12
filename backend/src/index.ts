import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { clerkMiddleware } from "@clerk/express"

import userRoute from "./Routes/user.route"
import adminRoute from "./Routes/admin.route"
import authRoute from "./Routes/auth.route"
import songRoute from "./Routes/song.route"
import albumRoute from "./Routes/album.route"
import statRoute from "./Routes/stat.route"
import connectDb from "./lib/db"
import fileUpload from "express-fileupload"
import path from "path"

dotenv.config()
const port = process.env.HTTP_PORT

const app = express()
app.use(express.json())
app.use(cors())
// const __dirname = path.resolve()

app.use(clerkMiddleware())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir:path.join(__dirname,"tmp"),
  createParentPath: true,
  limits: {
    fileSize: 10*1024*1024
  },
}))



app.use("/api/users",userRoute)
app.use("/api/admin",adminRoute)
app.use("/api/auth",authRoute)
app.use("/api/songs",songRoute)
app.use("/api/albums",albumRoute)
app.use("/api/stats",statRoute)

app.use((err:any,req:express.Request,res:express.Response,next:express.NextFunction)=>{
  res.status(500).json({message: process.env.NODE_ENV === "production"? "Internal Server Error": err.message})
})


app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`)
  connectDb()
})
