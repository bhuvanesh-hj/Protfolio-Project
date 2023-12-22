import React from "react";

import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectCard = ({project,git,desc,title}) => {
  return (
    <div className="p-4 -m-4">
      <div className="h-fit w-[300px] md:w-[320px] border-2 border-gray-300 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img
            src={project}
            alt="My-Project"
            className="h-[200px] lg:h-50 w-full object-cover object-center"
          />
        </a>
      <div className="p-4 flex flex-col gap-1 lg:gap-3">
          <h2 className='tracking-widest text-2xl text-white'>{title}</h2>
        <h1 className="text-lg lg:text-xl font-bold text-gray-400">
          {desc}
        </h1>
        <div className="flex items-center justify-between">
          <a href={git}>
            <FaGithub className='inline-flex text-purple-600 font-bold items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-400 cursor-pointer'/>
          </a>
          <a href="#">
            <RiSignalTowerFill className='inline-flex text-purple-600 font-bold items-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-purple-400 cursor-pointer'/>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
