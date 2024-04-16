import React, { useState } from 'react';
import "./DropDown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown , faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ options, selected, setSelected , variant}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`dropdown dropdown-${variant}`}>
      <div className={(isActive) ? 'dropdown__btn active' : 'dropdown__btn'} onClick={(e) => {
        setIsActive(!isActive)
      }}>
        <span className='body-small-400'>{selected}</span>
        <div className='d-flex'>
          {(!isActive) ? <FontAwesomeIcon className='dropdown__btn__icon' icon={faChevronDown} /> : <FontAwesomeIcon className='dropdown__btn__icon' icon={faChevronUp} />}
        </div>
      </div>

      {isActive && (
        <div className='dropdown__content'>
          {options.map((option, index) => (
            <div key={index} className='dropdown__item' onClick={(e) => {
              setSelected(option)
              setIsActive(false)
            }}>
              <span className='body-small-400'>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
