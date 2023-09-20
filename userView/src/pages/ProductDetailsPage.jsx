import React, { useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../source/api/ProductsApi";
import ColorSnippet from "./../components/colors/ColorSnippet";
import Select, { GradeSelect, QtySelect } from "../components/select/Select";
import ShareComp from "../components/ShareComp";
import ReviewComp from "../components/ReviewComp";
import Description from "./../components/productInfos/Description";
import Additional from "./../components/productInfos/Additional";
import Shipping from "./../components/productInfos/Shipping";
import Reviews from "./../components/productInfos/Reviews";
import SimilarComp from "../components/SimilarComp";
import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../components/myModules/Button";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  //Fetching id with params from the URL
  const { productId } = useParams();
  //Fetching Data and other state functions from  RTK Query API
  const { data, isLoading, error, isError, isSuccess } =
    useGetProductByIdQuery(productId);
  // Product Informations State
  const [switching, setSwitching] = useState("");

  let description, additional, shipping, reviews;

  const ProductInfo = (e) => {
    setSwitching(e.target.id);
  };

  switch (switching) {
    case "descriptionId":
      description = true;
      additional = false;
      shipping = false;
      reviews = false;

      break;

    case "additionalId":
      description = false;
      additional = true;
      shipping = false;
      reviews = false;

      break;

    case "shippingId":
      description = false;
      additional = false;
      shipping = true;
      reviews = false;
      break;

    case "reviewsId":
      description = false;
      additional = false;
      shipping = false;
      reviews = true;
      break;

    default:
      description = true;
      additional = false;
      shipping = false;
      reviews = false;
      break;
  }

  return (
    <>
      {isLoading ? (
        <h1>Its Loading</h1>
      ) : isError ? (
        <h1>error</h1>
      ) : (
        <ProductDetailStyle>
          <Top>
            <Left>
              <img src={data.image} alt={data.name} />{" "}
            </Left>
            <Right>
              <p className="title">{data.title}</p>
              <span className="reviews">
                <ReviewComp />
              </span>
              <p className="price">${data.price}</p>
              <p className="description">
                Little Description{data.description}
              </p>
              {data.color.length > 0 && (
                <div className="color">
                  <p className="variantTitle">Color:</p>
                  <div className="eachColor">
                    {data.color.map((colorA) => (
                      <ColorSnippet key={colorA} color={colorA} />
                    ))}
                  </div>
                </div>
              )}
              {data.size.length > 0 && (
                <div className="size">
                  <p className="variantTitle">Size:</p>

                  <Select
                    className="sizeSelect"
                    sizes={data.size}
                    placeHolder="select your size"
                  />
                </div>
              )}

              {data.quality.length > 0 && (
                <div className="size">
                  <p className="variantTitle">Grade:</p>

                  <GradeSelect
                    className="gradeSelect"
                    grade={data.quality}
                    placeHolder="select your grade"
                  />
                </div>
              )}
              <div className="qty">
                <p className="variantTitle">Qty:</p>

                <QtySelect size={data.quantity} placeHolder="select Quantity" />
              </div>

              <ButtonStyle onClick={() => navigate("/cart")}>
                ADD TO CART
              </ButtonStyle>

              <ShareComp />
            </Right>
          </Top>
          <Bottom>
            <BottomTop>
              <BottomTopPara
                id="descriptionId"
                border={description ? "1px solid black" : "none"}
                // $border
                onClick={(e) => ProductInfo(e)}
              >
                Description
              </BottomTopPara>
              <BottomTopPara
                border={additional ? "1px solid black" : "none"}
                id="additionalId"
                onClick={(e) => ProductInfo(e)}
              >
                Additional Information
              </BottomTopPara>
              <BottomTopPara
                border={shipping ? "1px solid black" : "none"}
                id="shippingId"
                onClick={(e) => ProductInfo(e)}
              >
                Shipping & Returns
              </BottomTopPara>
              <BottomTopPara
                border={reviews ? "1px solid black" : "none"}
                id="reviewsId"
                onClick={(e) => ProductInfo(e)}
              >
                Reviews
              </BottomTopPara>
            </BottomTop>
            <BottomBottom>
              {description && <Description />} {additional && <Additional />}
              {shipping && <Shipping />} {reviews && <Reviews />}
            </BottomBottom>
            <SimilarProduct>
              <SimilarComp catId={data.category} itemId={data.id} />
            </SimilarProduct>
          </Bottom>
        </ProductDetailStyle>
      )}
    </>
  );
};

const ProductDetailStyle = styled.div`
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

const Bottom = styled.div`
  /* background: yellowgreen; */
  margin-top: 2rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 1rem; */
`;

const BottomTop = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 7px;
`;

const BottomTopPara = styled.p`
  padding: 0px 16px 7px 16px;
  border-bottom: ${(props) => props.border};
  /* background: yellow; */
`;

const BottomBottom = styled.div`
  /* background: yellowgreen; */
  border: 1px solid black;
  padding: 1rem;
`;

const SimilarProduct = styled.div``;

export default ProductDetailsPage;
