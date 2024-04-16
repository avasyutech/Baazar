import React from 'react';
import PropTypes from 'prop-types';
import './ViewAll.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function ViewAll({ label, variant }) {
  const navigate = useNavigate();

  const goToViewAll = (e) => {
    e.preventDefault();
    navigate("/products");
  }

  return (
    <div className={`viewAll viewAll-${variant}`} onClick={goToViewAll}>
      <span className='viewAll__label'>{label}</span>
      <FontAwesomeIcon className='viewAll__icon' icon={faArrowRight} />
    </div>
  )
}

ViewAll.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['orange', 'blue', 'yellow', 'black']),
  };

  
ViewAll.defaultProps = {
    label: 'browse all product',
    variant: 'orange',
  };
  