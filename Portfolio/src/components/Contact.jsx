import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Contact = () => {
  const Linkedin='https://www.linkedin.com/in/anand563/';
  const GitHub='https://github.com/AnandKushwaha814';
  const Instagram='https://www.instagram.com/codwithfun/';
  const Twitter='https://x.com/techyanand1';
  const Portfolio='https://github.com/AnandKushwaha814';

  return (
    <>
      <h2 className="text-4xl md:text-6xl font-bold text-center p-4">
        Contact <span className="text-cyan-400">Us</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4">
        <div className="flex flex-col items-center justify-center w-full md:w-[40%] m-10 p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-center text-2xl md:text-3xl gap-4 md:gap-8">
              <MdEmail size={30} />
              <span className="break-all">anandkushwaha122@gmail.com</span>
            </div>
            <div className="flex items-center text-2xl md:text-3xl gap-4 md:gap-8">
              <IoCall size={30} />
              <span>+91 6287545898</span>
            </div>
            <div className="flex justify-center items-center text-3xl py-3 font-bold md:text-3xl gap-4 md:gap-8">
              <h1>Follow <span className="text-cyan-400">Us</span></h1>
            </div>
              <div className="flex items-center justify-evenly md:text-3xl md:gap-8 py-2">
                <a className="transition duration-500 ease-in-out hover:shadow-link-style hover:rounded py-2 px-2" href={Linkedin} target="_blank"><FaLinkedin size={35} /></a>
                <a className="transition duration-500 ease-in-out hover:shadow-link-style hover:rounded py-2 px-2" href={GitHub} target="_blank"><ImGithub size={35} /></a>
                <a className="transition duration-500 ease-in-out hover:shadow-link-style hover:rounded py-2 px-2" href={Instagram} target="_blank"><FaInstagram size={35} /></a>
                <a className="transition duration-500 ease-in-out hover:shadow-link-style hover:rounded py-2 px-2" href={Twitter} target="_blank"><IoLogoTwitter size={35} /></a>
                <a className="transition duration-500 ease-in-out hover:shadow-link-style hover:rounded py-2 px-2" href={Portfolio} target="_blank"><CgProfile size={35} /></a>
              </div>
          </div>
        </div>

        <div className="flex items-center w-full md:w-[60%] justify-center mt-8 md:mt-0 order-1 md:order-2">
          <form className="space-y-4 w-full max-w-lg">
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full p-4 bg-gray-700 text-white font-semibold rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-full p-4 bg-gray-700 text-white font-semibold rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter Your Subject"
              required
              className="w-full p-4 bg-gray-700 text-white font-semibold rounded-md focus:outline-none"
            />
            <textarea
              cols={50}
              rows={5}
              placeholder="Enter Your Message"
              required
              className="w-full p-4 bg-gray-700 text-white font-semibold rounded-md resize-none focus:outline-none"
            ></textarea>
            <button className="bg-cyan-400 text-black font-semibold rounded-full px-8 py-4 mt-4 hover:shadow-cyan transition-all cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
