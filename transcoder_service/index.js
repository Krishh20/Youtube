import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import KafkaConfig from "./kafka/kafka.js";
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


 const kafkaconfig = new KafkaConfig()
 kafkaconfig.consume("transcode", async (message) => {
 try {
 console.log("Got data from Kafka:", message);
 // Parsing JSON message value
 const value = JSON.parse(message);

 if (value && value.filename) {
 console.log("Filename is", value.filename);
 const transcodedUrl= await s3ToS3(value.filename);
   pushTranscodedVideo(value.title,transcodedUrl)
 } else {
 console.log("Didn't receive filename to be picked from S3");
 }
 } catch (error) {
 console.error("Error processing Kafka message:", error);
 //  might want to handle or log this error appropriately
 }
 });


 const pushTranscodedVideo =async(title,url)=>{
   try {
 const message ={
    "title":title,
    "url":url
 }
 console.log("body : ", message)

 const kafkaconfig = new KafkaConfig()

 const msgs = [
 {
 key: "video",
 value: JSON.stringify(message)
 }
 ]

 const result = await kafkaconfig.produce("video.transcoded", msgs)  //(topic, msg)

 console.log("result of produce : ", result)
 }
 catch (error) {
 console.log(error)
 }
 }




app.listen(port,()=>{
    console.log("listening")
})
