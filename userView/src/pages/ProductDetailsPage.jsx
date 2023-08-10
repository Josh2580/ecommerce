import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../source/api/ProductsApi";
import ColorSnippet from "./../components/colors/ColorSnippet";
import Select, { QtySelect } from "../components/select/Select";
import ShareComp from "../components/ShareComp";
import ReviewComp from "../components/ReviewComp";

const ProductDetailsPage = () => {
  //Fetching id with params from the URL
  const { productId } = useParams();
  //Fetching Data and other state functions from  RTK Query API
  const { data, isLoading, error, isError, isSuccess } =
    useGetProductByIdQuery(productId);

  return (
    <BlogDetailStyle>
      {isLoading ? (
        <h1>Its Loading</h1>
      ) : isError ? (
        <h1>error</h1>
      ) : (
        <>
          <h1></h1>
          <Top>
            <Left>
              <img src={data.image} alt={data.name} />{" "}
            </Left>
            <Right>
              <p className="title">{data.name}</p>
              <span className="reviews">
                <ReviewComp />
              </span>
              <p className="price">${data.price}</p>
              <p className="description">
                Little Description{data.description}
              </p>
              <div className="color">
                <p className="variantTitle">Color:</p>
                <div className="eachColor">
                  {data.color.map((colorA) => (
                    <ColorSnippet key={colorA} color={colorA} />
                  ))}
                </div>
              </div>
              <div className="size">
                <p className="variantTitle">Size:</p>

                <Select
                  className="sizeSelect"
                  sizes={data.size}
                  placeHolder="select your size"
                />
              </div>
              <div className="qty">
                <p className="variantTitle">Qty:</p>

                <QtySelect size={data.quantity} placeHolder="select Quantity" />
              </div>

              <ButtonStyle>ADD TO CART</ButtonStyle>

              <ShareComp />
            </Right>
          </Top>
          <Bottom>
            <h1>bottom</h1>
          </Bottom>
        </>
      )}
    </BlogDetailStyle>
  );
};

const BlogDetailStyle = styled.div`
  /* background: lightgray; */
  min-height: 100vh;
`;

const Top = styled.div`
  /* background: gray; */
  /* padding: 1rem; */
  display: flex;
  gap: 1rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  /* background: #c0db89; */
  flex: 1;
  /* padding: 1rem; */
  img {
    width: 100%;
  }
`;

const Right = styled.div`
  /* background: cyan; */
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    font-size: 30px;
    text-transform: capitalize;
  }
  .price {
    font-size: 30px;
  }

  .description {
    line-height: 22px;
  }
  .variantTitle {
    width: 50px;
  }
  .color,
  .eachColor,
  .size,
  .qty {
    display: flex;
    align-items: center;
  }
  .eachColor {
    gap: 7px;
  }
`;

const ButtonStyle = styled.button`
  width: 200px;
  padding: 0.5rem 2rem;
  font-size: 16px;
  background: none;
`;

const Bottom = styled.div`
  /* background: yellowgreen; */
`;

export default ProductDetailsPage;
