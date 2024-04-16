import React from 'react';
import Button from '../Button/Button';
import './Error.scss';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className='error'>
        <img className='error__er-img' src='http://localhost:9000/images/robot.png' alt='robot'/>
        <div className='error__er-desc'>
            <span className=' display-5'>404, Page not found</span>
            <p className='error__er-desc__er-type body-medium-400'>Something went wrong. It's look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>
            <div className='error__er-desc__er-btn'>
                <Button redirect='#' label='go back' leftIcon='http://localhost:9000/icons/ArrowLeft.svg' size='small' onClick={(e) => {
                  e.preventDefault();
                  }} 
                />
                <Button redirect='#' variant='secondary' label='go to home' leftIcon='http://localhost:9000/icons/House.svg' size='small' onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  }} 
                />
            </div>
        </div>
    </div>
  )
}
