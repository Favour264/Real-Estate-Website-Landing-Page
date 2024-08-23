import React from 'react'
import { MdOutlineVerified } from "react-icons/md";

const Contact  = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="">
        <h1 className='font-bold text-2xl flex m-auto justify-center items-center '>
        Do You Have Any Questions?</h1>  <br/> <h1 className='flex font-bold text-2xl m-auto justify-center items-center text-[#2B1B12]'> Get Help From Us</h1>
        </div>
        <div className="flex">
        <div className="flex m-auto justify-center items-center mt-10">
        <MdOutlineVerified 
        className="size-10"
        />
        <span className='text-xl font-bold text-[#2B1B12]'> Chat with our live support team </span>
        </div>

        <div className="flex m-auto justify-center items-center mt-10">
        <MdOutlineVerified 
        className="size-10"
        />
        <span className='text-xl font-bold text-[#2B1B12]'>Browse our FAQ</span>
        </div>
        </div>
      </div>

      <div className="input-field mt-10 mb-10">
        <div className="flex m-auto justify-center items-center  gap-5">
          <input
          className='bg-[#DDC7BB] ml-3 rounded-lg w-[450px] p-4 placeholder:text-[#2B1B12] placeholder:text-xl'
          placeholder='Enter your email...'
          />
          <button className='bg-[#2B1B12] mr-5 p-4 w-[200px] text-white rounded-lg'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact 
