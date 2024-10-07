import React from "react";
import OptionSelect from '../atoms/OptionSelect';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const SelectForm = ({ listOptios = [], name , onChange, value}) => {
  return (
    <Select
      value={value}  // Asigna el valor o una cadena vacía si el valor es indefinido
      name={name}
      onChange={onChange}  // Pasa la función onChange correctamente
    >
      {
        listOptios.map(option => {
          return(
              <MenuItem key={option.key} value={option.id}>{option.text}</MenuItem>
              //<OptionSelect llave={option.key} id={option.id} label={option.text} />
            )
        })
      }
    </Select>

    
  );
};

export default SelectForm;
