import { motion } from "framer-motion"
import React, { useState } from 'react';
import axios from 'axios';
import Mdt6 from './assets/Mdt6.png'
import Mdt7 from './assets/Mdt7.png'
import proximo from './assets/chevron-derecho.png'
import CodeGen from './components/codGen.tsx'

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    email: '',
    telefono: '',
    direccion: ''
  });
    
  console.log(import.meta.env.VITE_FORM_URL)
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const config = {
      headers: {
        Authorization: import.meta.env.VITE_TOKEN
      }
    };
    try {
    axios.post(import.meta.env.VITE_FORM_URL, formData, config)
    // axios.post('http://localhost:3002/form/', formData,config)
    .then(() => {
      setShowFirstDiv(false);
      setShowSecondDiv(true);
    })
    .catch(error => {
      console.error('Server error', error);
    });
    } catch (error) {
      
    }

  };
  return ( 
    <div>
      {/* primer div */}
      {showFirstDiv && (
      <div>
      <div className="flex flex-col lg:flex-row">
    {/* Para pantallas pequeñas */}
    <div className="lg:hidden flex flex-col h-screen">
<img src={Mdt7} alt="Imagen pequeña" className="w-full object-cover max-h-screen" />

<div className="bg-zinc-950 p-4 flex justify-center flex-grow  ">
  <div className="p-6 lg:w-3/4 rounded-lg shadow-gray-200 shadow-lg bg-zinc-700 mb-20">
    <div className="mb-4 text-red-700 text-2xl font-bold">Registrarse</div>

    <div className="h-1 w-full flex mb-20">
      <div className="w-1/2 bg-red-700"></div>
      <div className="w-1/2 bg-gray-400"></div>
    </div>
    
    <form className="space-y-5" action="#" method="POST" onSubmit={handleSubmit}>
      <div className="w-full border border-gray-400 p-1 px-4 flex items-center border-2">
        <label htmlFor="text" className="text-sm font-medium leading-6 text-white flex items-center">Nombre</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-6" />
        <div className="ml-2">
          <motion.input 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}            
            type="text" 
            id="nombre"
            name="nombre"
            autoComplete="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border-0 py-1.4 text-white shadow-sm ring-int placeholder:text-gray-400   sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>
      
      {/* //cambio cedula  */}
      <div className="w-full border border-gray-400 p-1 px-4 flex items-center border-2">
        <label htmlFor="text" className="text-sm font-medium leading-6 text-white flex items-center">Cédula</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-6" />
        <div className="ml-2">
          <motion.input 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}            
            type="text" 
            id="cedula"
            name="cedula"
            autoComplete="cedula"
            required
            value={formData.cedula}
            onChange={handleChange}
            className="w-full border-0 py-1.4 text-white shadow-sm ring-int placeholder:text-gray-400   sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>

      <div className="w-full border border-gray-400 p-1 flex items-center border-2 px-5 ">
        <label htmlFor="email" className="text-sm font-medium leading-6 text-white flex items-center">Email</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-9" />
        <div className="ml-2">
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full  border-0 py-1.4 text-white shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>

      <div className="w-full border border-gray-400 p-1 flex items-center border-2">
        <label htmlFor="telefono" className="text-sm font-medium leading-6 text-white px-3 flex items-center">Telefono</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-2" />
        <div className="ml-2">
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}            
            id="telefono"
            name="telefono"
            type="text"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="w-full  border-0 py-1.4 text-white shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>
      
      <div className="w-full border border-gray-400 p-1 flex items-center border-2">
        <label htmlFor="direccion" className="text-sm font-medium leading-6 px-3 text-white flex items-center">Ciudad</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-0" />
        <div className="ml-2">
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="direccion"
            name="direccion"
            type="text"
            required
            value={formData.direccion}
            onChange={handleChange}
            className="w-full border-0 py-1.4 text-gray-900 shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>

      <div>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}          
          type="submit"
          onClick={CodeGen}
          className="flex justify-center px-2 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-700 text-white object-left-top w-full"
          style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 100% 50%, 90% 100%, 0 100%)' }}
        >
          Generar código
        </motion.button>
      </div>
    </form>
  </div>
