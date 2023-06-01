import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

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

   const handleLogin= () =>{
      login(
	 {
	 variables:{
	    validationAgriculturist : {
	       email :email,
	       password:password
	    }
	 }

	 }
      )

   }


   return (
      
      <>
      <div className="login">
	 <label>Correo electronico</label>
	 <input
	   onChange={(e) => setEmail(e.target.value)} 
	    />
	 <label>Contrasena</label>
	 <input
	    type="password"
	   onChange={(e) => setPassword(e.target.value)} 
	    />
	<button
	 onClick={handleLogin}
	>Iniciar sesion </button> 

      </div>
      </>

   );
}
