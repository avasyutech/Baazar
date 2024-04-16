import React from 'react';
import "./CheckoutCard.scss";
import CancelIcon from "../../../assets/icons/XCircle.svg";
import PlusIcon from "../../../assets/icons/Plus.svg";
import MinusIcon from "../../../assets/icons/Minus.svg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from "../../../context/CartContext";

function CheckoutCard(props) {
    const { id, image, title, price, quantity, totalPrice } = props;
    const { addToCart, removeFromCart, decrementCartValue } = useCart();

    const quantityIncrement = () => {
        addToCart(props);
    }

    const quantityDecrement = () => {
        decrementCartValue(id);
    }

    const removeItem = () => {
        removeFromCart(id);
        getNotification();
    }

    const getNotification = () => {
        toast.success('Removed ' + title, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            closeButton: false,
            hideProgressBar: false,
            style: {
                color: "#757575",
            },
        });
    }

    return (
        <>
        <div className="checkout checkout-main-wrapper">
            <div className="checkout__product-blk">
                <span className="checkout__close-icon">
                    <img src={CancelIcon} alt="cancel icon" onClick={removeItem} />
                </span>
                <img src={image} alt={title} className="checkout__product-img" />
                <span className="checkout__product-title body-small-400">{title}</span>
            </div>
            <div className="checkout__other-items">
                <div className="checkout__price-blk">
                    <span className="price-blk-label label-4">Price</span>
                    <span className="checkout__price-blk__price body-small-400">${price}</span>
                </div>
                <div className="checkout__quantity-blk">
                    <span className="quantity-blk-label label-4">Quantity</span>
                    <div className="checkout__quantity-opts">
                        <img src={MinusIcon} alt="minus icon" className="checkout-minus" onClick={quantityDecrement} />
                        <span className="checkout-quantity body-medium-400">{quantity}</span>
                        <img src={PlusIcon} alt="plus icon" className="checkout-plus" onClick={quantityIncrement} />
                    </div>
                </div>
                <div className="checkout__subTotal-blk">
                    <span className="subTotal-blk-label label-4">Sub total</span>
                    <span className="checkout-subTotal body-small-500">${totalPrice}</span>
                </div>
            </div>
            <ToastContainer />
        </div>
        </>
    )
}

export default CheckoutCard