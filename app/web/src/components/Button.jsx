import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
   return (
      <div className="p-4">
         <Link to="/activities">
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 sm:ml-7 md:ml-11 ">
               Commander
            </button>
         </Link>
      </div>
   );
}

export default Button;