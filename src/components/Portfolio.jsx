import React, { useState } from "react";
import CarousalModal from "./CarousalModal";
import jobsadmin from "../assets/Projects/Jobs/adminthumbnail.jpeg";
import jobwebthumbnail from "../assets/Projects/Jobs/jobswebthumbnail.jpg";
import crmthumb from "../assets/Projects/CRM_Audit_Times/crmthumb.jpg";
import booksthumb from "../assets/Projects/Books/booksthumb.jpg";
import adminthumb from "../assets/Projects/Books/adminthumb.jpg";


const Portfolio = () => {

  const data = [
    { id: 1, name: 'C.R.M Audit Times', description: 'Streamline CRM operations with CRM Audit Times. Plan, execute, and checkout seamlessly. Tailored plans, integrated CRM systems, and efficient checkout processes drive productivity and enhance customer satisfaction.', thumbnail: crmthumb, project: 'crm' },

    { id: 2, name: 'Jobs', description: `Introducing our Jobs Platform with Resume Builder Feature: Streamline job searches and create professional resumes seamlessly. Explore opportunities, craft standout resumes, and land your dream job effortlessly. Elevate your career journey with us.`, thumbnail: jobwebthumbnail, project: 'jobs' },
    
    { id: 3, name: 'Jobs admin', description: 'Introducing our Jobs Admin Panel: Your centralized hub for efficient job management. Streamline recruitment processes, track applicants, and manage postings effortlessly. Enhance productivity and streamline HR operations today.', thumbnail: jobsadmin, project: 'jobsadmin' },
    
    { id: 4, name: 'Books', description: 'Welcome to our Online Bookstore! Explore a vast collection of books across genres. Enjoy convenient browsing, secure transactions, and fast delivery. Dive into a world of knowledge and adventure today!', thumbnail: booksthumb, project: 'books' },
    
    { id: 5, name: 'Books Admin', description: 'Introducing our Online Bookstore Admin Panel: Your control center for managing inventory, orders, and customer data. Streamline operations, track sales, and optimize your online bookstore with ease. Empower your team and drive success.', thumbnail: adminthumb, project: 'booksadmin' },
    
  ]

  const [open, setOpen] = useState(false);

  const [id, setId] = useState('')
  const [projectName , setProjectName] = useState('')
  const [projectDescription , setProjectDescription] = useState('')


  const toggleOpen = () => setOpen(!open)

  const handClick = (val, name ,description) => {
    setOpen(true)
    setId(val)
    setProjectName(name) 
    setProjectDescription(description)


  }

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-[5%]"
    >
      <CarousalModal open={open} handleClose={toggleOpen} project={id} projectName={projectName} projectDescription={projectDescription} />
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center" >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6 max-md:text-[.9rem]">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {data.map((value) => (
            <div onClick={() => handClick(value?.project , value?.name , value?.description)} key={value?.id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 cursor-pointer">
              <img
                src={value?.thumbnail}
                alt="projects"
                className="rounded-lg h-[10rem] w-full"

              />
              <div className="p-6 text-[.9rem]">
                <h1 className="font-[600] text-[1.2rem]">{value?.name}</h1>
                <h1 className="mt-4">{value?.description.slice(0,100)}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
