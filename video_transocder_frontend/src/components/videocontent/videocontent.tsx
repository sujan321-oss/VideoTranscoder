import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetchContent from "./fetchvideoContent";
import ReactPlayer from 'react-player';
// import VideoPlayer from "./videoplayer";


export default function VideoContnet() {
    const location = useLocation()
    const { videourl, loading, error, fetchData } = useFetchContent()

    const imageurl: string = location.state?.imageUrl;

    useEffect(() => {
        fetchData(imageurl)
    }, [])

    if (error) { console.log(error); return <div className=" text-white flex justify-center">{"error occured"}</div> }
    if (loading) return <div className=" text-white flex justify-cente">loading....</div>

    console.log("video url is ")
    console.log(" url is " + Array.isArray(videourl))

    return (

        <div className=" flex justify-center min-h-screen items-center" >

            {videourl && <div>
                <ReactPlayer url={videourl[0]} controls={true} />
            </div>}



        </div>
    )
}

