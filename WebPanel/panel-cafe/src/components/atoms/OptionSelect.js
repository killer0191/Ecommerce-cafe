import React from "react";
import MenuItem from "@mui/material/MenuItem";

const OptionSelect = ({llave, id, label}) => {
    return (
        <MenuItem key={llave} value={id}>{id + "-"+ label}</MenuItem>
    );
};

export default OptionSelect;