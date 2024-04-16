import React, { useState } from 'react';
import Button from '../Button/Button';
import { useGlobal } from '../../../context/GlobalContext';
import './PopUp.scss';
import Backdrop from '../../../helpers/Backdrop/Backdrop';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

const PopUp = ({ showPayment, discount, subTotal, total }) => {
  const { isSuccessPayment, setIsSuccessPayment } = useGlobal();
  const navigate = useNavigate();
  const { cart } = useCart();

  const canclePayment = (e) => {
    e.preventDefault();
    showPayment(false);
  }

  const confirmPayment = async (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    if (total) {
      const response = await fetch('http://localhost:9000/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.user.name,
          mobile: user.user.mobile,
          cartDetails: cart,
          total: total,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          setIsSuccessPayment(true);
          navigate('/success', {
            state: {
              subTotal: subTotal,
              discount: discount,
              total: total
            }
          });
        } 
        else {
          showPayment(false);
          alert("Payment is rejected");
        }
      }
      else {
        console.error("Error in payment gateway ", response.statusText);
      }
    }
  };
  
  return (
    <Backdrop>
      <div className="payment">
        <p className='body-large-500'>Order Summary</p>
        <div className="chk-out__summary-group">
          <div className="chk-out__subTotal-blk">
            <span className="subTotal-label body-small-400">Sub-total</span>
            <span className="subTotal-value body-small-500">${subTotal}</span>
          </div>
          <div className="chk-out__shipping-blk">
            <span className="shipping-label body-small-400">Shipping</span>
            <span className="shipping-value body-small-500">Free</span>
          </div>
          <div className="chk-out__discount-blk">
            <span className="discount-label body-small-400">Discount</span>
            <span className="discount-value body-small-500">${discount}</span>
          </div>
          <span className='seperator' aria-hidden="true"></span>
          <div className="chk-out__totalPrice-blk">
            <span className="totalPrice-label body-medium-400">Total</span>
            <span className="totalPrice-value body-medium-600">${total} USD</span>
          </div>
          <div className="chk-out__button-wrapper">
            <Button variant={"secondary"} labelLevel={7} label={"cancel"} onClick={canclePayment} />
            <Button variant={"primary"} labelLevel={7} label={"confirm"} onClick={confirmPayment} />
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default PopUp;
