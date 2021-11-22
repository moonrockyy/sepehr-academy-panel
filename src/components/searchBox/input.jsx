import React from 'react';
import "./serachbox.css"

const Input = ({}) => {
    return (
        <>
            <input className="form-control me-2 Search-box" type="search"
                   placeholder={"PlaceHolder"}
                   aria-label="Search"
            />
        </>
    );
};

export default Input;
