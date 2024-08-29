import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetchContent from "./fetchvideoContent";
import ReactPlayer from 'react-player';


export default function VideoContnet() {
    const location = useLocation()
    const { videourl, loading, error, fetchData } = useFetchContent()

    const imageurl: string = location.state?.imageUrl;

    useEffect(() => {
        fetchData(imageurl)
    }, [])

    if (error) { console.log(error); return <div className=" text-white flex justify-center">{"error occured"}</div> }
    if (loading) return <div className=" text-white flex justify-cente">loading....</div>

    console.log(videourl)

    return (

        <div>
            {videourl && <div>
                <ReactPlayer url={videourl[0]} controls={true} />
                </div>}
            <div className=" text-white flex justify-center" >{imageurl}</div>

         
             


        
            

        </div>
    )
}

