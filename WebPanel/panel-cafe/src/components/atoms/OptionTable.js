import React from "react";
import '../../styles/buttons.sass';

const OptionTable = ({label, action, className="button"}) =>{
    return(
        <li>
            <button onClick={action} className={className}>{label}</button>
        </li>
    );
};

export default OptionTable;