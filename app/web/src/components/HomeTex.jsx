import React from 'react';
import GoflashTitle from '../assets/GoflashTitle.png';

const HomeTex = () => {
  return (
    <div className="flex flex-col p-4 md:pt-12">
      <img 
        src={GoflashTitle} 
        alt="GoflashTitle" 
        className="GoflashTitle mb-4 w-full h-auto md:w-1/3 md:h-30 md:pl-10 -ml-2 pt-20" 
      />
      <p className="mb-2 md:text-lg text-sm sm:pl-4 sm:ml-7 ">Faciliter vos déplacements dans la Ville <br/> de Goma</p>
      <p className="mb-2 md:text-lg text-sm sm:pl-4 sm:ml-7">Nous Venons jusqu’à vous !</p>
      <p className="mb-2 md:text-lg text-sm sm:pl-4 sm:ml-7">
        Bienvenue sur notre plateforme ! <br/>
        Grâce à notre application, vous pouvez facilement localiser les taxis disponibles à proximité et commander instantanément,<br/>
        améliorant ainsi l'accessibilité et l'efficacité du transport urbain à Goma.
      </p>
    </div>
  );
}

export default HomeTex;
