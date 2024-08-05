import React from 'react'
import image from "../assets/image.png"

const AboutText = () => {
  return (
    <div className="md:flex md:flex-col ms:flex-row  justify-center items-center p-8 text-lg">
      <div className='md:flex gap-10 pb-10'>
        <div className='flex justify-center items-center w-96 h-60 bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out'> 
            <img src={image} alt="AbotImage" className="w-64 h-40 " />
        </div>
        <div className="flex justify-center items-center w-96 h-60 bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out">
            <p className="w-64 h-40  text-white">
              GoFlash une application web visant à 
              faciliter la commande de taxis en temps 
              réel dans la ville de Goma. Grâce à cette plateforme, les utilisateurs pourront localiser les taxis disponibles à proximité et effectuer une commande instantanée. 
            </p>
        </div>
      </div>
      <div className='md:flex  md:gap-10 '>  
        
      <div className="flex justify-center items-center w-96 h-60 bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out">
            <p className="w-64 h-40 text-white">Le projet Go-Flash représente une avancée significative pour le transport urbain à Goma, offrant une solution moderne et efficace pour la commande de taxis.</p>
        </div>
        <div className="flex justify-center items-center w-96 h-60 bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out">
            <p className="w-64 h-40  text-white"> Avec une attention particulière portée à l'expérience utilisateur et à la fiabilité du service, cette plateforme a le potentiel de devenir un outil indispensable pour les habitants de la ville.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutText

