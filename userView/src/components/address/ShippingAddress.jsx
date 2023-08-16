import React from "react";
import { styled } from "styled-components";
import { ButtonStyle } from "../Button";

const ShippingAddress = () => {
  return (
    <ShippingAddressStyle>
      <Left>
        <Group>
          <div className="eachInput">
            <Group></Group>
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
            // cols="30"
            // rows="10"
          ></textarea>
        </div>

        {/* <ButtonStyle width="100%">Submit</ButtonStyle> */}
      </Left>
      <Right>order summary</Right>
    </ShippingAddressStyle>
  );
};

export const ShippingAddressStyle = styled.form`
  display: flex;
  /* flex-direction: column; */
  gap: 1rem;
  padding: 1rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .eachInput {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  #orderNote {
    /* background: red; */
    max-width: 100%;
    min-width: 100%;
    min-height: 6rem;

    padding: 0.5rem;
    font-size: 16px;
    resize: none;
  }
`;
const Right = styled.div``;

export const InputStyle = styled.input`
  font-size: 16px;
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 2px;
`;

export const Group = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

export default ShippingAddress;
