import { gql, useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { GlobalStorageContext, GlobalStorageContextProps } from "../../storage/GlobalStorage";
import { useNavigate } from "react-router";

const LOGIN_GQL = gql`
   mutation ($validationAgriculturist: AgriculturistLoginInput!) {
  agriculturistValidate(validationAgriculturist: $validationAgriculturist) {
    identification
  }
}
`;
export default function Login (){

   const [email, setEmail]= useState<String>("")
   const [password,setPassword]= useState<String>("")
   const [login,{data,loading,error}]=useMutation(LOGIN_GQL)
   const globalStorage = useContext(GlobalStorageContext) as GlobalStorageContextProps;
   const navigate = useNavigate()
   const [errorLogin,setErrorLogin]=useState<Boolean>(false)


	 console.log(loading)
   if(data){
	 globalStorage.dispatch({state: {id: data?.agriculturistValidate?.identification}, action: "changeId"});
	 navigate("/dashboard")
   } 

   const handleLogin= () =>{
      login(
	 {
	 variables:{
	    validationAgriculturist : {
	       email :email,
	       password:password
	    }
	 }

	 })

      if(!data){
	 
      }

   }

   return (
       <div className=" block ">      
	 <div className="flex  bg-[#F0F0F0] m-3 justify-center bg-cover bg-img-bg md:bg-none h-screen " > 
            <div className="w-1/2  hidden  bg-cover bg-img-bg md:block " />
            <div className=" w-1/2  md:bg-[#eaeaea] flex items-center justify-center">
	       <div className=" flex flex-col  justify-center rounded-[10px]  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]  p-5  bg-white sm:px-20 w-auto h-auto ">
		  <h5 className=" md:text-2xl  font-bold text-center pb-10 "  >Iniciar sesion</h5>
		  <label className="py-3">Correo </label>
		  <input onChange={(e) => setEmail(e.target.value)} className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 "/> 
		  <label className="py-3">Contrasena</label>
		  <input type="password" onChange={(e) => setPassword(e.target.value)} className="rounded-[12px] bg-[#eceded] h-10 px-2 border-2 "/>   
		  <div className="flex  justify-center py-10">
		     <button onClick={handleLogin}className="bg-[#0CB3E8] text-white  px-6 py-3 rounded-lg hover:shadow-lg " >Aceptar </button> 
		  </div>
	       </div>
            </div>
	 </div>
      </div>	 
   );
}
