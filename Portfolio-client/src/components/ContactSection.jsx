import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36">
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact Me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:bhuvaneshhj@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              bhuvaneshhj@gmail.com
            </a>
            <a
              href="tel:+916360209174"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              +91 6360209174
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <AiFillInstagram className="text-white text-2xl" />
            <AiFillGithub className="text-white text-2xl" />
            <AiFillLinkedin className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center">
            OR
          </h2>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
