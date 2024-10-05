import React from "react";
import { Select } from "@mui/material";
import OptionSelect from '../atoms/OptionSelect';

const SelectForm = ({ listOptios = [], value, onChange, name }) => {
  return (
    <Select
      value={value || ''}  // Asigna el valor o una cadena vacía si el valor es indefinido
      name={name}
      onChange={onChange}  // Pasa la función onChange correctamente
    >
      {listOptios.map(option => (
        <OptionSelect key={option.key} value={option.key} label={option.text} />
      ))}
    </Select>
  );
};

export default SelectForm;
