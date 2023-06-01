import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import SelectField from "../../components/SelectedField";

const SINGUP_GQL= gql`
mutation ($create: AgriculturistInput!) {
  agriculturistCreate(create: $create) {
    identification
    firstName
    lastName
    phone
    address
    email
    password
  }
}
`;

const DEPARTMENT_GQL=gql`
query GetAllDepartment {
  getAllDepartment {
    id
    name
  }
}
`;

const MUNICIPALITY_GQL=gql`
query GetAllMunicipality {
  getAllMunicipality {
    id
    name
  }
}
`;



export default function SingUp(){



   const [identification,setIdentification]= useState<Number>(0)
   const [firstName, setFirstName]= useState<String>("")
   const [lastName, setLastName]= useState<String>("")
   const [phone, setPhone]= useState<String>("")
   const [address, setAdress]= useState<String>("")
   const [email, setEmail]= useState<String>("")
   const [password,setPassword]= useState<String>("")
   const [department,setDepartment]= useState('') 
   const [departmentId,setDepartmentId]= useState(0)
   const [municipality,setMunicipality]= useState('')
   const [municipalityId,setMunicipalityId]= useState(0)
   const [departmentOptions, setDepartmentOptions] = useState<any[]>([]);
   const [municipalityOptions, setMunicipalityOptions] = useState<any[]>([]);
   
   const [singUp, { data: userData, loading: loadingUser, error: errorUser }] = useMutation(SINGUP_GQL);

   const { data: departmentData, } = useQuery(DEPARTMENT_GQL);
   const { data: municipalityData } = useQuery(MUNICIPALITY_GQL);


  useEffect(() => {
    if (departmentData && departmentData.getAllDepartment) {
      const options = departmentData.getAllDepartment.map((department: any) => ({
        id: department.id,
        name: department.name,
      }));
      setDepartmentOptions(options);
    }
  }, [departmentData]);

   useEffect(() => {
    if (municipalityData && municipalityData.getAllMunicipality) {
      const options = municipalityData.getAllMunicipality.map((municipality: any) => ({
        id: municipality.id,
        name: municipality.name,
      }));
      setMunicipalityOptions(options);
    }
  }, [municipalityData]);


   useEffect(() => {
      const selectedDepartment = departmentOptions.find(option => option.name === department);
       if (selectedDepartment) {
	 setDepartmentId(parseFloat(selectedDepartment.id));
	 } else {
	    setDepartmentId(0);
	 }
}, [department]);

    useEffect(() => {
      const selectedMunicipality= municipalityOptions.find(option => option.name === municipality);
       if (selectedMunicipality) {
	 setMunicipalityId(parseFloat(selectedMunicipality.id));
	 } else {
	    setMunicipalityId(0);
	 }
}, [municipality]);


   const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDepartment(event.target.value);
   };

   const handleMunicipalityChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setMunicipality(event.target.value);
   };

   const handleLogin= () =>{

	 console.log(departmentId, municipalityId) 
	 singUp(
	 {
	 variables:{
	    create: {
	       identification:identification,
	       firstName:firstName,
	       lastName:lastName,
	       phone:phone,
	       address:address,
	       email :email,
	       password:password,
	       department:1,
	       municipality:municipalityId

	    }
	 }

	 }
      ).then(() => {

	 alert("El agricultor ha sido registrado"); 
       }).catch(()=> {
	 alert("El agricultor o corre ya existe"); 
      });

      
   }

   return (
      <>
      <div className="login">
	<form> 
	 <label>Cedula</label>
	 <input
	   onChange={(e) => setIdentification(parseFloat(e.target.value))} 
	    />
	 <label>Nombres</label>
	 <input
	   onChange={(e) => setFirstName(e.target.value)} 
	    />
	 
	 <label>Apellidos</label>
	 <input
	   onChange={(e) => setLastName(e.target.value)} 
	    />
	 
	 <label>Telefono</label>
	 <input
	   onChange={(e) => setPhone(e.target.value)} 
	    />

	 <label>Direccion</label>
	 <input
	   onChange={(e) => setAdress(e.target.value)} 
	    />

	 <label>Correo electronico</label>
	 <input
	   onChange={(e) => setEmail(e.target.value)} 
	    />
	 <label>Contrasena</label>
	 <input
	    type="password"
	   onChange={(e) => setPassword(e.target.value)} 
	    />
       <SelectField
        label="Departamento"
        value={department}
        options={departmentOptions}
        onChange={handleDepartmentChange}
	 />
       <SelectField
        label="municipality"
        value={municipality}
        options={municipalityOptions}
        onChange={handleMunicipalityChange}
	 />


	<button
	 onClick={handleLogin}
	>Iniciar sesion </button> 
	       </form>
      </div>
      </>

   );
}
