import express from "express"
import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from 'cors'
import dotenv from 'dotenv'
const app =express()
dotenv.config()
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors())
import postRoutes from "./routes/posts.js"
app.use("/posts",postRoutes)
const CONNECTION_URL="mongodb+srv://memories:Marshall67@cluster0.wyusqtg.mongodb.net/?retryWrites=true&w=majority"

const PORT=process.env.PORT 
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))).catch((error)=>console.log("error found "+error.message));
//app.listen(PORT, ()=>console.log(`server running on port ${PORT}`))
 //mongoose.set("useFindAndModify",false);
