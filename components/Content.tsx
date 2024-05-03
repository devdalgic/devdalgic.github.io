"use client";

import {FaMedium, FaSpotify, FaYoutube} from "react-icons/fa6";
import {SiApplepodcasts} from "react-icons/si";
import React from "react";
import {useAptabase} from "@aptabase/react";

export default function Content() {
    const { trackEvent } = useAptabase();

    const handleRedirect = (url: string) => {
        if(process.env.NODE_ENV !== "development") {
            trackEvent("visit", {url});
        } else {
            console.log("Ignored click event")
        }
        // @ts-ignore
        window.open(url, "_blank");
    }

    return (
        <div className="w-full flex flex-col lg:flex-row justify-center px-4">
            <button className="flex flex-col bg-[#B2071D] hover:bg-[#d40823] py-8 items-center px-4 w-full lg:w-1/4"
                    onClick={() => handleRedirect("https://www.youtube.com/channel/UCmlOv8tzf3mJGPe7FC6iQ9Q?sub_confirmation=1")}>
                <FaYoutube size={48} color={"white"}/>
                <h2 className={"mt-4"}>Youtube</h2>
            </button>
            <button className="flex flex-col bg-[#1DB954] hover:bg-[#23d963] py-8 items-center px-4 w-full lg:w-1/4"
                    onClick={() => handleRedirect("https://open.spotify.com/show/5ygKFoyPN0uS2BQXoJb42U")}>
                <FaSpotify size={48} color={"white"}/>
                <h2 className={"mt-4"}>Spotify</h2>
            </button>
            <button className="flex flex-col bg-[#872EC4] hover:bg-[#D56DFB] py-8 items-center px-4 w-full lg:w-1/4"
                    onClick={() => handleRedirect("https://podcasts.apple.com/tr/podcast/%C3%BCr%C3%BCn-odakl%C4%B1-m%C3%BChendis/id1738677621")}>
                <SiApplepodcasts size={48} color={"white"}/>
                <h2 className={"mt-4"}>Apple Podcasts</h2>
            </button>
            <button className="flex flex-col bg-[#111111] py-8 hover:bg-[#212121] items-center px-4 w-full lg:w-1/4"
                    onClick={() => handleRedirect("https://medium.com/@denizhandalgic")}>
                <FaMedium size={48} color={"white"}/>
                <h2 className={"mt-4"}>Medium</h2>
            </button>
        </div>
    )
}
