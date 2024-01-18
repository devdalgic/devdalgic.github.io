import React from "react";
import userData from "@/constants/data";
import {FaTools} from "react-icons/fa";

export default function Skills() {

    return (
        <section className="bg-gray-800 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-row max-w-6xl mx-auto place-content-center lg:place-content-start">
                    <FaTools size={64} color={"white"} className={"self-center me-6"}/>
                    <h1 className="text-4xl lg:text-8xl self-center font-bold pb-4">
                        Skills
                    </h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:mt-10 gap-y-10">
                {userData.skills.map((skill: Skill, idx) => (
                    <SkillCard skill={skill} key={skill.name}/>
                ))}
            </div>
        </section>
    );
}

interface Skill {
    name: string;
    description: string;
}

interface SkillCardProps {
    skill: Skill;
}

const SkillCard = (skill: SkillCardProps ) => {
    return (
        <div className="github-repo">
            <h1 className="font-semibold text-xl text-gray-200">
                {skill.skill.name}
            </h1>
            <p className="text-base font-normal my-2 text-gray-500 whitespace-pre-line">
                {skill.skill.description}
            </p>
        </div>
    );
};
