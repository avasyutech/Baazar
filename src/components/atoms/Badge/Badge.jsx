import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

export default function Badge({ label, variant}) {
  return (
    <span className={`badge badge-${variant}`}>{label}</span>
  )
}
  
Badge.defaultProps = {
  label: 'Hot',
  variant: 'hot',
};
