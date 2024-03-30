import {FaMedium, FaSpotify, FaYoutube} from "react-icons/fa6";
import {SiApplepodcasts} from "react-icons/si";
import React from "react";

export default function Content(){
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center px-4">
            <a className="flex flex-col bg-[#B2071D] hover:bg-[#d40823] py-8 items-center px-4 w-full lg:w-1/4"
               href={"https://www.youtube.com/@denizhandalgic"} target={"_blank"}>
                <FaYoutube size={48} color={"white"}/>
                <h2 className={"mt-4"}>Youtube</h2>
            </a>
            <a className="flex flex-col bg-[#1DB954] hover:bg-[#23d963] py-8 items-center px-4 w-full lg:w-1/4"
               href={"https://open.spotify.com/show/5ygKFoyPN0uS2BQXoJb42U"} target={"_blank"}>
                <FaSpotify size={48} color={"white"}/>
                <h2 className={"mt-4"}>Spotify</h2>
            </a>
            <a className="flex flex-col bg-[#872EC4] hover:bg-[#D56DFB] py-8 items-center px-4 w-full lg:w-1/4"
               href={"https://podcasts.apple.com/tr/podcast/%C3%BCr%C3%BCn-odakl%C4%B1-m%C3%BChendis/id1738677621"}
               target={"_blank"}>
                <SiApplepodcasts size={48} color={"white"}/>
                <h2 className={"mt-4"}>Apple Podcasts</h2>
            </a>
            <a className="flex flex-col bg-[#111111] py-8 hover:bg-[#212121] items-center px-4 w-full lg:w-1/4"
               href={"https://medium.com/@denizhandalgic"} target={"_blank"}>
                <FaMedium size={48} color={"white"} className={"content-center"}/>
                <h2 className={"mt-4"}>Medium</h2>
            </a>
        </div>
    )
}
