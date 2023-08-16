import React from "react";
import { styled } from "styled-components";
import { InputStyle } from "./myModules/Inputs";

const PaymentMethodComp = () => {
  return (
    <PaymentMethodStyle>
      <p>Choose Payment Method</p>
      <Methods>
        <Group>
          <InputStyle
            type="radio"
            id="directBankTransfer"
            name="paymentMethod"
          />
          <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
        </Group>
        <Group>
          <InputStyle type="radio" id="cashOnDelivery" name="paymentMethod" />
          <label htmlFor="cashOnDelivery">Cash on Delivery</label>
        </Group>
        <Group>
          <InputStyle type="radio" id="creditCard" name="paymentMethod" />
          <label htmlFor="creditCard">Credit Card</label>
        </Group>
      </Methods>
    </PaymentMethodStyle>
  );
};

const PaymentMethodStyle = styled.div`
  margin: 1rem;
  width: fit-content;

  /* background: yellowgreen; */
  padding: 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;

  p {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #cfcdcd;
  }
`;

const Group = styled.div`
  display: flex;
  /* background: yellowgreen; */
  width: fit-content;
  gap: 0.2rem;
  border-bottom: 1px solid #cfcdcd;
  padding: 0.5rem;

  label {
    font-size: 1.3rem;
  }
`;

const Methods = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
`;

export default PaymentMethodComp;
