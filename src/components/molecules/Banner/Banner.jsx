import React from 'react';
import './Banner.scss';
import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';

export default function Banner() {

  return (
    <div className='banner'>
        <div className='banner__details'>
            <Badge variant='bestDeals' label='SAVE UP TO $200.00'/>
            <span className='banner__details__title display-3'>Macbook Pro</span>
            <p className='banner__details__desc body-xxl-400'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
            <Button label='shop now' rightIcon='http://localhost:9000/icons/ArrowRight.svg' redirect='/products'/>
        </div>
        <div className='banner__product'>

        </div>
    </div>
  )
}
