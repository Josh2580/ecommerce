import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { CategoryNames } from "../categorys/CategoryNames";
import { useNavigate } from "react-router-dom";

const SecondSnippet = ({ name, price, picture, category, id }) => {
  const navigate = useNavigate();

  const urlHandler = () => {
    navigate(`/product/${id}`);
    // console.log(`${id} url handler`);
  };

  return (
    <SecondSnipStyle onClick={() => urlHandler()}>
      <img src={picture} alt="SnipImg" />
      <div className="details">
        <p className="categoryName">{CategoryNames(category)}</p>

        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <div className="review">
          <div className="icon">
            <BsStarFill className="fullStar" />
            <BsStarFill className="fullStar" />
            <BsStarFill className="fullStar" />
            <BsStarHalf className="halfStar" />
            <BsStarFill className="emptyStar" />
          </div>

          <p className="reviewNumber"></p>
        </div>
      </div>
    </SecondSnipStyle>
  );
};

const SecondSnipStyle = styled.div`
  box-shadow: 0px 0px 7px -1px #96969653;
  /* text-align: center; */

  img {
    width: 100%;
  }
  .details {
    padding: 5px 10px 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    .categoryName {
      font-size: 0.9em;
      color: lightgray;
    }
    .price {
      color: purple;
    }
    .review {
      display: flex;
      padding-top: 5px;
      /* display: none; */
      /* justify-content: center; */
      gap: 0.5em;
      .icon {
        color: #ff990094;
        .emptyStar {
          color: lightgray;
        }
      }
    }
  }
`;

export default SecondSnippet;
