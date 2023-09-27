import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SellersHeader = (props) => {
  return (
    <SellersHeaderStyle>
      <NavLink onClick={props.onClick} to="/seller/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/wishlist">
        <span>Products</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/dashboard/orders">
        <span>Orders</span>
      </NavLink>

      <NavLink onClick={props.onClick} to="/seller/profile">
        <span>Customers</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/address">
        <span>Reports</span>
      </NavLink>
      <NavLink onClick={props.onClick} to="/seller/change-password">
        <span>Change Password</span>
      </NavLink>
      <NavLink onClick={props.onClick}>
        <span>Logout</span>
      </NavLink>
    </SellersHeaderStyle>
  );
};

export const SellersHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* font-size: 16px; */
  width: 100%;
  /* max-width: 300px; */
  /* box-shadow: 0px 0px 5px 0px #c4bfbf; */
  /* margin: 1rem; */

  a {
    text-decoration: none;
    border-top: 1px solid #ebebeb;
    padding: 10px 0px;
    span {
      padding: 0px 16px;
    }
  }
`;

export default SellersHeader;

export const SellersMainHeader = (props) => {
  return (
    <SellersMainHeaderStyle>
      <NavLink to="/seller/dashboard">
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/seller/dashboard/orders">
        <span>Products</span>
      </NavLink>
      <NavLink to="/seller/wishlist">
        <span>Orders</span>
      </NavLink>
      <NavLink to="/seller/profile">
        <span>Customers</span>
      </NavLink>
      <NavLink to="/seller/address">
        <span>Reports</span>
      </NavLink>
      <NavLink to="/seller/change-password">
        <span>Change Password</span>
      </NavLink>
      <NavLink>
        <span>Logout</span>
      </NavLink>
    </SellersMainHeaderStyle>
  );
};

const SellersMainHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  /* font-size: 16px; */
  width: 100%;
  /* max-width: 300px; */
  /* box-shadow: 0px 0px 5px 0px #c4bfbf; */
  /* margin: 1rem; */

  a {
    text-decoration: none;
    border-top: 1px solid #ebebeb;
    padding: 10px 0px;
    span {
      padding: 0px 16px;
    }
  }
`;
