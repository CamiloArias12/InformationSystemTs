import React, { ChangeEvent } from "react"

interface Option{
   id:number
   name:string
}


interface SelectFieldProps{
      label:String
      options:Option[]
      value:string
      onChange:(event :ChangeEvent<HTMLSelectElement>)=> void

      
}

const SelectField:React.FC<SelectFieldProps> = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
      <option></option> 
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};


export default SelectField
