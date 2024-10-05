import React from "react";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import SelectForm from "../molecules/SelectForm";

const SelectForms = ({ label, list, name, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <SelectForm 
        listOptios={list} 
        name={name} 
        value={value} 
        onChange={onChange} 
      />
    </FormControl>
  );
};

export default SelectForms;
