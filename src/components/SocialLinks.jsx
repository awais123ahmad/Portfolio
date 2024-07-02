import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-tr-md">
          <a href="https://www.linkedin.com/in/awaissahmad/" className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a href="https://github.com/awais123ahmad" className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a href="mailto:awaisahmadajk@gmail.com" className="flex justify-between items-center w-full text-white" target="_blank" rel="noreferrer">
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md">
          <a href={resume} className="flex justify-between items-center w-full text-white"  rel="noreferrer" download ='resume downloaded'>
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
