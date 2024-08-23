import React, { useState } from 'react';
import Logo from '../IMAGES/logo.png'
import house from '../IMAGES/bg.png'
import { FiSearch } from "react-icons/fi";
import { MdPerson } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
    <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200/20">
      <img src={Logo} className="h-10 w-20" alt="Logo" />
      <div className="flex md:hidden">
        <button id="hamburger" onClick={handleMenuToggle}>
          <img
            className={`toggle ${isMenuOpen ? 'hidden' : 'block'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="48"
            height="48"
            alt="Menu"
          />
          <img
            className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="48"
            height="48"
            alt="Close"
          />
        </button>
      </div>
      <div
        className={`toggle ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none`}
      >
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Home
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Products
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Pricing
        </a>
        <a
          href="#"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
        >
          Contact
        </a>
      </div>
      <div className="flex ml-[259px] ">
        <FiSearch  size='20'
        className='mt-3 '
        />
        
        <MdPerson size='20'
        className='mt-3 ml-5 '
        />
        <button className='bg-[#2B1B12] px-6 h-9 rounded-xl mt-2 ml-10 mb-5 text-white'>Sign Up</button>
       </div>
      <a
        href="#"
        className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded"
      >
        Create Account
      </a>
    </nav>

    <div className="">
    <div className="flex gap-20 p-5">
    <div className="ml-20 mt-[10rem]">
     <h1 className='font-bold text-4xl '>Find Your <br/> Dream Home</h1>
     <p className='text-2xl mt-5'>
     Explore our curated selection of exquisite <br/> properties meticulously tailored to your <br/> unique dream home vision
     </p>
     </div>
     <div className="">
     <img
     src={house}
     className=''
     />
     </div>
    </div>
    </div>

    </div>
  );
};

export default Navbar;

