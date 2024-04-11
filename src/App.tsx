/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import hotel from './assets/hotel.jpg'
import logo_h from './assets/logo_h.png'
export default function App() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
    <div className="relative bg-cover bg-center bg-no-repeat min-h-screen px-6 py-3 lg:px-8" style={{backgroundImage: `url(${hotel})`}}>
      {/* Superposición negra semitransparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      
      <div className="flex justify-center items-center h-full px-6 py-3 lg:px-8 ">
        <div className="bg-black bg-opacity-90 text-white w-96 p-8 rounded-lg shadow-2xl  z-10"> {/* Cambio de color a rojo y ajuste de opacidad */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={logo_h}
            alt="Your Company"
          />
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Registro
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-white">Nombre</label>
              <div className="mt-1">
                <input 
                type="text" 
                id="nombre"
                name="nombre"
                autoComplete="nombre"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-300"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-300"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-white ">
                  Telefono
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="telefono"
                  name="telefono"
                  type="number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-300"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="direccion" className="block text-sm font-medium leading-6 text-white">
                  Dirección
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="direccion"
                  name="direccion"
                  type="text"
                  required
                  className="bg-gray-300 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Generar código
              </button>
            </div>
          </form>
          
          <p className="mt-5 text-center text text-gray-500">
            Código generedo:{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              1Xf85V
            </a>
          </p>
        </div>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}
