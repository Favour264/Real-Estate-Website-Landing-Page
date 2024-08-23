import React from 'react'
import house from '../IMAGES/Group.png'
import { LuBedSingle } from "react-icons/lu";
import { FaTape } from "react-icons/fa6";

const Residence = () => {
  return (
    <div className=''>
      <div className="flex m-auto justify-center items-center ">
        <h1 className='font-bold m-auto text-4xl'>Our Popular Residence</h1>
      </div>
      <div className="flex gap-6 flex-col lg:flex-row md:flex-row sm:flex-row  mt-10">
      <div className="bg-[#DDC7BB] w-[350px] ml-2 lg:ml-10 md:ml-10 sm:ml-10 rounded-l-3xl rounded-r-3xl">
        <img
        className='rounded-l-3xl rounded-r-3xl'
        src={house}
        />
        <div className=""><h1 className='font-bold text-xl mt-5 ml-5'>San Francisco, California</h1></div>
        <div className="flex mt-5">
        <div className="flex text-xl">
          <span className='text-xl'>
            <LuBedSingle 
            className='bg-white ml-5 size-10'
             />
          </span>
          <span className='text-[#2B1B12] text-xl font-bold ml-5'>4 Rooms</span>
        </div>

        <div className="flex  text-xl">
          <span className='text-xl'>
          <FaTape
          className='bg-white ml-5 size-10'
          />
          </span>
          <span className='text-[#2B1B12] text-xl font-bold ml-3'>3,500 sq ft</span>
        </div>
        </div>

        <div className="mt-5 ml-5 flex gap-10 mb-10 pb-5">
          <button className='bg-[#2B1B12] text-white text-xl p-2 px-5 rounded-lg'>Sign Up</button>
          <h1 className='font-bold text-2xl text-[#2B1B12]'> $2,500,000</h1>
        </div>
      </div>

      <div className="bg-[#DDC7BB] w-[350px] ml-2 lg:ml-10 md:ml-10 sm:ml-10  rounded-l-3xl rounded-r-3xl">
        <img
        className='rounded-l-3xl rounded-r-3xl'
        src={house}
        />
        <div className=""><h1 className='font-bold text-xl mt-5 ml-5'>Beverly Hills, California</h1></div>
        <div className="flex mt-5">
        <div className="flex text-xl">
          <span className='text-xl'>
            <LuBedSingle 
            className='bg-white ml-5 size-10'
             />
          </span>
          <span className='text-[#2B1B12] text-xl font-bold ml-5'>4 Rooms</span>
        </div>

        <div className="flex text-xl">
          <span className='text-xl'>
          <FaTape
          className='bg-white ml-5 size-10'
          />
          </span>
          <span className='text-[#2B1B12] text-xl font-bold ml-3'>3,500 sq ft</span>
        </div>
        </div>

        <div className="mt-5 ml-5 flex gap-10 mb-10 pb-5">
          <button className='bg-[#2B1B12] text-white text-xl p-2 px-5 rounded-lg'>Sign Up</button>
          <h1 className='font-bold text-2xl text-[#2B1B12]'> $2,500,000</h1>
        </div>
      </div>

      <div className="bg-[#DDC7BB] w-[350px] ml-2 lg:ml-10 md:ml-10 sm:ml-10  rounded-l-3xl rounded-r-3xl">
        <img
        className='rounded-l-3xl rounded-r-3xl'
        src={house}
        />
        <div className=""><h1 className='font-bold text-xl mt-5 ml-5'>San Francisco, California</h1></div>
        <div className="flex mt-5">
        <div className="flex text-xl">
          <span className='text-xl'>
            <LuBedSingle 
            className='bg-white ml-5 size-10'
             />
          </span>
          <span className='text-[#2B1B12] text-xl font-bold ml-5'>4 Rooms</span>
        </div>

        <div className="flex text-xl">
          <span className='text-xl'>
          <FaTape
          className='bg-white ml-5 size-10'
          />
          </span>
          <span className='text-[#2B1B12] text-xl font-bold ml-3'>3,500 sq ft</span>
        </div>
        </div>

        <div className="mt-5 ml-5 flex gap-10 mb-10 pb-5">
          <button className='bg-[#2B1B12] text-white text-xl p-2 px-5 rounded-lg'>Sign Up</button>
          <h1 className='font-bold text-2xl text-[#2B1B12]'> $2,500,000</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Residence
