import React from 'react'
import house from '../IMAGES/Mask picture.png'

const Service = () => {
  return (
    <div className="">
        <h1 className='font-bold text-4xl m-auto flex justify-center items-center'>Why Choose Us</h1>
    <div className='flex flex-col  lg:flex-row md:flex-row sm:flex-row mt-5'>
        <div className=" ml- lg:ml-5 md:ml-5 sm:ml-5">
        <img
        src={house}
        className=''
        />
        </div>
        <div className=" ml-3 mt-5 lg:ml-10 md:ml-10 sm:ml-10">
            <h1 className='font-bold text-4xl'>
            We Help You To Find <br/> Your Dream Home
            </h1>
            <p className='mt-10 text-xl'>
            From cozy cottages to luxurious estates, our <br/> dedicated team 
            guides you through every step of the <br/> journey, ensuring your
             dream home becomes a reality
            </p>
            <div className=" mt-20 flex gap-10">
            <div className="">
            <span className='font-bold text-4xl'>8K+</span>
            <p>House Available</p>
            </div>

            <div className="">
            <span className='font-bold text-4xl'>8K+</span>
            <p>House Available</p>
            </div>

            <div className="">
            <span className='font-bold text-4xl'>8K+</span>
            <p>House Available</p>
            </div>
            
        </div>
        </div>
    </div>
    </div>
  )
}

export default Service
