import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CategorySnippet = ({ props }) => {
  const navigate = useNavigate();

  const urlHandler = () => {
    navigate(`/product/${id}`);
    // console.log(`${id} url handler`);
  };

  return (
    <SecondSnipStyle onClick={() => urlHandler()}>
      <img src={props.image} alt="SnipImg" />
      <p className="name">{props.name}</p>
    </SecondSnipStyle>
  );
};

const SecondSnipStyle = styled.div`
  box-shadow: 0px 0px 7px -1px #96969653;
  img {
    width: 100%;
    max-width: 200px;
  }
`;

export default CategorySnippet;
