import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Form,Button,  } from "react-bootstrap";

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
      <div className="login">
	<Form> 
	 <Form.Label>Correo electronico</Form.Label>
	 <Form.Control
	   onChange={(e) => setEmail(e.target.value)} 
	    />
	 <Form.Label>Contrasena</Form.Label>
	 <Form.Control
	    type="password"
	   onChange={(e) => setPassword(e.target.value)} 
	    />
	<Button
	 onClick={handleLogin}
	>Iniciar sesion </Button> 

      </Form>
      </div>

   );
}
