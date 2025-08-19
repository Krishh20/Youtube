import express from "express"
import uploadRouter from "./routes/upload.route.js"
import cors from "cors"
import dotenv from "dotenv"
import { startTranscodedUrlConsumer  } from "./controllers/kafkaconsumer.controller.js";
dotenv.config();

const app=express();
const port= 8080;
app.use(cors({
    allowedHeaders: ["*"],
 origin: "*"
}))
app.use(express.json())
app.use("/upload",uploadRouter)

startTranscodedUrlConsumer();

app.get("/",(req,res)=>{
    res.json({
        msg:"working"
    })
})

app.listen(port,()=>{
    console.log("listening")
})