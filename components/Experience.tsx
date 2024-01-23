import React from "react";
import userData from "@/constants/data";
import {MdOutlineWork} from "react-icons/md";

export default function Experience() {
    return (
        <section id="experience" className="bg-gray-900 pb-10">
            <div className="flex flex-row max-w-6xl mx-auto place-content-center lg:place-content-start">
                <MdOutlineWork size={64} color={"white"} className={"self-center me-6"} />
                <h1 className="text-4xl md:text-8xl self-center font-bold pt-8 pb-4">
                    Experience
                </h1>
            </div>
            <div className="lg:mt-4">
                <div className="grid grid-cols-1 bg-gray-900 max-w-xl mx-auto sm:pt-3 lg:pt-10">
                    {/* Experience card */}
                    {userData.experience.map((exp, idx) => (
                        <>
                            <ExperienceCard
                                key={exp.year}
                                title={exp.title}
                                desc={exp.desc}
                                year={exp.year}
                                company={exp.company}
                                companyLink={exp.companyLink}
                            />
                            {idx === userData.experience.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
                                    </div>
                                    <div className="w-1 h-24 bg-gray-500 rounded-full -mt-12 lg:-mt-2"></div>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ExperienceCardProps {
    title: string;
    desc: string;
    year: string;
    company: string;
    companyLink: string;
}

const ExperienceCard = ({ title, desc, year, company, companyLink }: ExperienceCardProps) => {
    return (
        <div className={"flex flex-col"}>
            <h1 className="text-4xl font-bold text-center lg:text-start sm:mb-2">
                {year}
            </h1>
            <div className="experience-card border p-4 rounded-md shadow-xl bg-gray-800 z-10 mx-4">
                <h1 className="font-semibold text-xl">{title}</h1>
                <a href={companyLink} className="text-gray-200" target={"_blank"}>
                    {company}
                </a>
                <p className="text-gray-200 my-2 whitespace-pre-line">{desc}</p>
            </div>
        </div>
    );
};
