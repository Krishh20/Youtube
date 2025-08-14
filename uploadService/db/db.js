 // db/db.js
 import { PrismaClient } from "../generated/prisma/client.js";
 const prisma = new PrismaClient()


export async function updateVideoUrlInDB(fileName, transcodedUrl) {
  return prisma.video.update({
    where: { fileName }, // assuming you store fileName in DB
    data: { url: transcodedUrl }
  });
}


 export async function addVideoDetailsToDB(title, description, author, url) {
 const videoData = await prisma.videoData.create({
 data: {
 title: title,
 description: description,
 author: author,
 url: url
 } })
 console.log(videoData);
 }