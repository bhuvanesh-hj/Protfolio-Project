import React from "react";
import SkillsCard from "./SkillsCard";

const data = [
  {
    title: "ReactJs",
    value: 70,
  },
  {
    title: "NodeJS",
    value: 75,
  },
  {
    title: "Tailwind css",
    value: 50,
  },
  {
    title: "Bootstrap",
    value: 50,
  },
  {
    title: "MySQL",
    value: 50,
  },
  {
    title: "MongoDB",
    value: 50,
  },
  {
    title: "TypeScript",
    value: 30,
  },
];

const SkillsSection = () => {
  return (
    <div data-aos="fade-right"
     className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        {data.map((skill, i) => {
          return <SkillsCard key={i} text={skill.title} val={skill.value} />;
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
