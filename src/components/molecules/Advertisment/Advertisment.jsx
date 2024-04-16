import React from 'react';
import "./Advertisment.scss";
import Button from '../../atoms/Button/Button';


function Advertisment({theme, label, category, discount, redirect, btnVarient, imgUrl}) {
    return (
        <>
        <div className={`advertise-container advertise-${theme}`}>
            <div className="advertise">
                <div className="advertise__content">
                    <span className="advertise__content__label body-small-600">{label}</span>
                    <span className="advertise__content__discount heading-1">{discount}% Discount</span>
                    <p className="advertise__content__category body-medium-500">For all <span className='high-light-color'>{category}</span> products.</p>
                    <Button variant={btnVarient} label={"shop now"} labelLevel={7} redirect={'/products'} rightIcon={"http://localhost:9000/icons/ArrowRight.svg"} />
                </div>
                <img src={imgUrl} alt={category} className="advertise__image" />
            </div>
        </div>
        </>
    )
}

export default Advertisment
