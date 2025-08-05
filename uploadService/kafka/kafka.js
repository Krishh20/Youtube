 import {Kafka} from "kafkajs"   //aiven login part
 import fs from "fs"
 import path from "path"
 class KafkaConfig {
 constructor(){
console.log("BROKERURL:", process.env.BROKERURL);
 this.kafka = new Kafka({
 clientId: process.env.CLIENTID,   // changed broker and password, change to sasl service setting, overview copy broker nd pasw
 brokers: [process.env.BROKERURL],
 ssl: {
 ca: [fs.readFileSync(path.resolve("./ca.pem"), "utf-8")]
 },
 sasl: {
 username:process.env.AIVENUSERNAME ,
 password: process.env.AIVENPASSWORD,
 mechanism: "plain"
 }
 })
 this.producer = this.kafka.producer()
 this.consumer = this.kafka.consumer({groupId:  process.env.KAFKA_GROUP_ID})
 }
 async produce(topic, messages){
 try {
 const result = await this.producer.connect()
 console.log("kafka connected... : ", result)
 await this.producer.send({
 topic: topic,
 messages: messages
 })
 } catch (error) {
 console.log(error)
 }finally{
 await this.producer.disconnect()
 } }
 async consume(topic , callback){
 try {
 await this.consumer.connect()
 await this.consumer.subscribe({topic: topic, fromBeginning: true})
 await this.consumer.run({
eachMessage: async({
 topic, partition,message
 }) =>{
 const value = message.value.toString()
 callback(value)
 }
 })
 } catch (error) {
 console.log(error)
 }
 }
 }
 export default KafkaConfig;