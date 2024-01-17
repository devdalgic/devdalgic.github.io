import React from "react";
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";

export default function Hero() {
    const animationDuration = Math.floor(200);
    const animationDelay = 500
    const strokeWidth = 0.7
    const iterations = 5
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    return (
        <div className="flex flex-row justify-center items-start overflow-hidden">
            {/* Text container */}

            <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                <RoughNotationGroup show={true}>
                    <RoughNotation
                        type="underline"
                        multiline={true}
                        padding={[0, 2]}
                        iterations={iterations}
                        animationDelay={animationDelay}
                        animationDuration={animationDuration}
                        color={colors[3]}
                        strokeWidth={strokeWidth}
                        >
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                            Engineer.
                        </h1>
                    </RoughNotation>
                    <RoughNotation
                        type="underline"
                        multiline={true}
                        padding={[0, 2]}
                        iterations={iterations}
                        animationDelay={animationDelay}
                        animationDuration={animationDuration}
                        color={colors[3]}
                        strokeWidth={strokeWidth}
                    >
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                            Developer.
                        </h1>
                    </RoughNotation>
                    <RoughNotation
                        type="underline"
                        multiline={true}
                        padding={[0, 5]}
                        iterations={iterations}
                        animationDelay={animationDelay}
                        animationDuration={animationDuration}
                        color={colors[3]}
                        strokeWidth={strokeWidth}
                    >
                        <h1 className="text-4xl md:text-8xl font-bold text-gray-200 my-2">
                            Programmer.
                        </h1>
                    </RoughNotation>
                    {/*<RoughNotation*/}
                    {/*    type="highlight"*/}
                    {/*    multiline={true}*/}
                    {/*    padding={[0, 2]}*/}
                    {/*    iterations={1}*/}
                    {/*    animationDuration={animationDuration}*/}
                    {/*    color={colors[3]}*/}
                    {/*>*/}
                    {/*    <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">*/}
                    {/*        Youtuber.*/}
                    {/*    </h1>*/}
                    {/*</RoughNotation>*/}
                </RoughNotationGroup>
            </div>
            {/* Image container */}
            <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
                <div className="w-3/4 ">
                    <img src={"/dd.jpeg"} alt="avatar" className=" shadow rounded-2xl" width={320} />
                </div>
            </div>
        </div>
    );
}
