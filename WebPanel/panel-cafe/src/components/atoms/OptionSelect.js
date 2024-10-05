import React from "react";
import MenuItem from "@mui/material/MenuItem";

const OptionSelect = ({value, label}) => {
    return (
        <MenuItem value={value}>{label}</MenuItem>
    );
};

export default OptionSelect;