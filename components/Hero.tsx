import React from "react";
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";

export default function Hero() {
    const animationDuration = Math.floor(200);
    const animationDelay = 500
    const strokeWidth = 0.7
    const iterations = 5
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    return (
        <div className="flex flex-col lg:flex-row items-center content-center pb-4 px-36">
            <div className="text-center lg:text-start lg:me-20">
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
            <div className="mt-4 g:mt-20">
                <img src={"/dd.JPG"} alt="avatar" className="shadow rounded-2xl object-contain" />
            </div>
        </div>
    );
}
