import React from 'react'
import { FaGithub } from "react-icons/fa";

const HomeCard = () => {
  return (
    <div  className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lag:mb-36'>
        <div data-aos="fade-up-right" className='flex flex-col gap-5 lg:w-[50%]'>
          <div>
          <h1 className='text-5xl lg:text-7xl mb-10 gradient-text'>Hello, <span className='text-2xl lg:text-3xl'>my name is</span></h1>
          <h1 className='text-4xl lg:text-7xl text-gray-50'>BHUVANESH HJ</h1>
          </div>
            <p className='text-gray-300 text-xl lg:text-2xl'>I'm a full-stack developer specialised in frontend and backend development for scalable web apps.I have made a variety of Mern Stack Applications. Want to know how I may help your project? Check out my projects from my <a href="https://github.com/bhuvanesh-hj" className='font-mono underline' target='_blank'> GitHub Profile</a>.</p>
            <p className='text-gray-300 text-xl lg:text-2xl'>I love working on new and exciting technologies emerging nowadays. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow.</p>
            <a href="https://drive.google.com/file/d/1xhVAtlh3EZodn-5CMn7qG2BeoVQzN9XC/view?usp=sharing" target='_blank'><button className='px-3 py-2 text-lg lg:text-2xl bg-purple-700 hover:bg-purple-600 border font-bold text-white rounded-lg'>My Resume </button></a>
        </div>
        <div data-aos="fade-up-left">
          <div className="rounded-2xl h-[200px] w-[200px] lg:w-[400px] lg:h-[400px] mx-auto bg-image"></div>
        </div>
    </div>
  )
}

export default HomeCard