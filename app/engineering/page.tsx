import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {FaLinkedinIn} from "react-icons/fa6";
import React from "react";
import Content from "@/components/Content";

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
              <h1 className={"text-center text-3xl"}>I create content about <span className={"font-bold"}>engineering</span> and <span className={"font-bold"}>technology</span>, particularly <span className={"font-bold"}>fintech.</span></h1>
          </div>
          <Content/>
          <div className="flex flex-col justify-center py-8">
              <h2 className={"text-center text-3xl"}>Want a collaboration? Contact me.</h2>
              <a className="flex flex-row justify-center cursor-pointer hover:bg-gray-800 p-1 rounded-lg mt-6"
                 href={"https://www.linkedin.com/in/denizhandalgic"} target={"_blank"}>
                  <FaLinkedinIn size={32} color={"white"}/>
                  <h3 className="self-center ms-4">LinkedIn</h3>
              </a>
          </div>
          <div className="flex m-auto"/>
          <Footer/>
      </main>
  )
}
