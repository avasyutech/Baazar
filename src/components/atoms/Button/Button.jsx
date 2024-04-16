import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { Link } from 'react-router-dom';

  const Button = ({ label, variant, size, redirect, leftIcon, labelLevel, rightIcon, onClick, ...props }) => {
  const CustomHeading = `heading-${labelLevel}`;

  return (
    <>
      <Link to={redirect}
      className={['btn', `btn-${size}`,`btn-${variant}`].join(' ')}
      onClick={onClick}
      {...props}
      >
        <span  {...(leftIcon ? {className: 'left-icon--show'} : {className: 'left-icon--hide' , 'aria-hidden':true} )}>
          {leftIcon && <img src={leftIcon} alt="left icon" />}
        </span>
        <span className={`link-label ${CustomHeading}`}>{label}</span>
        <span  {...(rightIcon ? {className: 'right-icon--show'} : {className: 'right-icon--hide' , 'aria-hidden':true} )}>
          {rightIcon && <img src={rightIcon} alt="right icon" />}
        </span>
      </Link>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary','primary-blue', 'secondary-blue']),
  size: PropTypes.oneOf(['small', 'large', 'auto']),
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  labelLevel: PropTypes.number,
};


Button.defaultProps = {
  label: 'primary',
  redirect: '',
  variant: 'primary',
  size: 'small',
  onClick: undefined,
  leftIcon: '',
  rightIcon: '',
  labelLevel: 6,
};

export default Button;
