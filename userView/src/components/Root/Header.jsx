import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

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

const NavigationStyle = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 20px;
  a {
    text-decoration: none;
  }
`;

// const BurgerHandler = () => {
//   opbg = document.getElementsByClassName("the_burger");
//   opbg.style;
// };

const MobileNavigation = () => {
  //   const [hamburger, setHamburger] = useState(true);

  return (
    <MobileNavigationStyle>
      <NavLink>
        {" "}
        <span>Home</span>{" "}
      </NavLink>
      <NavLink>
        {" "}
        <span>Category's</span>{" "}
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

const MobileNavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background-color: #e0e2dd;
  position: absolute;
  width: 100%;
  height: 100vh;
  max-width: 200px;
  left: 0px;
  /* transition:; */

  a {
    text-decoration: none;
    border-bottom: 1px solid gray;
    padding: 8px 0px;
    span {
      padding: 0px 10px;
    }
  }
  transform: translateX(-100px);
`;

const Header = () => {
  const [hamburger, setHamburger] = useState(true);
  const BurgerHandler = () => {
    setHamburger(!hamburger);
  };
  return (
    <HeaderStyle>
      {/* <br /> */}
      <Left>
        {/* <br /> */}
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
        <NavLink>
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
      /* position: fixed; */
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
      visibility: hidden;
    }
  }
  a:hover > span {
    visibility: visible;
  }
`;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  /* width: 100%; */
  top: 0px;
`;

export default Header;
