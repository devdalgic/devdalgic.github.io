import React from "react";

export default function Hero() {
    const animationDuration = Math.floor(200);
    const animationDelay = 500
    const strokeWidth = 0.7
    const iterations = 5
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    return (
        <div className="flex flex-col lg:flex-row items-center content-center pb-4 px-36">
            <div className="text-center lg:text-start lg:me-20">
                <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                    Engineer.
                </h1>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                    Developer.
                </h1>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                    Blogger.
                </h1>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                    Youtuber.
                </h1>
            </div>
            {/* Image container */}
            <div className="mt-4 g:mt-20">
                <img src={"/dd.webp"} alt="avatar" className="shadow rounded-2xl object-contain" />
            </div>
        </div>
    );
}
