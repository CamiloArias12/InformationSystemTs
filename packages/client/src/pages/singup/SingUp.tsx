import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
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
   const [firstName, setFirstName]= useState<string>('')
   const [lastName, setLastName]= useState<string>('')
   const [phone, setPhone]= useState<string>('')
   const [address, setAdress]= useState<string>('')
   const [email, setEmail]= useState<String>('')
   const [password,setPassword]= useState<String>('')
   const [department,setDepartment]= useState<string>('') 
   const [departmentId,setDepartmentId]= useState<Number>(0)
   const [municipality,setMunicipality]= useState<string>('')
   const [municipalityId,setMunicipalityId]= useState<Number>(0)
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
    setMunicipality("");
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
   <div>
      <div className="flex  bg-img-bg bg-cover rounded-lg m-3 w-auto items-center justify-center">
	 <div className="flex  bg-white  items-center justify-center p-10 rounded-lg  m-10">
	     
	       <div className="flex flex-col ">	 
	            <h5 className="text-center font-bold py-5">Registrarse</h5> 
	               <label className="block py-2">Cedula</label>
	               <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 md:w-[259px] " onChange={(e) => setIdentification(parseFloat(e.target.value))} />
	            <div className=" flex flex-col md:flex-row md:py-6">
		     <div className="flex flex-col">	
	                <label className="py-2">Nombres</label>
	                <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " onChange={(e) => setFirstName(e.target.value)} />
		     </div>
		     <div className="flex flex-col md:pl-12">
	                <label className="py-2">Apellidos</label>
	                <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " onChange={(e) => setLastName(e.target.value)} />
		     </div>
	            </div>
	            <div className="  flex flex-col md:flex-row md:pb-6">
		     <div className="flex flex-col">
	               <label className="py-2">Telefono</label>
	               <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " onChange={(e) => setPhone(e.target.value)} />
		     </div>
		     <div className="flex flex-col md:pl-12">
	               <label className="py-2">Direccion</label>
	               <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " onChange={(e) => setAdress(e.target.value)} />
		     </div>
	            </div>   
	            <div className="flex flex-col md:w-[259px] md:pb-6">
	               <label className="py-2">Correo electronico</label>
	               <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " onChange={(e) => setEmail(e.target.value)} />
	            </div>
	            <div className=" flex flex-col  md:flex-row  md:pb-6 ">
		     <div className="flex flex-col">
	               <label className="py-2">Contrasena</label>
	               <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " type="password" onChange={(e) => setPassword(e.target.value)} />
		     </div>
		     <div className="flex flex-col md:pl-12">
	               <label className="py-2">Confirmacion contraasena</label>
	               <input className="rounded-[12px] bor bg-[#eceded] h-10 px-2 border-2 " type="password" onChange={(e) => setPassword(e.target.value)} />
		     </div>
	            </div>

	            <div className="md:pb-8 ">
	               <SelectField
	        	  label="Departamento"
	        	  value={department}
	        	  options={departmentOptions}
	        	  onChange={handleDepartmentChange}
	               />
		    </div>
	            <div className="">
	               <SelectField
	        	  label="Municipio"
	        	  value={municipality}
	        	  options={municipalityOptions}
	        	  onChange={handleMunicipalityChange}
	               />
	            </div>

		    <div className="flex  justify-center py-10">
		     <button onClick={handleLogin}className="bg-[#0CB3E8] text-white  px-10 py-3 rounded-lg hover:shadow-lg " >Aceptar </button> 
		    </div>

	           </div>
	        </div>
      </div>
   </div>
   );
}
