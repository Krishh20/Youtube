import express from "express"
// import uploadFileToS3 from "../controllers/uploadController.js";
import multer from "multer"
 import { initializeUpload, uploadChunk, completeUpload } from
 "../controllers/multipartupload.controller.js";
   const upload = multer();

 const router=express.Router()

//  router.post('/', upload.fields([{ name: 'chunk' }, { name: 'totalChunks' }, { name: 'chunkIndex' }]),
//  uploadFileToS3);


 // Route for initializing upload
 router.post('/initialize', upload.none(), initializeUpload);  //uploadnone- we accessing filename from body but not uplaodingfile needed
 // Route for uploading individual chunks
 router.post('/', upload.single('chunk'), uploadChunk);
// Route for completing the upload
 router.post('/complete', completeUpload);

//  router.post('/uploadToDB', uploadToDb);

export default router