import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Enter your message"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <button
              type="submit"
              className="px-3 py-2 text-lg lg:text-2xl bg-purple-700 hover:bg-purple-600 border font-bold text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
  );
};

export default ContactForm;
