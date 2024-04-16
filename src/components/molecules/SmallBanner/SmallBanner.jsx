import React from 'react';
import "./SmallBanner.scss";
import Badge from "../../atoms/Badge/Badge"
import Button from '../../atoms/Button/Button';
import data from "../../../json/products.json";

function SmallBanner({labelColor, productTitle, productDesc, redirect, theme}) {
    let id =  data.products.laptop[0].id;
    let otherDetails = data.products.laptop[0];
    return (
        <>
        <div className={`smBanner ${theme}`}>
            <div className="smBanner-blk">
                <div className="smBanner-blk__content">
                    <Badge variant={labelColor} label={"introducing new"} />
                    <h1 className="smBanner-blk__content__title">
                        {productTitle}
                    </h1>
                    <p className="smBanner-blk__content__desc">
                        {productDesc}
                    </p>
                    <Button label={"shop now"} redirect={`/products/${id}`} labelLevel={7} rightIcon='http://localhost:9000/icons/ArrowRight.svg' 
                        state={{
                            id: id,
                            otherDetails: otherDetails
                        }}
                    />
                </div>
                {/* <div className="smBanner-blk__image">
                    <img src={imgUrl} alt={productTitle} />
                </div> */}
            </div>
        </div>
        </>
    )
}

export default SmallBanner;
