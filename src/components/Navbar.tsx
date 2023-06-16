import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const falseMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <div className="flex flex-row  justify-center z-20  items-center">
    <div
      className={`container top-2 absolute z-10 flex flex-row items-center justify-between mx-auto font-bold drop-shadow-lg bg-indigo-1000 rounded-lg`}
    >

      <div className="relative flex items-center flex-shrink-0  mr-6 bg">
        <Link className="text-xl sm:text-4xl ml-8  bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text  text-transparent" to="/coinworld">
          COIN<span className="text-blue-500">world</span>
        </Link>
      </div>

      { (location.pathname).length < 12 && 
      <>
        <button
        type="button"
        onClick={toggleMenu}
        className="block md:hidden focus:outline-none mr-8 text-slate-100 hover:text-red-400 transition-colors "
        >

          <GiHamburgerMenu size={30} />

        </button>

      <div
        className={`${
          isMenuOpen ? 'absolute top-9 ' : 'hidden'
        } w-full flex justify-center items-center md:block md:w-auto `}
        id="navbar-default"
      >
        <ul className="w-96 sm:w-auto bg-indigo-1000 rounded-md text-center text-slate-100 font-medium flex flex-col p-4 md:p-0 mt-4 borderrounded-lg  md:text-sm lg:text-2xl md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a
              href="#home"
              className="block py-2 pl-3 pr-4 transition-colors  hover:text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text"
              onClick={falseMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#market"
              className="block  py-2 pl-3 pr-4 transition-colors  hover:text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text "
              onClick={falseMenu}
            >
              Market
            </a>
          </li>
          <li>
            <a
              href="#choose"
              className="block py-2 pl-3 pr-4 transition-colors  hover:text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text "
              onClick={falseMenu}
            >
              Choose Us
            </a>
          </li>
          <li>
            <a
              href="#join"
              className="block py-2 pl-3 pr-4 transition-colors  hover:text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text "
              onClick={falseMenu}
            >
              Join
            </a>
          </li>
        </ul>
      </div> 
      </>
      }

      
      {
     
      <div className="hidden sm:flex">
        <span className='cursor-pointer mx-4 transition-colors text-white hover:text-blue-400'>
          <BsDiscord size="25"/>
        </span>     
        <span className=' cursor-pointer mx-4 transition-colors text-white hover:text-red-400 '>
          <BsTwitter size="25"/>
        </span>
      </div>
      }
    </div>
  </div>
  );
}
