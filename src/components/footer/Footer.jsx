import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    // const listNavbar = [
    //     {name: 'Home', link:'#'},
    //     {name: 'Skills', link:'#skills'},
    //     {name: 'Experience', link:'#experience'},
    //     {name: 'Language', link:'#language'},
    //     {name: 'Projects', link:'#projects'},
        
    // ];
  return (
   <footer className='bg-gray-700 rounded-lg shadow'>
      <div className='w-full mx-auto max-w-screen-xl justify-center p-4 md:flex md:items-center md:justify-between  '>
        <span className='text-ms text-gray-200 flex flex-wrap items-center mt-3 sm:mt-0  justify-center sm:mb-4 '>
            2025 <a href='#' className='hover:underline sm:text-center'>Portfolio.</a>
        </span>
        <ul  className='flex flex-wrap items-center  text-sm font-medium text-gray-100 sm:mt-0 gap-[1rem] justify-center' >
        <li className='mt-3' >
          <a  className='hover:text-orange-400 me-4 md:me-6' href="https://www.facebook.com/hunzaj1?mibextid=ZbWKwL" target='blank'><FaFacebook size={24} /></a>
         
        </li>
        <li className='mt-3'  >
          <a  href="https://www.linkedin.com/in/hunza-talha-khan-1b8573311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target='blank' className='hover:text-orange-400 me-4 md:me-6'><FaLinkedin size={24}  /></a>
        
        </li>
        <li className='mt-3' >
         <a  className='hover:text-orange-400 me-4 md:me-6' href="https://github.com/HunzaTalha786" target='blank'><FaGithub size={24} /></a> 
         
        </li>
      </ul>
        {/* <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0'>
            {
                listNavbar.map((item, index) =>(
                    <a key={index} href={item.link} className='hover:text-orange-400 me-4 md:me-6'>
                        {item.name}
                    </a>
                ))
            }
        </ul> */}
      </div>
      {/* <div className=''>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          myemail@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/username
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/username
        </li>
      </ul>
      </div> */}
   </footer>
  )
}
