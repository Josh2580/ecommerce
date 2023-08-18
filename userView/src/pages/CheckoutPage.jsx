import React from "react";
import ShippingAddress, {
  ShippingAddressStyle,
  Group,
} from "../components/address/ShippingAddress";
import PaymentMethodComp, {
  PaymentMethodStyle,
  PayGroup,
  Methods,
} from "../components/PaymentMethodComp";
import { styled } from "styled-components";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import { ButtonStyle } from "../components/myModules/Button";
import { InputStyle } from "../components/myModules/Inputs";

const products = [
  {
    id: 1,
    name: "Kids School Bag /Backpack and more",
    image: Product1,
    color: "blue",
    size: " medium",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Adult clothinf and accessories",
    image: Product2,
    color: "pink",
    size: " large",
    price: 2000,
    quantity: 2,
  },
];

const CheckoutPage = () => {
  const AddressHandler = () => {
    // alert("addressi ");
  };

  const PlaceOrderHandler = () => {
    // alert("order is now placed");
  };

  return (
    <CheckoutStyle as="form">
      <div className="group">
        <ShippingAddressStyle as="div">
          <p className="title">Shipping Address</p>
          <Group>
            <div className="eachInput">
              {/* <Group></Group> */}
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>
              <InputStyle
                type="text"
                placeholder="First Name"
                required
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="eachInput">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>
              <InputStyle
                type="text"
                placeholder="Last Name"
                required
                id="lastName"
                name="lastName"
              />
            </div>
          </Group>
          <Group>
            <div className="eachInput">
              <label htmlFor="phoneNumber">
                Phone Number <span>*</span>
              </label>
              <InputStyle
                type="tel"
                placeholder="Phone Number"
                required
                id="phoneNumber"
                name="phoneNumber"
              />
            </div>
            <div className="eachInput">
              <label htmlFor="email">Email</label>
              <InputStyle
                type="email"
                placeholder="Email"
                id="email"
                name="email"
              />
            </div>
          </Group>
          <div className="eachInput">
            <label htmlFor="address">
              Address <span>*</span>
            </label>
            <InputStyle
              type="text"
              placeholder="Address"
              required
              id="address"
              name="address"
            />
          </div>
          <div className="eachInput">
            <label htmlFor="secondAddress">Second Address</label>
            <InputStyle
              type="text"
              placeholder="Second Address"
              id="secondAddress"
              name="secondAddress"
            />
          </div>
          <Group>
            <div className="eachInput">
              <label htmlFor="city">
                City <span>*</span>
              </label>
              <InputStyle
                type="text"
                required
                placeholder="City"
                id="city"
                name="city"
              />
            </div>{" "}
            <div className="eachInput">
              <label htmlFor="State">
                State <span>*</span>
              </label>
              <InputStyle
                type="text"
                required
                placeholder="State"
                id="State"
                name="State"
              />
            </div>{" "}
          </Group>
          <div className="eachInput">
            <label htmlFor="Country">
              Country <span>*</span>
            </label>
            <InputStyle
              type="text"
              placeholder="Country"
              id="Country"
              name="Country"
              required
            />
          </div>
          <div className="eachInput">
            <label htmlFor="orderNote">Order Note</label>
            <textarea
              name="orderNote"
              id="orderNote"
              placeholder="Type your order message here"
            ></textarea>
          </div>
        </ShippingAddressStyle>
        <PaymentMethodStyle>
          <p>Choose Payment Method</p>
          <Methods>
            <PayGroup>
              <InputStyle
                type="radio"
                id="directBankTransfer"
                name="paymentMethod"
                required
              />
              <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
            </PayGroup>
            <PayGroup>
              <InputStyle
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                required
              />
              <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </PayGroup>
            <PayGroup>
              <InputStyle
                type="radio"
                required
                id="creditCard"
                name="paymentMethod"
              />
              <label htmlFor="creditCard">Credit Card</label>
            </PayGroup>
          </Methods>
        </PaymentMethodStyle>
      </div>
      <OrderDetailsStyle>
        <p className="header">Order Details</p>
        {products.map((prod) => (
          <div key={prod.id} className="eachProduct">
            <div className="info">
              <img src={prod.image} alt={prod.name} />
              <div>
                <p>{prod.name}</p>
                <p>Qty: {prod.quantity}</p>
              </div>
            </div>
            <p className="price">{prod.price}</p>
          </div>
        ))}
        <ButtonStyle width="100%" onClick={() => PlaceOrderHandler()}>
          Place Order
        </ButtonStyle>
      </OrderDetailsStyle>
    </CheckoutStyle>
  );
};

const CheckoutStyle = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem;
  .group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 2;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const OrderDetailsStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;
  width: 100%;
  height: max-content;

  .header {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
  }
  img {
    max-width: 80px;
  }
  .eachProduct {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    /* border-bottom: 1px solid #dfdada; */
    padding-bottom: 0.5rem;
  }
  .info {
    display: flex;
    gap: 0.5rem;
    flex: 4;
  }
  .price {
    flex: 1;
    /* background: yellowgreen; */
    text-align: right;
  }
`;

const PaymentStyle = styled.div`
  /* display: flex; */
`;

export default CheckoutPage;
