"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation.js";
import axios from "axios";
import VideoPlayer from "../../pages/videoplayer.jsx";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const WatchPage = () => {
   const { id } = useParams(); // gets "11" from /watch/11
   const numId = Number(id);
  console.log("id from URL:", numId, typeof numId);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get("http://localhost:8082/watch/home"); // all videos
        const allVideos = res.data;
        console.log("watchpage", allVideos); // best way
        const found = allVideos.find(
          (v) => v.id === numId || v._source?._id === numId
        );


console.log("allVideos ids:", allVideos.map(v => v.id));

        console.log("found",found)
        setVideo(found);
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
    };
    fetchVideo();
  }, [id]);

  if (!video) return <div className="p-10">Loading video...</div>;

  return (
    <div className="">
      {/* <h1 className="text-2xl font-bold ">
        {video.title || video._source?.title}
      </h1> */}
      <div className="p-10">
        {video.transcodedUrl ? (
          <VideoPlayer transcodedUrl={video.transcodedUrl} />
        ) : (

      <ReactPlayer
        url={video.url}
        controls
       width="720px" height="400px"
      />

        )}
         <p className="text-gray-700 m-5">{video.description || video._source?.description}</p>
      </div>

    </div>
  );
};

export default WatchPage;