// import React from 'react'
import Mtd5 from "../assets/Mdt5.png";
import LMB from "../assets/logo-monitor-2023-blanco.png";
import { motion } from 'framer-motion';
const codGen = () => {
  return (
<div className="bg-black min-h-screen flex flex-col justify-center items-center">
  <div className="max-w-xs w-96 sm:max-w-md relative ">
    <div className="bg-zinc-700 p-3 rounded-lg shadow-lg relative">
      <div className="relative">
        <img
          className="mx-auto"
          src={Mtd5}
          alt="Imagen Principal"
        />
        <span className="absolute top-0 left-0 right-0 bg-transparent text-amber-400 px-2 py-12 sm:py-15 text-lg sm:text-6xl text-center z-10 text-shadow font-bold"
        style={{color: '#E67E22', fontSize: '2rem'}}>TU CÓDIGO ES: MONITHORHE</span>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-16">
          <a href={import.meta.env.VITE_REDIRECT_URL} rel="noopener noreferrer" className="inline-block">
            <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}  
            className="bg-red-500 text-white px-30 py-2 rounded-md mx-auto" style={{ width: '200px' }}>Reserva tu hotel</motion.button>
          </a>
        </div>

      </div>
      
    </div>
    <img
      className="mt-4 mx-auto self-center w-5/12 " // Añade las clases mx-auto y self-center para centrar la imagen horizontal y verticalmente
      src={LMB}
      alt="Otra Imagen"
    />

  </div>
</div>


  )
}

export default codGen
