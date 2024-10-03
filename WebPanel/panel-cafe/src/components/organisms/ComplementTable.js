import React from "react";
import SearchForm from "../molecules/SearchForm";
import Button from "../atoms/Button";

const ComplementTable = ({text, button}) => {
    return(
        <div>
            <SearchForm text={text} />
            <Button text={button} onClick="#" disabled={false}/>
        </div>
    );
};

export default ComplementTable;