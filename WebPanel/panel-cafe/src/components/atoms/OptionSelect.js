import React from "react";
import MenuItem from "@mui/material/MenuItem";

const OptionSelect = ({ id, label}) => {
    return (
        <MenuItem value={id}>{id + "-"+ label}</MenuItem>
    );
};

export default OptionSelect;