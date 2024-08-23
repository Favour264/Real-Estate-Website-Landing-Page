import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const Board = () => {
  return (
    <div>
      
      <div className="bg-[#DDC7BB] w-5/6 flex flex-col lg:flex-row md:flex-row sm:flex-row m-auto justify-center items-center relative bottom-10 rounded-lg ">
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row ">
        <div className="bg-white w-[210px] rounded-lg gap-10 mb-5 mt-5 h-15 p-5 flex ml-5   text-red-900">
          <h1 className='ml-5 text-xl'>Location</h1>
          <span className='mt-2'>
          <IoLocationSharp
           />
          </span>
          </div>
          <div className="bg-white w-[210px] rounded-lg gap-10 mb-5 mt-5 h-15 p-5 flex ml-5   text-red-900">
          <h1 className='ml-5 text-xl'>Location</h1>
          <span className='mt-2'>
          <IoLocationSharp
           />
          </span>
          </div>
          <div className="bg-white w-[210px] rounded-lg gap-10 mb-5 mt-5 h-15 p-5 flex ml-5   text-red-900">
          <h1 className='ml-5 text-xl'>Location</h1>
          <span className='mt-2'>
          <IoLocationSharp
           />
          </span>
          </div>
        </div>
            <button className='bg-[#2B1B12] mb-5  text-white ml-8 p-5 rounded-lg'>Sign Up</button>
      </div>
    </div>
  )
}

export default Board
