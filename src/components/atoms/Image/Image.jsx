import React from 'react'
import "./ImageCard.scss";

function Image({image, label, redirect}) {
    return (
        <>
        <a href={redirect} className="image-card-wrapper">
            <img src={image} alt={label} className="image-card__img" />
            <span className="image-card__label body-medium-500">{label}</span>
        </a>
        </>
    )
}

export default Image
