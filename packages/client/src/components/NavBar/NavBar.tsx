import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {

   const [showMenu, setShowMenu]=useState<Boolean>(false)

  return (
    <nav className="flex  bg-black items-center justify-between  p-3 m-4 rounded-[18px]">

	 <div className="block">
	 <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/agriculture-logo-design-template-7ec6b05615bf6da4c81fd7670b7b8dc0_screen.jpg?ts=1630938264" alt=""
	 className="h-10 w-auto sm:h-20"
	 />  
	 </div>
	  <div className="block md:hidden">
               <button
	                 className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"

                  onClick={() => setShowMenu(!showMenu)}
	       >
	         <svg
		     className="h-6 w-6"
		     stroke="currentColor"
		     fill="none"
		     viewBox="0 0 24 24">
		     <path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M4 6h16M4 12h16M4 18h16"
		     ></path>
		  </svg>
               
	        </button>
            </div>
       <div className={` text-white md:flex md:items-center  ${showMenu ? "block" : "hidden"} `}>
	       <Link to="login"  className=" block m-4 hover:text-black hover:bg-green-500 px-4 py-2 rounded " >Iniciar sesion</Link>
                <Link to="singup" className="block m-4 hover:text-black hover:bg-green-500 px-4 py-2 rounded "  >Registrarse</Link>
	 </div>

           </nav>
  );
}



