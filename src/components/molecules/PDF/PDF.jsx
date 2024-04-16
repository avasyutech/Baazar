import React from "react";
import "./PDF.scss";
import Logo from "../../atoms/Logo/Logo";
import { useCart } from "../../../context/CartContext";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid #fa8232;
  display: flex;
  justify-content: space-between;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color:#191C1F;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: 400;
  color:#191C1F;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  background-color: #fa8232;
  padding: 5px 30px;
  letter-spacing: 3px;
  color: #fff;
  text-transform: uppercase;
`;

const PDF = ({ subTotal, discount, total }) => {
  const { cart } = useCart();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let separator = '-';
  let currentDate = `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;

  return (
    <section className="pdf-wrapper">
      <div id="pdf-wrapper__content" className="pdf-wrapper__content">
        <Wrapper>
          <SubWrapper>
            <Logo variant={"white"} />
            <Text>
              Invoice Number: <Value>{Date.now()}</Value>
            </Text>
            <Text>
              Date: <Value>{currentDate}</Value>
            </Text>
          </SubWrapper>
          <div>
            <Title>invoice</Title>
          </div>
        </Wrapper>
        <Wrapper>
          <SubWrapper>
            <Text>Bill from :</Text>
            <Value style={{ marginTop: "10px" }}>TA Digital</Value>
            <Value style={{ marginTop: "5px" }}>My home Twitza, Hyderabad, 500081</Value>
            <Value style={{ marginTop: "5px" }}>040 6621 7777</Value>
          </SubWrapper>
        </Wrapper>
        <div className="pdf-wrapper__pdf-table">
          <div className="pdf-wrapper__thead">
            <Text>Item</Text>
            <Text>Quantity</Text>
            <Text>Rate</Text>
            <Text>Amount</Text>
          </div>
          <div className="pdf-wrapper__tbody">
            {cart.map((item) => (
              <div className="pdf-wrapper__tlist">
                <Value>{item.title}</Value>
                <Value className="pdf-wrapper__item-quantity">{item.quantity}</Value>
                <Value>{item.price}</Value>
                <Value>{(item.price * item.quantity).toFixed(2)}</Value>
              </div>
            ))}
          </div>
          <div className="pdf-wrapper__price-details sub-total">
            <Text>
              Subtotal : <Value>{subTotal}</Value>
            </Text>
            <Text>
              Discount : <Value>{discount}</Value>
            </Text>
          </div>
        </div>

        <div className="pdf-wrapper__price-details">
          <span className="pdf-wrapper__pdf-total">Total : {total}</span>
        </div>
      </div>
    </section>
  );
};

export default PDF;
