import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {RoughNotation, RoughNotationGroup} from "react-rough-notation";
import {FaLinkedinIn, FaMedium, FaSpotify, FaYoutube} from "react-icons/fa6";
import React from "react";
import {SiApplepodcasts} from "react-icons/si";

export default function Page() {
    const animationDuration = Math.floor(200);
    const animationDelay = 500
    const strokeWidth = 0.7
    const iterations = 5
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
      <main className="flex min-h-screen flex-col">
          <Navbar/>
          <div className="flex flex-row mt-auto py-8 justify-center">
              <RoughNotationGroup show={true}>
                  <h1 className={"text-center text-3xl whitespace-pre-wrap"}>I create content about
                      {" "}</h1>
                  <RoughNotation
                      type="underline"
                      multiline={true}
                      padding={[0, 2]}
                      iterations={iterations}
                      animationDelay={animationDelay}
                      animationDuration={animationDuration}
                      color={colors[3]}
                      strokeWidth={strokeWidth}>
                      <h1 className={"text-center text-3xl"}>engineering</h1>
                  </RoughNotation>
                  <h1 className={"text-center text-3xl whitespace-pre-wrap"}>{" "}and{" "}</h1>
                  <RoughNotation
                      type="underline"
                      multiline={true}
                      padding={[0, 2]}
                      iterations={iterations}
                      animationDelay={animationDelay}
                      animationDuration={animationDuration}
                      color={colors[3]}
                      strokeWidth={strokeWidth}>
                      <h1 className={"text-center text-3xl"}>technology</h1>
                  </RoughNotation>
                  <h1 className={"text-center text-3xl whitespace-pre-wrap"}>, particularly{" "}</h1>
                  <RoughNotation
                      type="underline"
                      multiline={true}
                      padding={[0, 2]}
                      iterations={iterations}
                      animationDelay={animationDelay}
                      animationDuration={animationDuration}
                      color={colors[3]}
                      strokeWidth={strokeWidth}>
                      <h1 className={"text-center text-3xl"}> fintech.</h1>
                  </RoughNotation>
              </RoughNotationGroup>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-center px-4">
              <a className="flex flex-col bg-[#B2071D] hover:bg-[#d40823] py-8 items-center px-4"
              href={"https://www.youtube.com/@denizhandalgic"} target={"_blank"}>
                  <FaYoutube size={48} color={"white"}/>
                  <h2 className={"mt-4"}>Check it out on Youtube.</h2>
              </a>
              <a className="flex flex-col bg-[#1DB954] hover:bg-[#23d963] py-8 items-center px-4"
                 href={"https://open.spotify.com/show/5ygKFoyPN0uS2BQXoJb42U"} target={"_blank"}>
                  <FaSpotify size={48} color={"white"}/>
                  <h2 className={"mt-4"}>Check it out on Spotify.</h2>
              </a>
              <a className="flex flex-col bg-[#872EC4] hover:bg-[#D56DFB] py-8 items-center px-4"
                 href={"https://podcasts.apple.com/tr/podcast/%C3%BCr%C3%BCn-odakl%C4%B1-m%C3%BChendis/id1738677621"} target={"_blank"}>
                  <SiApplepodcasts size={48} color={"white"}/>
                  <h2 className={"mt-4"}>Check it out on Apple Podcasts.</h2>
              </a>
              <a className="flex flex-col bg-[#111111] py-8 hover:bg-[#212121] items-center px-4"
                 href={"https://medium.com/@denizhandalgic"} target={"_blank"}>
                  <FaMedium size={48} color={"white"} className={"content-center"}/>
                  <h2 className={"mt-4"}>Check it out on Medium.</h2>
              </a>
          </div>
          <div className="flex flex-col justify-center py-8">
              <h2 className={"text-center text-3xl"}>Want a collaboration? Contact me.</h2>
              <a className="flex flex-row justify-center cursor-pointer hover:bg-gray-800 p-1 rounded-lg mt-6"
                 href={"https://www.linkedin.com/in/denizhandalgic"} target={"_blank"}>
                  <FaLinkedinIn size={32} color={"white"}/>
                  <h3 className="self-center ms-4">LinkedIn</h3>
              </a>
          </div>
          <div className="flex m-auto" />
          <Footer/>
      </main>
  )
}
