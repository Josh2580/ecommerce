import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CustomersHeader = () => {
  return (
    <CustomerHeaderStyle>
      <NavLink to="/customer/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/customer/dashboard/orders">
        <span>My Orders</span>
      </NavLink>
      <NavLink>
        <span>About</span>
      </NavLink>
      <NavLink>
        <span>Contact</span>
      </NavLink>
    </CustomerHeaderStyle>
  );
};

const CustomerHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0px 0px 5px 0px #c4bfbf;
  /* margin: 1rem; */

  a {
    text-decoration: none;
    border-bottom: 1px solid #ebebeb;
    padding: 16px 0px;
    span {
      padding: 0px 10px;
    }
  }
`;

export default CustomersHeader;
