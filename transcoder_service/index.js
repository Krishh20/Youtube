import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import KafkaConfig from "./kafka/kafka.js";
import convertToHLS from "./hls/transcode.js";
import s3ToS3 from "./hls/s3tos3.js";
dotenv.config();

const app=express();
const port= 8081;
app.use(cors({
    allowedHeaders: ["*"],
 origin: "*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({
        msg:"working"
    })
})
app.use("/transcode",(req,res)=>{
    // convertToHLS();
    s3ToS3();
})

 const kafkaconfig = new KafkaConfig()
 kafkaconfig.consume("transcode", async (message) => {  //is this msg that extracting from body in /publish route
 try {
 console.log("Got data from Kafka:", message);
 // Parsing JSON message value
 const value = JSON.parse(message);
 // Checking if value and filename exist
 if (value && value.filename) {
 console.log("Filename is", value.filename);
 await s3ToS3(value.filename); // Make this change in controller
 } else {
 console.log("Didn't receive filename to be picked from S3");
 }
 } catch (error) {
 console.error("Error processing Kafka message:", error);
 // You might want to handle or log this error appropriately
 }
 });


app.listen(port,()=>{
    console.log("listening")
})