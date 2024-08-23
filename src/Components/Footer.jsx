import React from 'react'
import LOGO from '../IMAGES/logo.png'
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#DDC7BB] '>
      <div className="p-10 ml-20 lg:ml-0 md:ml-0 sm:ml-0 flex flex-col  lg:flex-row md:flex-row sm:flex-row gap-[100px]">
        <div className="">
        <img
        src={LOGO}
        className=' w-[100px] '
        />
        <h1 className='mt-5 text-xl'>
        Bringing you closer to <br/> your dream home, one <br/> click at a time.
        </h1>
        </div>
        <div className="flex flex-col ml-5 gap-5 font-bold text-[#2B1B12]">
            <span><h1 className='font-bold text-2xl'>About</h1></span>
            <span>Our story</span> 
            <span>Careers</span> 
            <span>Our Team</span>  
            <span>Resources</span> 
        </div>

        <div className="flex flex-col ml-5 gap-5 font-bold text-[#2B1B12]">
            <span><h1 className='font-bold text-2xl'>Services</h1></span>
            <span>FAQ</span> 
            <span>Contact Us</span> 
            <span>Help Center</span>  
            <span>Terms of Service</span> 
        </div>

        <div className="flex flex-col ml-5 gap-5 font-bold text-[#2B1B12]">
            <span><h1 className='font-bold text-2xl'>Find Us</h1></span>
            <span>Events</span> 
            <span>Location</span> 
            <span>News Letters</span>  
        </div>

        <div className="flex flex-col ml-5 gap-5 font-bold text-[#2B1B12]">
            <span><h1 className='font-bold text-2xl'>Socials</h1></span>
            <span className='flex'>
              <span><FaInstagram
              className='size-10'
              />
              </span>Instagram
              </span> 
            <span>
              <span> <RiFacebookBoxLine 
              className='size-10'
              /></span>Facebook
              </span> 
            <span className='flex'>
              <span><BsTwitterX 
              className='size-8'
              />
              </span>Twitters
              </span>  
        </div>
      </div>
    </div>
  )
}

export default Footer
