import React from "react";
import styled from "styled-components";

const Snippet = ({ name, price, picture, category }) => {
  return (
    <SnipStyle>
      <img src={picture} alt="SnipImg" />
      <div className="details">
        <p className="name">{category}</p>

        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
    </SnipStyle>
  );
};

const SnipStyle = styled.div`
  box-shadow: 0px 0px 7px -1px #96969653;
  /* padding: 10px; */
  img {
    width: 100%;
    /* border-radius: 7px 7px 0px 0px; */
  }
  .details {
    padding: 16px;
    padding-top: 0px;
  }
`;

export default Snippet;
