import React from "react";
import { Outlet } from "react-router-dom";
import CustomersHeader from "./CustomersHeader";
import { styled } from "styled-components";

const CustomerNavbar = () => {
  return (
    <CustomerNavStyle>
      <CustomersHeader />
      <Outlet />
    </CustomerNavStyle>
  );
};

const CustomerNavStyle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem;
`;

export default CustomerNavbar;
