import React from "react";
import userData from "@/constants/data";
import {HiAcademicCap} from "react-icons/hi2";

export default function Education() {
    return (
        <section className="bg-gray-800 py-10">
            <div className="flex flex-row max-w-6xl mx-auto place-content-center lg:place-content-start">
                <HiAcademicCap size={64} color={"white"} className={"self-center me-6"}/>
                <h1 className="text-4xl md:text-8xl self-center font-bold pb-4">
                    Education
                </h1>
            </div>
            <div className="lg:mt-4">
                <div className="grid grid-cols-1 max-w-xl mx-auto sm:pt-3 lg:pt-10">
                    {/* Experience card */}
                    {userData.education.map((exp, idx) => (
                        <>
                            <EducationCard
                                key={exp.year}
                                title={exp.title}
                                institute={exp.institute}
                                year={exp.year}
                                company={exp.year}
                                instituteLink={exp.instituteLink}
                            />
                            {idx === userData.education.length - 1 ? null : (
                                <div className="divider-container flex flex-col items-center -mt-2">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
                                        <div
                                            className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
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

interface EducationCardProps {
    title: string;
    institute: string;
    year: string;
    company: string;
    instituteLink: string;
}

const EducationCard = ({title, institute, year, company, instituteLink}: EducationCardProps) => {
    return (
        <div className={"flex flex-col"}>
            <h1 className="text-4xl font-bold text-center lg:text-start sm:mb-2">
                {year}
            </h1>
            <div className="experience-card border p-4 rounded-md shadow-xl bg-gray-900 z-10 mx-4">
                <h1 className="font-semibold text-xl">{title}</h1>
                <a href={instituteLink} className="text-gray-200">
                    {company}
                </a>
                <p className="text-gray-200 my-2">{institute}</p>
            </div>
        </div>
    );
};
