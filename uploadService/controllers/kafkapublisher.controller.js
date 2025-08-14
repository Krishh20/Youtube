import KafkaConfig from "../kafka/kafka.js";

 const sendMessageToKafka = async (req, res) => {

 console.log("got here in upload service...")

 try {
 const message = req.body
 console.log("body : ", message)

 const kafkaconfig = new KafkaConfig()

 const msgs = [
 {
 key: "key1",
 value: JSON.stringify(message)
 }
 ]

 const result = await kafkaconfig.produce("transcode", msgs)  //(topic, msg)

 console.log("result of produce : ", result)

 res.status(200).json("message uploaded successfully")
 }
 catch (error) {
 console.log(error)
 }

 }
 export default sendMessageToKafka;


  export const pushVideoForEncodingToKafka=async(title,filename)=>{
   try {
 const message ={
    "title":title,
    "filename":filename
 }
 console.log("body : ", message)

 const kafkaconfig = new KafkaConfig()

 const msgs = [
 {
 key: "video",
 value: JSON.stringify(message)
 }
 ]

 const result = await kafkaconfig.produce("transcode", msgs)  //(topic, msg)

 console.log("result of produce : ", result)

//  res.status(200).json("message uploaded successfully")
 }
 catch (error) {
 console.log(error)
 }
 }


 export  const TranscodedVideoConsumer=()=>{
 const kafkaconfig = new KafkaConfig()
 kafkaconfig.consume("video.transcoded", async (message) => {  //is this msg that extracting from body in /publish route
 try {
 console.log("Got data from Kafka:", message);
 // Parsing JSON message value
 const value = JSON.parse(message);
 // Checking if value and filename exist
 if (value && value.url) {
 console.log("transcoded manifest url is", value.url);

  await axios.post('http://localhost:8080/upload/complete', {

       "transcodedurl": value.url

 });


//  await s3ToS3(value.url); // Make this change in controller
 } else {
 console.log("Didn't receive filename to be picked from S3");
 }
 } catch (error) {
 console.error("Error processing Kafka message:", error);
 // You might want to handle or log this error appropriately
 }
 });
}