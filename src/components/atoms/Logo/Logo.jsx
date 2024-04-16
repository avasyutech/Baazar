import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';
import { Link } from 'react-router-dom';

export default function Logo({ label, variant }) {
    return (
     <Link to="/" className='logo'>
        <span className={`logo__icon logo__icon-${variant}`}><span className={`sub logo__icon-${variant}`}></span></span>
        <span className='logo__label'>{label}</span>
     </Link>
    )
  }

  Logo.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['orange', 'black', 'white']),
  };
  
  Logo.defaultProps = {
    label: 'Bazaar',
    variant: 'orange',
  };