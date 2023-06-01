import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import SelectField from "../../components/SelectedField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CREATE_LOT= gql`
mutation ($create: SeedInput!) {
  seedCreate(create: $create) {
    id
    date
  }
}
`;

const LOT_GQL=gql`
query GetAllLot($agriculturist: Float!) {
  getAllLot(agriculturist: $agriculturist) {
    id
    name
    width
    long
    postalCode
  }
}
`;

const PATATOE_GQL=gql`
query GetAllTypePatatoe {
  getAllTypePatatoe {
    id
    name  
  }
}
`;



export default function CreateSeed(){

   const [date,setDate ]= useState<Date>(new Date())

   const [patatoe,setPatatoe]= useState('') 
   const [patatoeId,setPatatoeId]= useState(0)
   const [lot,setLot]= useState('')
   const [lotId,setLotId]= useState(0)
   const [patatoeOptions, setPatatoeOptions] = useState<any[]>([]);
   const [lotOptions, setLotOptions] = useState<any[]>([]);
   
   const [createSeed, { data: userData, loading: loadingUser, error: errorUser }] = useMutation(CREATE_LOT);

   const { data: lotData} = useQuery(LOT_GQL,
      {variables:{agriculturist:123}});
   
   const { data: patatoeData, error:error } = useQuery(PATATOE_GQL);

   

   if(error){
      console.log(error)
   }

  useEffect(() => {
    if (patatoeData && patatoeData.getAllTypePatatoe) {
      const options = patatoeData.getAllTypePatatoe.map((patatoe: any) => ({
        id: patatoe.id,
        name: patatoe.name,
      }));
      setPatatoeOptions(options);
    }
  }, [patatoeData]);

   useEffect(() => {
    if (lotData && lotData.getAllLot) {
      const options = lotData.getAllLot.map((lot: any) => ({
        id: lot.id,
        name: lot.name,
      }));
      setLotOptions(options);
    }
  }, [lotData]);


   useEffect(() => {
      const selectedPatatoe = patatoeOptions.find(option => option.name === patatoe);
       if (selectedPatatoe) {
	 setPatatoeId(parseFloat(selectedPatatoe.id));
	 } else {
	    setPatatoeId(0);
	 }
}, [patatoe]);

    useEffect(() => {
      const selectedLot= lotOptions.find(option => option.name === lot);
       if (selectedLot) {
	 setLotId(parseFloat(selectedLot.id));
	 } else {
	    setLotId(0);
	 }
}, [lot]);


   const handlePatatoeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPatatoe(event.target.value);
   };

   const handleLotChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setLot(event.target.value);
   };

   const handleLogin= () =>{

	 console.log(patatoeId, lotId) 
	 createSeed(
	 {
	 variables:{
	    create: {
	       date:date,
	       patatoe:patatoeId,
	       lot:lotId
	       
	    }
	 }

	 }
      ).then(() => {

	 alert("El tipo de papa ha sido registrado"); 
       }).catch((error)=> {
	 console.log(error)
	 alert("El tipo de papa ya existe"); 
      });

      
   }

   return (
      <>
      <Navbar />
      <div className="login">
	<form> 
	 <label>Fecha</label>
	 <DatePicker
	    selected={date} 
	    onChange={(date:any) =>setDate(date)}
	    />

       <SelectField
        label="Tipo de papa"
        value={patatoe}
        options={patatoeOptions}
        onChange={handlePatatoeChange}
	 />
       <SelectField
        label="Lote"
        value={lot}
        options={lotOptions}
        onChange={handleLotChange}
	 />


	<button
	 onClick={handleLogin}
	>Crear </button> 
	       </form>
      </div>
      </>

   );
}
