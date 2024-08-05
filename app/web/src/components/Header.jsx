import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import Profile from '../assets/Profile.png';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [dropdownVisible, setDropdownVisible] = useState(false);

   const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
   };

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
               <Link to="/app"><img src={Logo} alt="Logo" className="h-10 md:w-90 md:ml-8" /></Link>
            </div>

            <ul
               className={`flex flex-grow absolute md:relative top-16 md:pl-12 md:-ml-60 md:top-auto left-0 md:left-auto  gap-x-20 w-full md:w-auto bg-[#070707] md:bg-transparent flex-col md:flex-row items-center md:justify-center mt-2 md:mt-0 space-y-4 md:space-y-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible md:opacity-100 md:translate-y-0 md:visible'}`}
            >
               <li>
                  <Link to="/app" className="text-[#f3f8f8] hover:underline md:pl-9 md:ml-40 md:pr-1" >Home</Link>
               </li>
               <li>
                  <Link to="/app/about" className="text-[#f3f8f8] hover:underline md:pr-1">About</Link>
               </li>
               <li>
                  <Link to="/app/services" className="text-[#f3f8f8] hover:underline md:pr-1">Services</Link>
               </li>
               <li>
                  <Link to="/app/activities" className="text-[#f3f8f8] hover:underline md:pr-1">Activities</Link>
               </li>
            </ul>

            {/* profile */}

            <div className="relative flex-shrink-0 ml-auto">
               <button onClick={toggleDropdown} className='bg-transparent'>
                  <img src={Profile} alt="Profile" className="h-8 md:h-10 md:pl-32" />
               </button>
               {dropdownVisible && (
                  <div className="absolute right-0 mt-8 w-48 z-10">
                     {/*  */}
                     <div class="z-50 my-4 text-base list-none bg-slate-950 text-white divide-y divide-gray-100 rounded shadow">
                        <div class="px-4 py-3" role="none">
                           <p class="text-sm">
                              Mackson 6
                           </p>
                           <p class="text-sm font-medium truncate">
                              mackson6@github.org
                           </p>
                        </div>

                     </div>
                     <ul class="py-1" role="none">
                        <li className='text-center hover:bg-black hover:text-white hover:opacity-50'>
                           <a href="#" class="block px-4 py-2 text-sm">DELETE ACCOUNT</a>
                        </li>
                        <li className='text-center hover:bg-black hover:opacity-50 hover:text-white'>
                           <a href="#" class="block px-4 py-2 text-sm">LOGOUT</a>
                        </li>
                     </ul>

                     {/* </div> */}


                  </div>
               )
               }
            </div >

            {/* profile */}
         </div >
      </nav >
   );
};

export default Header;