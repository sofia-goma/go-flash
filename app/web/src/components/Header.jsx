
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Profile from '../assets/Profile.png';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <nav className={`sticky top-0 left-0 w-full bg-[#070707] flex flex-col md:flex-row items-center  md:h-13 p-6  ${isMenuOpen ? 'h-60' : 'h-25'} transition-all duration-500`}>
         <div className="flex items-center w-full md:w-auto">

            <button
               className="md:hidden text-[#f3f8f8] focus:outline-none mr-4"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
            </button>


            <div className="flex-grow flex justify-center  md:justify-end sm:pl-3 sm:pr-96 s">
               <Link to="/"><img src={Logo} alt="Logo" className="h-10 md:w-90 md:ml-8" /></Link>
            </div>

            <ul
               className={`flex flex-grow absolute md:relative top-16 md:pl-12 md:-ml-60 md:top-auto left-0 md:left-auto  gap-x-20 w-full md:w-auto bg-[#070707] md:bg-transparent flex-col md:flex-row items-center md:justify-center mt-2 md:mt-0 space-y-4 md:space-y-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible md:opacity-100 md:translate-y-0 md:visible'}`}
            >
               <li>
                  <Link to="/" className="text-[#f3f8f8] hover:underline md:pl-9 md:ml-40 md:pr-1" >Home</Link>
               </li>
               <li>
                  <Link to="/about" className="text-[#f3f8f8] hover:underline md:pr-1">About</Link>
               </li>
               <li>
                  <Link to="/services" className="text-[#f3f8f8] hover:underline md:pr-1">Services</Link>
               </li>
               <li>
                  <Link to="/activities" className="text-[#f3f8f8] hover:underline md:pr-1">Activities</Link>
               </li>
            </ul>
            <div className="flex-shrink-0 ml-auto">
               <Link to="/login">
                  <img src={Profile} alt="Profile" className="h-8 md:h-10 md:pl-32" />
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Header;