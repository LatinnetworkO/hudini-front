// import React from 'react'
import Mtd8 from "../assets/Mdt8.png";
import Mtd5 from "../assets/Mdt5.png";
const codGen = () => {
  return (
<div className="w-full flex flex-col sm:flex-row justify-center items-center bg-black">
  <div className="w-full sm:w-1/2 flex justify-center items-center bg-black bg-opacity-50 relative">
    <img src={Mtd8} alt="Imagen 1" className="object-fill max-h-screen w-full opacity-70" />
    <div className="absolute text-white text-8xl font-bold">
      <p className="text-yellow-500">su código es:</p>
      <p className="text-yellow-500">122346</p>
    </div>
    <div className="absolute bottom-0 mb-4">
      <a href="https://www.google.com" className="text-white text-3xl">Gracias por su registro</a>
    </div>
  </div>
  <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
    <img src={Mtd5} alt="Imagen 2" className="object-fill max-h-screen w-full" />
  </div>
</div>


  )
}

export default codGen
