import React from "react";
import InputField from '../atoms/InputField';

const SearchForm = ({text}) => {
    return(
        <InputField type="text" value={text} />
    );
};

export default SearchForm;