import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [hamburger, setHamburger] = useState(true);

  const MobileNavigation = () => {
    return (
      <MobileNavigationStyle
        translate={hamburger ? "-105%" : "0px"}
        id="for_mobile_burger"
      >
        <br />
        <br />

        <NavLink>
          <span>Home</span>
        </NavLink>
        <NavLink>
          <span>Category's</span>
        </NavLink>
        <NavLink>
          <span>About</span>
        </NavLink>
        <NavLink>
          <span>Contact</span>
        </NavLink>
      </MobileNavigationStyle>
    );
  };

  const Navigation = () => {
    return (
      <NavigationStyle>
        <NavLink>Home</NavLink>
        <NavLink>Category's</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </NavigationStyle>
    );
  };

  const BurgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <HeaderStyle>
      <Left>
        <div className="the_burger" onClick={BurgerHandler}>
          {hamburger ? <HiBars3 /> : <LiaTimesSolid />}
        </div>

        <NavLink>
          <h2>LOGO</h2>
        </NavLink>
        <div className="nav">
          <Navigation />
        </div>
        <div className="mobile_nav">
          <MobileNavigation />
        </div>
      </Left>
      <Right>
        <NavLink to="/customer/dashboard">
          <AiOutlineUser className="headIcon" />
          <span>Account</span>
        </NavLink>
        <NavLink>
          <AiOutlineHeart className="headIcon" />
          <span>Wishlist</span>
        </NavLink>

        <NavLink>
          <BsCart className="headIcon" />
          <span>Cart</span>
        </NavLink>
      </Right>
    </HeaderStyle>
  );
};

const Left = styled.div`
  display: flex;
  gap: 1rem;
  a {
    text-decoration: none;
  }
  .the_burger {
    display: none;
  }
  .mobile_nav {
    display: none;
  }
  @media (max-width: 990px) {
    .nav {
      display: none;
    }
    .mobile_nav {
      display: block;
    }
    .the_burger {
      display: block;
      font-size: 25px;
      z-index: 5;
    }
  }
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    .headIcon {
      font-size: 25px;
    }
    span {
      font-size: 12px;
      visibility: visible;
    }
  }
  a:hover > span {
    visibility: visible;
  }
`;

const MobileNavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background-color: #ccc6c6;
  position: absolute;
  width: 100%;
  height: 100vh;
  max-width: 200px;
  left: 0px;
  top: 0px;
  transform: translateX(${(props) => props.translate});
  transition: transform 2s 1s ease-in-out;

  a {
    text-decoration: none;
    border-bottom: 1px solid gray;
    padding: 8px 0px;
    span {
      padding: 0px 10px;
    }
  }
`;

const NavigationStyle = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 20px;
  a {
    text-decoration: none;
  }
`;

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  background: #e7ccac;
  padding: 10px 0px;
  z-index: 4;
`;
