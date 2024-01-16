import React from "react";
import userData from "@/constants/data";
import {MdOutlineWork} from "react-icons/md";

export default function Experience() {
    return (
        <section id="experience" className="bg-gray-900 pb-10">
            <div className="flex flex-row max-w-6xl mx-auto">
                <MdOutlineWork size={64} color={"white"} className={"self-center me-6"} />
                <h1 className="text-4xl md:text-8xl font-bold pt-8 pb-4">
                    Experience
                </h1>
            </div>
            <div className="mt-4">
                <div className="grid grid-cols-1 bg-gray-900 max-w-xl mx-auto pt-10">
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
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                    </div>
                                    <div className="w-1 h-24 bg-gray-500 rounded-full -mt-2"></div>
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
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-gray-800 z-10 mx-4">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl font-bold">
                {year}
            </h1>
            <h1 className="font-semibold text-xl">{title}</h1>
            <a href={companyLink} className="text-gray-500">
                {company}
            </a>
            <p className="text-gray-400 my-2 whitespace-pre-line">{desc}</p>
        </div>
    );
};
