import KafkaConfig from "../kafka/kafka.js";
import { updateVideoUrlInDB } from "../db/db.js";

export  const startTranscodedUrlConsumer =()=>{

 const kafkaconfig = new KafkaConfig("transcoder-service", "transcoder-group")

 kafkaconfig.consume("video.transcoded", async (message) => {  //is this msg that extracting from body in /publish route
 try {
 console.log("Got data from Kafka:", message);
 // Parsing JSON message value
 const value = JSON.parse(message);
 // Checking if value and filename exist
 if (value && value.url && value.filename) {
 console.log("transcoded manifest url is", value.url);
      await updateVideoUrlInDB(value.filename, value.url);
 } else {
 console.log("Didn't receive filename to be picked from S3");
 }
 } catch (error) {
 console.error("Error processing Kafka message:", error);
 // You might want to handle or log this error appropriately
 }
 });
}
