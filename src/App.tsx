
import Mdt6 from './assets/Mdt6.png'
import Mdt7 from './assets/Mdt7.png'
import proximo from './assets/chevron-derecho.png'
import CodeGen from './components/codGen.tsx'

export default function App() {
  return ( 
       
    <div className="flex flex-col md:flex-row">
      {/* Para pantallas pequeñas */}
      <div className="md:hidden w-full ">
  <img src={Mdt7} alt="Imagen pequeña" className="w-full" />

  <div className="bg-zinc-700 p-4 w-full flex justify-center  ">
    <div className="bg-zinc-700 p-6 ">
      <div className="mb-4 text-red-700 text-2xl font-bold">Registrarse</div>

      <div className="h-1 w-full flex mb-20">
        <div className="w-1/2 bg-red-700"></div>
        <div className="w-1/2 bg-gray-400"></div>
      </div>
      
      <form className="space-y-10" action="#" method="POST">
        <div className="w-full border border-gray-400 p-1 px-4 flex items-center border-2">
          <label htmlFor="text" className="text-sm font-medium leading-6 text-white flex items-center">Nombre</label>
          <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-6" />
          <div className="ml-2">
            <input 
              type="text" 
              id="nombre"
              name="nombre"
              autoComplete="nombre"
              required
              className="w-full rounded-md border-0 py-1.4 text-white shadow-sm ring-int placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700"
            />
          </div>
        </div>
        
        <div className="w-full border border-gray-400 p-1 flex items-center border-2 px-5 ">
          <label htmlFor="email" className="text-sm font-medium leading-6 text-white flex items-center">Email</label>
          <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-9" />
          <div className="ml-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-0 py-1.4 text-white shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700"
            />
          </div>
        </div>

        <div className="w-full border border-gray-400 p-1 flex items-center border-2">
          <label htmlFor="telefono" className="text-sm font-medium leading-6 text-white px-3 flex items-center">Telefono</label>
          <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-2" />
          <div className="ml-2">
            <input
              id="telefono"
              name="telefono"
              type="number"
              required
              className="w-full rounded-md border-0 py-1.4 text-white shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700"
            />
          </div>
        </div>
        
        <div className="w-full border border-gray-400 p-1 flex items-center border-2">
          <label htmlFor="direccion" className="text-sm font-medium leading-6 px-3 text-white flex items-center">Dirección</label>
          <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-0" />
          <div className="ml-2">
            <input
              id="direccion"
              name="direccion"
              type="text"
              required
              className="w-full rounded-md border-0 py-1.4 text-gray-900 shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={CodeGen}
            className="flex justify-center px-2 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-700 text-white object-left-top w-full"
            style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 100% 50%, 90% 100%, 0 100%)' }}
          >
            Generar código
          </button>
        </div>
      </form>
    </div>
  </div>
</div>


      {/* Para pantallas grandes */}
      <div className="hidden mx-auto md:flex flex-row w-full">
        <img src={Mdt6} alt="Imagen grande" className="object-fill max-h-screen  w-1/3" />
        
        <div className="bg-zinc-700 p-40 w-2/3 flex justify-center max-h-screen ">
          <div className="  items-center">
          <div className=" mb-4 text-red-700 text-2xl font-bold">Registrarse</div> {/* Letrero "Registrarse" */}
          
          <div className="h-1 w-full flex mb-20">
            <div className="w-1/2 bg-red-700"></div>
            <div className="w-1/2 bg-gray-400"></div>
          </div>
          <form className="space-y-10" action="#" method="POST">
          <div className="w-96  border border-gray-400 p-1 flex items-center border-2 "> {/* Cambio en la clase de estilo aquí */}
            <label htmlFor="text"  className="px-7 text-sm font-medium leading-6 text-white flex items-center">Nombre</label>
            <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-6" />

             {/* Cambio en el estilo del span aquí */}
            <div className="ml-2">
              <input 
              type="text" 
              id="nombre"
              name="nombre"
              autoComplete="nombre"
              required
              className="w-fullrounded-md border-0 px-6 py-1.4 text-white shadow-sm  ring-int  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700 border-gray-400 "
              />
            </div>
          </div>
           <div className=" w-full border border-gray-400   p-1 flex items-center border-2"> {/* Cambio en la clase de estilo aquí */}
            <label htmlFor="email" className="text-sm font-medium leading-6 px-6 text-white flex items-center">
            Email</label>
            <img src={proximo} alt="Icono de correo electrónico"  className="h-5 w-5 ml-11" />
            <div className="ml-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" w-full rounded-md border-0 py-1.4 px-7 text-white shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700"
              />
            </div>
          </div>

          <div className=" w-full border border-gray-400 p-1 flex items-center border-2"> {/* Cambio en la clase de estilo aquí */}
            <label htmlFor="telefono" className="px-7 text-sm font-medium leading-6 text-white flex items-center">Telefono</label>
            <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-4" />

            <div className="ml-2">
              <input
                id="telefono"
                name="telefono"
                type="number"
                required
                className="w-full rounded-md border-0 py-1.4 px-7 text-white shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-zinc-700"
              />
            </div>
          </div>
          <div className="w-full border border-gray-400  p-1 flex items-center border-2"> {/* Cambio en la clase de estilo aquí */}
            <label htmlFor="direccion" className="text-sm px-7 font-medium leading-6 text-white flex items-center">Dirección</label>
            <img src={proximo} alt="Icono de correo electrónico" className="h-5 w-5 ml-2" />
            <div className="ml-2">
              
              <input
                id="direccion"
                name="direccion"
                type="text"
                required
                className="w-full rounded-md border-0 px-7 py-1.4 text-gray-900 shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset lg:focus:ring-gray-600 lg:text-sm lg:leading-6 bg-zinc-700  max-h-screen"
              />
            </div>
          </div>

            <div>
              <button
                type="submit"
                className="flex justify-center  px-2 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-red-700 text-white object-left-top w-full "
                style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 100% 50%, 90% 100%, 0 100%)' }}
               >
                Generar código
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}
