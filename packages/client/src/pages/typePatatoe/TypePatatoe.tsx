 import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { Form,Button, Alert,  } from "react-bootstrap";



const CREATE_PATATOE=gql`
mutation ($create: TypePatatoeInput!) {
  patatoeCreate(create: $create) {
    id
    name
  }
}
`

export default function CreatePatatoe(){


   const [name, setName]= useState<String>("")
   const [description, setDescription]= useState<String>("")
  
   const [singUp, { data: userData, loading: loadingUser, error: errorUser }] = useMutation(CREATE_PATATOE);

   const handle= () =>{

	 singUp(
	 {
	 variables:{
	    create: {
	       name:name,
	       description:description,

	    }
	 }

	 }
      ).then(() => {

	 alert("El tipo de papa ha sido registrado"); 
       }).catch(()=> {
	 alert("El tipo de papa ya esta registrado"); 
      });
 
   }

   return (
      <>
      <div className="Crear tipo de papa">
	<Form> 
	 <label>Nombre</label>
	 <input
	   onChange={(e) => setName(e.target.value)} 
	    />
	 
	 <label>Descripcion</label>
	 <input
	   onChange={(e) => setDescription(e.target.value)} 
	    />
	 
	<Button
	 onClick={handle}
	>Crear </Button> 
	       </Form>
      </div>
      </>

   );
}
