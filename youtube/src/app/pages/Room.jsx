"use client"
import dynamic from 'next/dynamic'  //for only client side rendering
import React, { useState } from 'react'       // {}not export , wout curly- default export
 const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Room = () => {
   const [userstream, setUserstream]=useState()

   const callstream=async()=>{  //webcam
    const stream= await navigator.mediaDevices.getUserMedia({
      audio:true,
      video:true
    })
     setUserstream(stream)
   }

  return ( // 2 divs 1st normal, webcam
   <div>
     <div>
      <ReactPlayer className="react-player" controls={true} url='https://www.youtube.com/watch?v=wtAiUJUVawg&list=RDwtAiUJUVawg&start_radio=1
' />
    </div>
    <div>
      <button onClick={callstream}>stream</button>
    </div>

     <div>
      <ReactPlayer className="react-player" controls={true} url={userstream} />
    </div>

   </div>
  )
}

export default Room
