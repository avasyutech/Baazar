import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./ProductDetail.scss";
import Rating from "../../components/atoms/Rating/Rating";
import Badge from "../../components/atoms/Badge/Badge";
import PlusIcon from "../../assets/icons/Plus.svg";
import MinusIcon from "../../assets/icons/Minus.svg";
import Button from "../../components/atoms/Button/Button";
import { useCart } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { state } = useLocation();
    const { cart, addToCart, removeFromCart, decrementCartValue } = useCart();
    const { id, otherDetails } = state;
    const [imageSrc, setImageSrc] = useState(otherDetails.image);
    const [ quantity, setQuantity ] = useState(1);
    const changeImageSrc = (e) => {
        setImageSrc(e.target.getAttribute("src"));
    }
    const navigate = useNavigate();

    const decrementQuantity = () => {
        if(quantity > 1) {
            decrementCartValue(otherDetails.id)
        }
    }

    const getQuantity = () => {
        const existingItem = cart.find((cartItem) => cartItem.id === otherDetails.id);
        if(existingItem) {
            setQuantity(existingItem.quantity);
        }
    }

    const buyNow = (e) => {
        e.preventDefault();
        addToCart(otherDetails);
        navigate("/checkout")
    }

    useEffect(() => {
        getQuantity();
    }, [cart]);

    return (
        <div className="product-detail-main-container">
            <div className="product-detail-grid w-90">
                <div className="product-detail">
                    <div className="product-detail__slider">
                        <div className="product-detail__slider__pr-img">
                            <img className='pr-img__each-img' src={imageSrc} alt="product" />
                        </div>

                        <div className="product-detail__slider__sld-img">
                            {
                                otherDetails.imageList.map((image, index) => (
                                    <div key={index} className="sld-img__sld-box">
                                        <img className='sld-img__sld-box__each-img' onClick={changeImageSrc} src={image.src} alt="product" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-info__rating-blk">
                        <div className="product-info__rating-blk__rating">
                            <Rating value={otherDetails.public.rating} /><span className="rating-txt body-small-600">{otherDetails.public.rating} Star Rating</span>
                        </div>
                        <span className="product-info__rating-blk__reviewers body-small-400">({otherDetails.public.reviews} User feedback)</span>
                    </div>
                    <span className="product-info__title body-xl-400">{otherDetails.title}</span>
                    <div className="product-info__extra-details">
                        <div className="product-info__extra-details__blk">
                            <span className="extra-detail-label body-small-400">Sku: </span>
                            <span className="extra-detail-value body-small-600">A264671</span>
                        </div>
                        <div className="product-info__extra-details__blk">
                            <span className="extra-detail-label body-small-400">Availability: </span>
                            <span className="extra-detail-value body-small-600 in-stock">In Stock</span>
                        </div>
                        <div className="product-info__extra-details__blk">
                            <span className="extra-detail-label body-small-400">Brand: </span>
                            <span className="extra-detail-value body-small-600">{otherDetails.brand}</span>
                        </div>
                        <div className="product-info__extra-details__blk">
                            <span className="extra-detail-label body-small-400">Category: </span>
                            <span className="extra-detail-value body-small-600">{otherDetails.category}</span>
                        </div>
                    </div>
                    <div className="product-info__price-blk">
                        <span className="discounted-price heading-3">${otherDetails.price}</span>
                        <span className="mrp-price">${otherDetails.mrp}</span>
                        <Badge variant={'discount'} label={`${otherDetails.discount}% off`} />
                    </div>
                    <span className="seperator-24" aria-hidden="true"></span>
                    <div className="product-info__features-blk">
                        <div className="product-feature-blk">
                            <span className="feature-label body-small-400">Color</span>
                            <div className="feature-colors-blk">
                                <span className="color-circle-out">
                                    <span className="colored-circle" style={{ background: "#B1B5B8" }} aria-hidden="true"></span>
                                </span>
                            </div>
                        </div>
                        <div className="product-feature-blk">
                            <span className="feature-label body-small-400">Size</span>
                            <span className="feature-txt body-small-400" title="14-inch Liquid Retina XDR display">14-inch Liquid Retina XDR display</span>
                        </div>

                        <div className="product-feature-blk">
                            <span className="feature-label body-small-400">Memory</span>
                            <span className="feature-txt body-small-400">16GB unified memory</span>
                        </div>
                        <div className="product-feature-blk">
                            <span className="feature-label body-small-400">Storage</span>
                            <span className="feature-txt body-small-400">1TV SSD Storage</span>
                        </div>
                    </div>
                    <div className="product-info__btn-grp">
                        <div className="checkout__quantity-opts">
                            <img src={MinusIcon} alt="minus icon" className="checkout-minus" onClick={decrementQuantity} />
                            <span className="checkout-quantity body-medium-400">{quantity}</span>
                            <img src={PlusIcon} alt="plus icon" className="checkout-plus" onClick={() => addToCart(otherDetails)} />
                        </div>
                        <Button label={"add to cart"} variant={"primary"} size={"auto"} />
                        <Button label={"buy now"} variant={"secondary"} onClick={buyNow} />
                    </div>
                    <div className="product-info__payment-blk">
                        <span className="body-small-400">100% Guarantee Safe Checkout</span>
                        <img src="http://localhost:9000/images/Payment-Method.png" alt="payment methods" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
