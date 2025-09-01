"use client"
 import React, { useRef, useEffect } from 'react';
 import Hls from 'hls.js';
 const VideoPlayer = ({transcodedUrl, height="400px",width="720px"}) => {
 const videoRef = useRef(null);
 const src = transcodedUrl
//  "https://s3.ap-south-1.amazonaws.com/krishnaveni.aws.s3.bucket/hls/test_mp4_master.m3u8"

//  "https://hhld-classes.s3.ap-south-1.amazonaws.com/output/test_mp4_master.m3u8";
console.log("hi from video player")
 useEffect(() => {
 const video = videoRef.current;
 if (Hls.isSupported()) {
 console.log("HLS is supported");
 console.log(src);
 const hls = new Hls();
 hls.attachMedia(video);
 hls.loadSource(src);
 hls.on(Hls.Events.MANIFEST_PARSED, function () {
 console.log("playing video");
//  video.play();
 });
 } else {
 console.log('HLS is not supported');
 // Play from the original video file
 }
 }, [src]);
return <video ref={videoRef} controls  className={`${height} ${width}`}/>;
 };
 export default VideoPlayer;