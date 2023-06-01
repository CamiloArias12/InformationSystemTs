import { Outlet } from "react-router";
import Navbar from "../../components/NavBar/NavBar";



export default function Home (){

   return (
      <>
	 <Navbar/>
	 <Outlet/>
      </>
   );

}
