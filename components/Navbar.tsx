"use client";

import React from "react";
import Link from "next/link";
import {FaDev, FaGithub, FaInstagram, FaLinkedinIn, FaMedium, FaThreads, FaXTwitter} from "react-icons/fa6";
import {SiBento} from "react-icons/si";
import userData from "@/constants/data";
import {useAptabase} from "@aptabase/react";

export default function Navbar() {
    const { trackEvent } = useAptabase();

    const handleRedirect = (url: string) => {
        trackEvent("visit", {url});
        // @ts-ignore
        window.open(userData.socialLinks[url] as string, "_blank");
    }

    return (
        <div className="w-full pt-6 px-4 flex flex-col lg:flex-row justify-around">
            <div className="flex flex-col items-center lg:items-start">
                <Link href="/">
                    <h1 className="font-semibold text-xl text-white">
                        Denizhan Dalgic
                    </h1>
                    <p className="text-base font-light text-gray-100">
                        {userData.designation}
                    </p>
                </Link>
            </div>
            {/*<div className="space-x-8 hidden md:block">*/}
            {/*    <ScrollLink*/}
            {/*        to="targetDiv" smooth={true} duration={500}*/}
            {/*        className={`text-base text-gray-600 dark:text-gray-300 font-normal cursor-pointer`}*/}
            {/*    >*/}
            {/*        About{" "}*/}
            {/*        <svg*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*            width="16"*/}
            {/*            height="16"*/}
            {/*            fill="currentColor"*/}
            {/*            className="bi bi-arrow-down inline-block h-3 w-3"*/}
            {/*            viewBox="0 0 16 16"*/}
            {/*        >*/}
            {/*            <path*/}
            {/*                fillRule="evenodd"*/}
            {/*                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"*/}
            {/*            />*/}
            {/*        </svg>*/}
            {/*    </ScrollLink>*/}
            {/*    <ScrollLink*/}
            {/*        href={"experience"}*/}
            {/*        to="targetDiv" smooth={true} duration={500}*/}
            {/*        className={`text-base text-gray-600 dark:text-gray-300 font-normal cursor-pointer`}*/}
            {/*    >*/}
            {/*        Experience{" "}*/}
            {/*        <svg*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*            width="16"*/}
            {/*            height="16"*/}
            {/*            fill="currentColor"*/}
            {/*            className="bi bi-arrow-down inline-block h-3 w-3"*/}
            {/*            viewBox="0 0 16 16"*/}
            {/*        >*/}
            {/*            <path*/}
            {/*                fillRule="evenodd"*/}
            {/*                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"*/}
            {/*            />*/}
            {/*        </svg>*/}
            {/*    </ScrollLink>*/}
            {/*    <ScrollLink*/}
            {/*        to="targetDiv" smooth={true} duration={500}*/}
            {/*        className={`text-base text-gray-600 dark:text-gray-300 font-normal cursor-pointer`}*/}
            {/*    >*/}
            {/*        Education{" "}*/}
            {/*        <svg*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*            width="16"*/}
            {/*            height="16"*/}
            {/*            fill="currentColor"*/}
            {/*            className="bi bi-arrow-down inline-block h-3 w-3"*/}
            {/*            viewBox="0 0 16 16"*/}
            {/*        >*/}
            {/*            <path*/}
            {/*                fillRule="evenodd"*/}
            {/*                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"*/}
            {/*            />*/}
            {/*        </svg>*/}
            {/*    </ScrollLink>*/}
            {/*    <ScrollLink*/}
            {/*        to="targetDiv" smooth={true} duration={500}*/}
            {/*        className={`text-base text-gray-600 dark:text-gray-300 font-normal cursor-pointer`}*/}
            {/*    >*/}
            {/*        Contact*/}
            {/*        <svg*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*            width="16"*/}
            {/*            height="16"*/}
            {/*            fill="currentColor"*/}
            {/*            className="bi bi-arrow-down inline-block h-3 w-3"*/}
            {/*            viewBox="0 0 16 16"*/}
            {/*        >*/}
            {/*            <path*/}
            {/*                fillRule="evenodd"*/}
            {/*                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"*/}
            {/*            />*/}
            {/*        </svg>*/}
            {/*    </ScrollLink>*/}
            {/*</div>*/}

            <div className="my-6 lg:my-0 place-content-center lg:place-content-end
            grid lg:grid-rows-1 lg:grid-cols-8 lg:gap-y-0 gap-x-12 grid-cols-4 grid-rows-2 gap-y-6">
                <button onClick={() => handleRedirect("linkedin")} className={"cursor-pointer hover:bg-gray-800 p-1 rounded-lg"}>
                    <FaLinkedinIn size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("github")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <FaGithub size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("medium")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <FaMedium size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("devto")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <FaDev size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("bento")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <SiBento size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("threads")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <FaThreads size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("twitter")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <FaXTwitter size={32} color={"white"}/>
                </button>
                <button onClick={() => handleRedirect("instagram")}
                        className="text-base font-normal text-gray-300 cursor-pointer hover:bg-gray-800 p-1 rounded-lg"
                >
                    <FaInstagram size={32} color={"white"}/>
                </button>
                {/*<button onClick={() => handleRedirect("telegram")}*/}
                {/*        className="text-base font-normal text-gray-600 dark:text-gray-300 cursor-pointer"*/}
                {/*>*/}
                {/*    <FaTelegramPlane size={24}/>*/}
                {/*</button>*/}
                {/*<a*/}
                {/*    href={""}*/}
                {/*    className="text-base font-normal text-gray-600 dark:text-gray-300"*/}
                {/*>*/}
                {/*    <FaYoutube size={24}/>*/}
                {/*</a>*/}
            </div>
        </div>
    );
}
