import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../source/api/ProductsApi";
import ColorSnippet from "./../components/colors/ColorSnippet";
import Select, { QtySelect } from "../components/select/Select";

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
              <h2>{data.name}</h2>
              <span>{data.reviews}reviews with star rating icon</span>
              <p>${data.price}</p>
              <p>Little Description{data.description}</p>
              <div className="color">
                <p>color</p>
                {data.color.map((colorA) => (
                  <ColorSnippet key={colorA} color={colorA} />
                ))}
              </div>
              <div className="size">
                <Select
                  className="sizeSelect"
                  sizes={data.size}
                  placeHolder="select your size"
                />
              </div>
              <QtySelect size={5} />
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
  background: lightgray;
  min-height: 100vh;
`;

const Top = styled.div`
  background: gray;
  padding: 1rem;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  background: #c0db89;
  flex: 1;
  padding: 1rem;
  img {
    width: 100%;
  }
`;

const Right = styled.div`
  background: cyan;
  flex: 1;
  .sizeSelect {
    color: red;
    display: none;
  }
`;

const Bottom = styled.div`
  background: yellowgreen;
`;

export default ProductDetailsPage;
