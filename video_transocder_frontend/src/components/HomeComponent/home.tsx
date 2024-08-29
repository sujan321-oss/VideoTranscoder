import React, { useEffect, useState, useRef } from "react";

import useThumbnailFetching from "./useThumbnailFetching";
import useContentFetching from "./useContentFetching";
import VideoContnet from "../videocontent/videocontent";
import { url } from "inspector";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const [clickcontent, setClickContent] = useState<string | null | number>(null)
    const hasMounted = useRef(false);
    const naviaget = useNavigate()

    const { loading: thumbnailLoading, thumbnail, error: thumbnailError, fetchThumbanail } = useThumbnailFetching();
    const { loading: contentLoading, content, error: contentError, contentFetching } = useContentFetching();

    useEffect(() => {
        if (!hasMounted.current) {
            const { loading: thumbnailLoading, thumbnail, error: thumbnailError } = fetchThumbanail()
            hasMounted.current = true
            return
        }
        else {
            contentFetching()
        }


    }, [clickcontent])



    if (thumbnailError) return <div className=" text-white text-5xl text-center my-20">Error occured while fetching data ⚠️</div>

    return (
        <div className="min-h-screen">
    {thumbnailLoading ? (
        <div className="text-white text-5xl">loading....</div>
    ) : (
        <div className="flex px-4 w-full gap-x-4 flex-wrap justify-center">
            {Array.isArray(thumbnail) && thumbnail.map((item, index) => (
            
                <div
                    key={index}
                    className=" rounded mt-2 flex-grow-1"
                     // Adjust as needed
                    
                >
                 
                
                         
                    <div
                        className="text-white my-2 overflow-hidden text-center p-5 bg-[#100c0c] rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110"
                        onClick={() => {
                            console.log("video content rendering ......");

                            naviaget("/videocontent", { state: { "imageUrl": item.Key } });
                        }}
                    >
                        <img
                            className="max-h-[300px] max-w-full  md:max-w-[300px] lg:max-w-[300px] border-2 w-full object-cover mx-auto rounded-lg"
                            src={item.Key}
                            alt=""
                        />
                        <span className="mt-5"> complete web development + devops course</span>
                    </div>
                </div>
            ))}
        </div>
    )}
</div>

    )
}