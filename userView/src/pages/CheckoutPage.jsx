import React from "react";
import ShippingAddress from "../components/address/ShippingAddress";
import PaymentMethodComp from "../components/PaymentMethodComp";
import { styled } from "styled-components";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";

const products = [
  {
    name: "Kids School Bag /Backpack and more",
    image: Product1,
    color: "blue",
    size: " medium",
    price: 1000,
    quantity: 1,
  },
  {
    name: "Adult clothinf and accessories",
    image: Product2,
    color: "pink",
    size: " large",
    price: 2000,
    quantity: 2,
  },
];

const CheckoutPage = () => {
  return (
    <CheckoutStyle>
      {/* <ShippingAddress /> */}
      <PaymentMethodComp />
    </CheckoutStyle>
  );
};

const CheckoutStyle = styled.div`
  /* display: flex; */
`;

const OrderDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;
`;

const PaymentStyle = styled.div`
  /* display: flex; */
`;

export default CheckoutPage;