</div>
</div>


{/* Para pantallas grandes */}
<div className="hidden mx-auto lg:flex flex-row h-auto w-full min-h-screen">
<img src={Mdt6} alt="Imagen grande" className="object-cover max-h-screen w-1/3" />

<div className="bg-zinc-950 lg:p-20 w-full lg:w-2/3 flex justify-center max-h-screen">
  <div className="shadow-gray-200 bg-zinc-700 rounded-lg  shadow-lg  p-8 lg:p-10 w-full max-w-md">
    <motion.div className="mb-8 text-red-700 text-2xl font-bold " >Registrarse</motion.div> {/* Letrero "Registrarse" */}
    
    <div className="h-1 w-full flex mb-8 lg:mb-12">
      <div className="w-1/2 bg-red-700"></div>
      <div className="w-1/2 bg-gray-400"></div>
    </div>
    <form className="space-y-5" action="#" method="POST" onSubmit={handleSubmit}>
      <div className="w-full border border-gray-400 p-1 flex items-center border-2"> 
        <label htmlFor="text" className="px-7 text-sm font-medium leading-6 text-white flex items-center">Nombre</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-6" />
        <div className="ml-2">
          <motion.input 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}            
            type="text" 
            id="nombre"
            name="nombre"
            autoComplete="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full  border-0 py-1.4 px-7 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>
      <div className="w-full border border-gray-400 p-1 flex items-center border-2"> 
        <label htmlFor="text" className="px-7 text-sm font-medium leading-6 text-white flex items-center">Cédula</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-6" />
        <div className="ml-2">
          <motion.input 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}            
            type="text" 
            id="cedula"
            name="cedula"
            autoComplete="cedula"
            required
            value={formData.cedula}
            onChange={handleChange}
            className="w-full  border-0 py-1.4 px-7 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>
      <div className="w-full border border-gray-400 p-1 flex items-center border-2"> {/* Cambio en la clase de estilo aquí */}
        <label htmlFor="email" className="text-sm font-medium leading-6 px-6 text-white flex items-center">Email</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-11" />
        <div className="ml-2">
          <motion.input
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full  border-0 py-1.4 px-7 text-white shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>

      <div className="w-full border border-gray-400 p-1 flex items-center border-2 "> {/* Cambio en la clase de estilo aquí */}
        <label htmlFor="telefono" className="px-7 text-sm font-medium leading-6 text-white flex items-center">Telefono</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-4" />
        <div className="ml-2">
          <motion.input
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
            id="telefono"
            name="telefono"
            type="text"
            required
            value={formData.telefono}
            onChange={handleChange}
style={{ 
  appearance: 'textfield', /* Solución alternativa para algunos navegadores */
  WebkitAppearance: 'none', /* Oculta las flechas en Chrome y Safari */
  MozAppearance: 'textfield', /* Solución para Firefox */
  margin: 0, /* Asegura que las flechas no dejen espacio */
}}              className="w-full  border-0 py-1.4 px-7 text-white shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>
      <div className="w-full border border-gray-400 p-1 flex items-center border-2"> {/* Cambio en la clase de estilo aquí */}
        <label htmlFor="direccion" className="text-sm px-7 font-medium leading-6 text-white flex items-center">Dirección</label>
        <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-2" />
        <div className="ml-2">
          <motion.input
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
            id="direccion"
            name="direccion"
            type="text"
            required
            value={formData.direccion}
            onChange={handleChange}
            className="w-full  border-0 py-1.4 px-7 text-white shadow-sm placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-zinc-700"
          />
        </div>
      </div>

      <div>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          type="submit"
          className="flex justify-center px-2 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-700 text-white object-left-top w-full"
          style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 100% 50%, 90% 100%, 0 100%)' }}
        >
          Generar código
        </motion.button>
      </div>
    </form>
  </div>
</div>
</div>

  </div>
      </div>
      )}


     {showSecondDiv && (
        <div>
          {/* segundo div */}
          <div>
            {/* Renderiza el componente CodeGen */}
            <CodeGen />
          </div>
        </div>
      )}
</div>
  )
}
