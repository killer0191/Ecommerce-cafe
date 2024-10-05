import React from "react";
import OptionSelect from '../atoms/OptionSelect';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const SelectForm = ({ listOptios = [], name }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <Select
      value={age}  // Asigna el valor o una cadena vacía si el valor es indefinido
      name={name}
      onChange={handleChange}  // Pasa la función onChange correctamente
    >
      {listOptios.map(option => {
        return(
            <MenuItem key={option.key} value={option.id}>{option.text}</MenuItem>
          )
      })}
    </Select>
//      <Select
//      labelId="demo-simple-select-label"
//      id="demo-simple-select"
//      value={age}
//      label="Age"
//      onChange={handleChange}
//    >
//      <MenuItem value={10}>Ten</MenuItem>
//      <MenuItem value={20}>Twenty</MenuItem>
//      <MenuItem value={30}>Thirty</MenuItem>
//    </Select>
    
  );
};

export default SelectForm;
