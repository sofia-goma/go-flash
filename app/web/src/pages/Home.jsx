import React from 'react';
import HomeTex from '../components/HomeTex';
import Bouton from '../components/Button';
import homeBackground from '../assets/homeBackground.png';
import Sercices from './Services';
import About from './About';
const Home = () => {
   return (
      <>
         <div

            className="home-container bg-cover bg-center min-h-screen overflow-y-auto bg-red-200" // Ajout de overflow-y-auto pour le défilement vertical
            style={{ backgroundImage: `url(${homeBackground})`, backgroundPosition: '10% 3%' }}
         >
            <HomeTex />
            <Bouton />
         </div>

         <About />
         <Sercices />
      </>
   );
};
export default Home;