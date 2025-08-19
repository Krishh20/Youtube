 // db/db.js
 import { PrismaClient } from "../generated/prisma/client.js";
 const prisma = new PrismaClient()


  export async function updateVideoUrlInDB(filename, transcodedUrl) {
  console.log("---- ENTERED updateVideoUrlInDB ----");
  console.log("Inputs => filename:", filename, " transcodedUrl:", transcodedUrl);

  try {
    const updatedVideo = await prisma.videoData.update({
      where: { filename },
      data: { transcodedUrl },
    });

    console.log("DB update SUCCESS ", updatedVideo);
    return updatedVideo;
  } catch (err) {
    console.error("DB update ERROR ", err);
  }

  console.log("---- EXITING updateVideoUrlInDB ----");
}



 export async function addVideoDetailsToDB(title, description, author, url,filename) {
 const videoData = await prisma.videoData.create({
 data: {
 title: title,
 description: description,
 author: author,
 url: url,
 filename:filename
 } })
 console.log(videoData);
 }