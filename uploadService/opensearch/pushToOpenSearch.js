 import { Client } from "@opensearch-project/opensearch";
 const PushToOpenSearch = async (title, description, author, videoUrl) => {
 try {
 console.log('Pushing to Open Search');
 // Process video upload and extract metadata
 var auth = process.env.AUTH; // For testing only. Don't store credentials in code.
 var host =process.env.HOST
 var host_aiven =process.env.AIVENHOST
 var client = new Client({
 node: host,
 auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  }
 });
 var index_name = "video";
 var document = {
 title: title,
 author: author,
 description: description,
 videoUrl: videoUrl
 };
 var response = await client.index({
 id: title, // id should ideally be db id
 index: index_name,
 body: document,
 refresh: true,
 });
 console.log("Adding document:");
 console.log(response.body);
 } catch (error) {
 // Respond with error message
 console.log("host url is"," ",error.message)
}
 };
 export default PushToOpenSearch;
 // After Completion of MultiPart Uploa