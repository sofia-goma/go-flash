import React from 'react';
import { Link } from 'react-router-dom';

const ServiceText = () => {
  return (
    <div className='md:flex md:items-center md:justify-center pl-10 gap-10 pt-7 '>
      <div className='flex flex-col gap-10 pt-10'>
        <div className='flex justify-center items-center text-white bg-black bg-opacity-50 h-96 w-64 p-9 hover:bg-opacity-75 transition duration-300 ease-in-out'>
          <p>Commander un taxi en temps réel dans la ville de Goma</p>
        </div>
        <Link to ='/activities'>
          <button className='bg-black w-64  text-white py-2 px-4 rounded hover:bg-gray-800'>Commander</button>
        </Link>
      </div>
      <div className='flex flex-col pt-10  gap-10'>
        <div className='flex justify-center items-center text-white bg-black bg-opacity-50 h-96 w-64 p-9 hover:bg-opacity-75 transition duration-300 ease-in-out'>
          <p>Effectuer une réservation à l'avance pour plusieurs jours</p>
        </div>
        <Link to = '/activities'>
          <button className='bg-black w-64  text-white py-2 px-4 rounded hover:bg-gray-800 hover:bg-opacity-75 transition duration-300 ease-in-out'>Commander</button>
        </Link>
      </div>
      <div className='flex flex-col gap-10 pt-10'>
        <div className='flex justify-center items-center  text-white bg-black bg-opacity-50 h-96 w-64 p-9 gap-10 hover:bg-opacity-75 transition duration-300 ease-in-out'>
          <p>Autres Services</p>
        </div>
        <Link to = '/activities'>
          <button className='bg-black w-64  text-white  py-2 px-4 rounded hover:bg-gray-800'>Commander</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceText;

