import express from "express"
import uploadRouter from "./routes/upload.route.js"
import cors from "cors"
import dotenv from "dotenv"
import kafkaPublisherRouter from "./routes/kafkapublisher.route.js"
import KafkaConfig from "./kafka/kafka.js"
dotenv.config();

const app=express();
const port=process.env.PORT || 8001;
app.use(cors({
    allowedHeaders: ["*"],
 origin: "*"
}))
app.use(express.json())
app.use("/upload",uploadRouter)
app.use('/publish', kafkaPublisherRouter);
app.get("/",(req,res)=>{
    res.json({
        msg:"working"
    })
})

app.listen(port,()=>{
    console.log("listening")
})