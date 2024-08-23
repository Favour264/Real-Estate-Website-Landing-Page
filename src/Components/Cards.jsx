import React from 'react'
import { PiMapPinArea } from "react-icons/pi";
import { FaUserPen } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { FaHandshakeAngle } from "react-icons/fa6";


const Cards = () => {
  return (
    <div>
      <h1 className='text-2xl ml-5 flex m-auto justify-center items-center  font-bold pt-10'>Elevating Your Home Buying Experience with Expertise,
         Integrity and Unmatched Personalized Service</h1>

      <div className="Card flex flex-col lg:flex-row md:flex-row sm:flex-row  gap-10 ml-5">
        <div className="Card-body w-4/5 lg:w-1/5 md:w-1/5 sm:w-1/5  bg-[#DDC7BB] ml-5 mb-10 p-2 mt-5 rounded-2xl">
        <div className="w-1/6 ml-5 bg-white rounded-lg ">
        <PiMapPinArea 
        className= "size-10 px-2 py-2 "
        />
        </div> 
        <h1 className='font-bold text-xl mt-3 ml-5'>Expert Guidiance</h1>
        <p className='mt-5 ml-5 text-xl pb-5'>
        Benefit from our team's <br/> seasoned expertise for a <br/> smooth buying experience
        </p>
        </div>

        <div className="Card-body w-4/5 lg:w-1/5 md:w-1/5 sm:w-1/5  bg-[#DDC7BB] ml-5 mb-10 p-2 mt-5 rounded-2xl">
        <div className="w-1/6 ml-5 bg-white rounded-lg">
        <FaUserPen 
        className= "size-10 px-2 py-2 "
        />
        </div> 
        <h1 className='font-bold text-xl mt-3 ml-5'>Expert Guidiance</h1>
        <p className='mt-5 ml-5 text-xl pb-5'>
        Benefit from our team's <br/> seasoned expertise for a <br/> smooth buying experience
        </p>
        </div>

        <div className="Card-body w-4/5 lg:w-1/5 md:w-1/5 sm:w-1/5  bg-[#DDC7BB] ml-5 mb-10 p-2 mt-5 rounded-2xl">
        <div className="w-1/6 bg-white rounded-lg">
        <GiNotebook
        className= "size-10 px-2 py-2 "
        />
        </div> 
        <h1 className='font-bold text-xl mt-3 ml-5'>Expert Guidiance</h1>
        <p className='mt-5 ml-5 text-xl pb-5'>
        Benefit from our team's <br/> seasoned expertise for a <br/> smooth buying experience
        </p>
        </div>

        <div className="Card-body w-4/5 lg:w-1/5 md:w-1/5 sm:w-1/5  bg-[#DDC7BB] ml-5 mb-10 p-2 mt-5 rounded-2xl">
        <div className="w-1/6 bg-white rounded-lg">
        <FaHandshakeAngle
        className= "size-10 px-2 py-2 "
        />
        </div> 
        <h1 className='font-bold text-xl mt-3 ml-5'>Expert Guidiance</h1>
        <p className='mt-5 ml-5 text-xl pb-5'>
        Benefit from our team's <br/> seasoned expertise for a <br/> smooth buying experience
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default Cards
