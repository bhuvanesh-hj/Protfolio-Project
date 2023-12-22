import React from "react";
import { useRef } from "react";

import ProjectCard from "./ProjectCard";

import shoppingCart from "../assets/shoppingCart.png";
import restaurant from "../assets/resturantApp.png";
import mailBox from "../assets/mailBox.png";
import expense from "../assets/expense.png";

import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

const projectsData = [
  {
    projectImage: expense,
    title: "EXPENSE TRACKER",
    des: "Developed an expense tracker app in which user can add, delete and update expense, Premium feature are also introduced to get dark mode and Download expenses, Utilize React.js library for creating this website, Redux for state management,GitHub for version control , Firebase for storing data and authentication",
    githubLink: "https://github.com/bhuvanesh-hj/Expense-Tracker-App",
  },
  {
    projectImage: shoppingCart,
    title: "E-COMMERCE WEBSITE",
    des: "An E-commerce application using React.js for front end,Context API for storing data and Firebase for authentication,React Router for page navigation , GitHub for version control, Firebase for authentication and deployment",
    githubLink:
      "https://github.com/bhuvanesh-hj/my-project/tree/master/shopping-cart",
  },
  {
    projectImage: mailBox,
    title: "MAIL BOX CLIENT",
    des: "I created a website for a mailbox client where registered users can receive and send mail to each other, Users can also check the number of unread messages they have, This application was developed using the React.js library for building the user interface, Redux for managing application state, GitHub for version control, and Firebase for storing data.",
    githubLink:
      "https://github.com/bhuvanesh-hj/my-project/tree/Email-Client-Box/email-client-box",
  },
  {
    projectImage: restaurant,
    title: "RESTAURANT WEB-PAGE",
    des: "A functional single page application with Restaurant menu, Cart and a beautiful landing page, Developed using ReactJS, various react hooks and context API were used to add the desired functionalities",
    githubLink:
      "https://github.com/bhuvanesh-hj/my-project/tree/master/Creating%20a%20restaurant%20app",
  },
];
const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollRight = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Projects</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scroll-hide gap-8 lg:p-3 scroll"
      >
        {projectsData.map((project) => {
          return <ProjectCard project={project.projectImage} git={project.githubLink} desc={project.des} title={project.title}/>;
        })}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <MdOutlineArrowBackIos
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-400 hidden lg:block lg:hover:scale-110"
        />
        <h2 className="gradient-text font-mono uppercase text-lg">
          Slide for more
        </h2>
        <MdArrowForwardIos
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-400 hidden lg:block lg:hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
