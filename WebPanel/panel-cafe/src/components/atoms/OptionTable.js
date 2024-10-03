import React from "react";

const OptionTable = ({label, action}) =>{
    return(
        <li>
            <a onClick={action}>{label}</a>
        </li>
    );
};

export default OptionTable;