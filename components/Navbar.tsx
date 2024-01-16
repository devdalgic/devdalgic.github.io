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
        window.open(userData.socialLinks[url] as string, "_blank");
    }

    return (
        <div className="w-full pt-6 px-4 flex md:flex-row justify-around">
            <div className="flex flex-col">
                <Link href="/">
                    <h1 className="font-semibold text-xl text-gray-100">
                        Denizhan Dalgic
                    </h1>
                    <p className="text-base font-light text-gray-300">
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

            <div className="space-x-6 flex flex-row items-center">
                <button onClick={() => handleRedirect("linkedin")} className={"cursor-pointer"}>
                    <FaLinkedinIn size={24}/>
                </button>
                <button onClick={() => handleRedirect("github")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <FaGithub size={24}/>
                </button>
                <button onClick={() => handleRedirect("medium")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <FaMedium size={24}/>
                </button>
                <button onClick={() => handleRedirect("devto")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <FaDev size={24}/>
                </button>
                <button onClick={() => handleRedirect("bento")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <SiBento size={24}/>
                </button>
                <button onClick={() => handleRedirect("threadsn")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <FaThreads size={24}/>
                </button>
                <button onClick={() => handleRedirect("twitter")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <FaXTwitter size={24}/>
                </button>
                <button onClick={() => handleRedirect("instagram")}
                        className="text-base font-normal text-gray-300 cursor-pointer"
                >
                    <FaInstagram size={24}/>
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
