import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import SelectField from "../../components/SelectedField";

const CREATE_LOT= gql`
mutation ($create: LotInput!) {
  lotCreate(create: $create) {
    id
    name
    width
    long
    postalCode
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



export default function CreateLot(){



   const [name, setName]= useState<String>("")
   const [lastName, setLastName]= useState<String>("")
   const [phone, setPhone]= useState<String>("")
   const [address, setAdress]= useState<String>("")
   const [department,setDepartment]= useState('') 
   const [departmentId,setDepartmentId]= useState(0)
   const [municipality,setMunicipality]= useState('')
   const [municipalityId,setMunicipalityId]= useState(0)
   const [departmentOptions, setDepartmentOptions] = useState<any[]>([]);
   const [municipalityOptions, setMunicipalityOptions] = useState<any[]>([]);
   
   const [createLot, { data: userData, loading: loadingUser, error: errorUser }] = useMutation(CREATE_LOT);

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
	 createLot(
	 {
	 variables:{
	    create: {
	       name:name,
	       lastName:lastName,
	       phone:phone,
	       address:address,
	       department:departmentId,
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
      <Navbar />
      <div className="login">
	<form> 
	 <label>Nombre</label>
	 <input
	   onChange={(e) => setIdentification(parseFloat(e.target.value))} 
	    />
	 <label>Ancho</label>
	 <input
	   onChange={(e) => setName(e.target.value)} 
	    />
	 
	 <label>Largo</label>
	 <input
	   onChange={(e) => setLastName(e.target.value)} 
	    />
	 
	 <label>Codigo Postal</label>
	 <input
	   onChange={(e) => setPhone(e.target.value)} 
	    />

       <SelectField
        label="Departamento"
        value={department}
        options={departmentOptions}
        onChange={handleDepartmentChange}
	 />
       <SelectField
        label="Municipio"
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
