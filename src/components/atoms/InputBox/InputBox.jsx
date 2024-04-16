import React, { useState } from 'react';
import "./InputBox.scss";

const InputBox = ({ type, id, label, placeholder, handleSearch }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };
    
    const handleClick = () => {
        handleSearch(inputValue);
    };
    
    return (
        <div className="inputbox">
            <label htmlFor={id} className='inputbox__label'>{label}</label>
            <input type={type} name={id} id={id} className='inputbox__field' placeholder={placeholder} onChange={handleInputChange} />
            <div className='search-wrapper' onClick={handleClick}>
                <img src='http://localhost:9000/icons/MagnifyingGlass.svg' alt="magnifying glass" />
            </div>
        </div>
    )
}

export default InputBox;
