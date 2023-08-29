import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { CategoryNames } from "../categorys/CategoryNames";
import { useNavigate } from "react-router-dom";

const Snippet = ({ props }) => {
  const navigate = useNavigate();

  const urlHandler = () => {
    navigate(`/product/${props.id}`);
    // console.log(`${id} url handler`);
  };

  return (
    <SnipStyle onClick={() => urlHandler()}>
      <img src={props.image} alt="SnipImg" />
      <div className="details">
        {/* <p className="categoryName">{CategoryNames(category)}</p> */}
        <p className="categoryName">{props.category_name}</p>

        <p className="name">{props.name}</p>
        <p className="price">{props.price}</p>
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
    </SnipStyle>
  );
};

const SnipStyle = styled.div`
  box-shadow: 0px 0px 7px -1px #96969653;
  /* text-align: center; */

  img {
    min-width: 200px;
    width: 100%;
    @media (max-width: 550px) {
      min-width: 120px;
    }
  }
  .details {
    padding: 5px 10px 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    .categoryName {
      font-size: 0.9em;
      color: gray;
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

export default Snippet;
