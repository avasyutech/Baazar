import React, { useState } from 'react';
import "./Checkout.scss";
import Wrapper from "../../helpers/Wrapper";
import CheckoutCard from '../../components/atoms/Checkout-card/CheckoutCard';
import Button from "../../components/atoms/Button/Button";
import BlueArrow from "../../assets/icons/ArrowLeft-blue.svg";
import WhiteArrow from "../../assets/icons/ArrowRight.svg";
import PopUp from "../../components/atoms/PopUp/PopUp";
import { useCart } from '../../context/CartContext';

function Checkout() {
    const { cart } = useCart();
    const [showPayment, setShowPayment] = useState(false);

    const calculateCartTotals = () => {
        let totalDiscount = 0;
        let subTotal = 0;

        cart.forEach((item) => {
            const discountPercentage = item.discount || 0;
            const discountAmount = (discountPercentage / 100) * item.price;

            totalDiscount += discountAmount * item.quantity;
            subTotal += item.quantity * item.price;
        });

        const total = subTotal - totalDiscount;
        return { totalDiscount, subTotal, total };
    };

    const { totalDiscount, subTotal, total } = calculateCartTotals();

    const getPayment = (e) => {
        e.preventDefault();
        setShowPayment(!showPayment);
    }

    return (
        <Wrapper>
            <section className="main-checkout-wrapper">
                <div className="chk-out chk-out-grid w-90">
                    <div className="chk-out__shpng-dtls">
                        <span className="chk-out__shpng-dtls__title body-large-500">Shopping Card</span>
                        <div className="chk-out__shpng-dtls__table">
                            <div className="shpng-dtls-thead">
                                <span className="shpng-dtls-thead__product-label label-4">Products</span>
                                <span className="shpng-dtls-thead__price-label label-4">Price</span>
                                <span className="shpng-dtls-thead__quantity-label label-4">Quantity</span>
                                <span className="shpng-dtls-thead__subTotal-label label-4">Sub Total</span>
                            </div>
                        </div>
                        <div className="chk-out__shpng-dtls__products-list">
                        { cart.length > 0
                        ?  
                        (cart.map((item) => (
                            <CheckoutCard key={item.id} id={item.id} image={item.image} title={item.title} price={item.price.toFixed(2)} quantity={item.quantity} totalPrice={(item.quantity * item.price).toFixed(2)} />
                        )))
                        :
                        <span className="no-checkout-cmp body-large-400">No data available</span>
                        }
                        </div>
                        <div className="chk-out__shpng-dtls__utility-blk">
                            <Button variant={"secondary"} labelLevel={7} label={"return to shop"} redirect={"/"} leftIcon={BlueArrow} />
                        </div>
                    </div>
                    <div className="chk-out__total-dtls">
                        <div className="chk-out__total-dtls__summary-blk">
                            <span className="chk-out__summary-label body-large-500">Card Totals</span>
                            <div className="chk-out__summary-group">
                                <div className="chk-out__subTotal-blk">
                                    <span className="subTotal-label body-small-400">Sub-total</span>
                                    <span className="subTotal-value body-small-500">${subTotal.toFixed(2)}</span>
                                </div>
                                <div className="chk-out__shipping-blk">
                                    <span className="shipping-label body-small-400">Shipping</span>
                                    <span className="shipping-value body-small-500">Free</span>
                                </div>
                                <div className="chk-out__discount-blk">
                                    <span className="discount-label body-small-400">Discount</span>
                                    <span className="discount-value body-small-500">${totalDiscount.toFixed(2)}</span>
                                </div>
                                <span className='seperator' aria-hidden="true"></span>
                                <div className="chk-out__totalPrice-blk">
                                    <span className="totalPrice-label body-medium-400">Total</span>
                                    <span className="totalPrice-value body-medium-600">${total.toFixed(2)} USD</span>
                                </div>
                                <Button size={"auto"} rightIcon={WhiteArrow} labelLevel={6} label={"Proceed to Checkout"} onClick={getPayment} />
                            </div>
                        </div>
                    </div>
                </div>
                {showPayment && (
                    <PopUp showPayment={setShowPayment} discount={totalDiscount.toFixed(2)} subTotal={subTotal.toFixed(2)} total={total.toFixed(2)}  />
                )}
            </section>
        </Wrapper>
    )
}

export default Checkout
