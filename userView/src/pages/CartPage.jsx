import React from "react";
import { styled } from "styled-components";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import { SelectStyled } from "../components/select/Select";

const products = [
  {
    name: "Kids School Bag /Backpack and more",
    image: Product1,
    color: "blue",
    size: " medium",
    price: 1000,
    quantity: 1,
  },
  {
    name: "Adult clothinf and accessories",
    image: Product2,
    color: "pink",
    size: " large",
    price: 2000,
    quantity: 2,
  },
];

const CartPage = () => {
  return (
    <CartStyle>
      <button>Continue Shopping</button>
      <CartBody>
        <CartDetails>
          <div className="header">
            <p className="proDetails">Product Details</p>
            <p className="proQty">Quantity</p>
            <p className="proPrice">Price</p>
            <p className="proAction">Action</p>
          </div>
          <div className="productsInfo ">
            {products.map((prod) => (
              <div className="eachProd">
                <div className="basicInfo">
                  <img src={prod.image} alt={prod.name} />
                  <div className="prodVariant ">
                    <p className="prodName ">{prod.name}</p>
                    <p>color: {prod.color}</p>
                    <p>size: {prod.size}</p>
                  </div>
                </div>
                <p className="proQty">
                  {/* {prod.quantity} */}
                  <QtySelectStyled>
                    {/* Arrray Constructor for changing the QTY to an array of Numbers*/}
                    {[...Array(prod.quantity).keys()].map((x) => (
                      <option key={x} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </QtySelectStyled>
                </p>
                <p className="proPrice">{prod.price}</p>
                <div className="proAction">
                  <p className="remove">Remove item</p>
                  <p className="save">Save for Later</p>
                </div>
              </div>
            ))}
          </div>
        </CartDetails>
        <CartSummary>SUMMARY</CartSummary>
      </CartBody>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  padding: 5rem;
`;

const CartBody = styled.div`
  display: flex;
  gap: 1rem;
  box-shadow: 2 2 5 2 black;
  /* background: yellow; */
`;
const CartDetails = styled.div`
  flex: 5;
  /* background: #eee7e7; */
  box-shadow: 0px 4px 7px 1px #dbdbdb;

  .header,
  .productsInfo {
    display: flex;
    background: #e2f0a6;
    gap: 1rem;
    padding: 0.5rem 1rem;
    p {
      font-weight: bold;
      /* padding: 0.5rem 1rem; */
    }
    .proDetails {
      width: 400px;
    }
    .proQty,
    .proPrice,
    .proAction {
      /* background: #ebd2b1; */
      width: 120px;
      text-align: center;
      .remove,
      .save {
        color: #e42f2f;
        font-size: 14px;
        padding-bottom: 5px;
      }
    }
  }

  .productsInfo {
    flex-direction: column;
    padding: 1rem 1rem;
    /* display: flex; */
    background: none;

    gap: 1rem;

    .eachProd {
      display: flex;
      border-top: 1px solid #cfcdcd;
      padding-top: 1rem;
      gap: 1rem;
      align-items: center;
      .basicInfo {
        display: flex;
        width: 400px;
        /* align-items: center; */
        gap: 0.5rem;
        /* .prodVariant {
          display: flex;
          flex-direction: column;
        } */
      }
      .prodName {
        padding-bottom: 10px;
      }
    }
    p {
      font-weight: lighter;
      padding: 0rem;
    }
    img {
      max-width: 100px;
    }
  }
`;
const CartSummary = styled.div`
  flex: 2;
  background: #c98888;
`;

const QtySelectStyled = styled(SelectStyled)`
  width: 100%;
`;

// const CartStyle = styled.div``;

export default CartPage;
