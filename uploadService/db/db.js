 // db/db.js
 import { PrismaClient } from "../generated/prisma/client.js";
 const prisma = new PrismaClient()
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