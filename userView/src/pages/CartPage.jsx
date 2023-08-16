import React from "react";
import { styled } from "styled-components";
import Product1 from "../assets/product-1.jpg";
import Product2 from "../assets/product-2.jpg";
import { SelectStyled } from "../components/select/Select";
import { ButtonStyle } from "../components/myModules/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
        <CartSummary>
          <div className="header">
            <p>Order Summary</p>
            <p>3 items</p>
          </div>
          <div className="delivery">
            <div className="deliveryInfo">
              <p>Delivery Charges</p>
              <p>$10</p>
            </div>
            <span>
              This may vary depending on the address you fill on checkout
            </span>
          </div>

          <div className="subTotal">
            <p>SubTotal</p>
            <p>5000</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>5010</p>
          </div>
          <ButtonStyle onClick={() => navigate("/checkout")}>
            Checkout
          </ButtonStyle>
        </CartSummary>
      </CartBody>
    </CartStyle>
  );
};

const CartStyle = styled.div`
  /* padding: 5rem; */
`;

const CartBody = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const CartDetails = styled.div`
  flex: 5;
  /* background: #eee7e7; */
  box-shadow: 0px 4px 7px 1px #dbdbdb;

  .header,
  .productsInfo {
    display: flex;
    background: #e2f0a6;
    justify-content: space-between;

    gap: 1rem;
    padding: 0.5rem 1rem;
    p {
      font-weight: bold;
      /* padding: 0.5rem 1rem; */
    }
    .proDetails {
      width: 350px;
    }
    .proQty,
    .proPrice,
    .proAction {
      /* background: #ebd2b1; */
      width: 100px;
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
      justify-content: space-between;

      .basicInfo {
        display: flex;
        width: 350px;
        /* align-items: center; */
        /* justify-content: space-between; */
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

  @media (max-width: 700px) {
    /* background: goldenrod; */
    .header {
      display: none;
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
        gap: 0.5rem;
        /* background-color: #f18888; */
        flex-direction: column;
        align-items: flex-start;

        .basicInfo {
          display: flex;
          width: fit-content;
          gap: 0.5rem;
          /* background-color: #f18888; */
        }
        .prodName {
          padding-bottom: 10px;
        }
        .proAction {
          display: flex;
          width: fit-content;
          gap: 1rem;
        }
        .proQty,
        .proPrice {
          /* background: #ebd2b1; */
          width: 100px;
          text-align: left;
          padding: 0px;
        }
        .remove,
        .save {
          color: #e42f2f;
          font-size: 14px;
          padding: 0px;
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
  }
`;
const CartSummary = styled.div`
  flex: 2;
  padding: 1rem 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
  .header,
  .delivery,
  .subTotal,
  .total {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid #c9c9c9;
    padding-bottom: 1rem;
  }
  .total {
    /* border: none; */
  }
  .delivery {
    flex-direction: column;
    padding-bottom: 0.5rem;
    gap: 1rem;
    .deliveryInfo {
      display: flex;
      justify-content: space-between;
    }
    span {
      font-size: 12px;
      color: #b68406;
    }
  }
  .total,
  .header {
    font-weight: bold;
    font-size: 16px;
  }
  .header {
    border-bottom: 1px solid black;
    padding: 0.5rem 0rem;
  }
`;

const QtySelectStyled = styled(SelectStyled)`
  width: 100%;
`;

// const CartStyle = styled.div``;

export default CartPage;
