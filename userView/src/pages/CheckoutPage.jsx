import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Bootstrap files
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
//

import ShippingAddress, {
  ShippingAddressStyle,
  Group,
} from "../components/address/ShippingAddress";
import PaymentMethodComp, {
  PaymentMethodStyle,
  PayGroup,
  Methods,
} from "../components/PaymentMethodComp";
import { styled } from "styled-components";
// import Product1 from "../assets/product-1.jpg";
// import Product2 from "../assets/product-2.jpg";
import { ButtonStyle } from "../components/myModules/Button";
import { InputStyle } from "../components/myModules/Inputs";

import {
  // useGetCartItemsFromIdQuery,
  useGetCartByIdQuery,
  // useUpdateCartItemsMutation,
} from "../source/api/CartApi";
import { useOrderAddressMutation } from "../source/api/OrderApi";
import { useCreateAddressMutation } from "../source/api/AddressApi";

import { Country, State, City } from "country-state-city";

// console.log("All Countries", Country.getAllCountries());
// console.log("All States", State.getAllStates());
// console.log("Country by Code: ", Country.getCountryByCode("NG"));
// console.log("States by Country Code: ", State.getStatesOfCountry("NG"));
// console.log(
//   "Cities by Country and State Code ",
//   City.getCitiesOfState("NG", "AB"),
//   City.getCitiesOfState("NG", "LA"),
//   City.getCitiesOfState("NG", "FC")
// );
// console.log("Cities by Country Code ", City.getCitiesOfCountry("NG"));
// console.log("All Cities", City.getAllCities());

const CheckoutPage = () => {
  const { cartId } = useParams();

  const {
    data: CartItems,
    isLoading: CartIsLoading,
    error: CartError,
  } = useGetCartByIdQuery(cartId);

  const [
    createAddress,
    { data: AddressData, isLoading: AddressIsLoading, error: AddressError },
  ] = useCreateAddressMutation();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // const [order_info, setOrder_info] = useState(null);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const [directions, setDirections] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lga, setLga] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const formData = new FormData();

  // formData.append("order_info", order_info);
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("phone_number", phone_number);
  formData.append("address", address);
  formData.append("directions", directions);
  formData.append("postal_code", postal_code);
  formData.append("lga", lga);
  formData.append("city", city);
  formData.append("state", state);
  formData.append("country", country);

  const AddressHandler = async (e) => {
    e.preventDefault();

    //   let process = await createAddress({ formData, id: "138", method: "PATCH" });
    let proc = await createAddress({ formData });
    console.log(proc);
  };

  const PlaceOrderHandler = async (e) => {
    e.preventDefault();
    let proc = await createAddress({ formData });
    console.log(proc);

    // AddressHandler();
    // console.log(paymentMethod);
  };

  // console.log(first_name);
  return (
    <Container as="form" onSubmit={(e) => PlaceOrderHandler(e)}>
      <Row>
        <Col>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Delivery Details</h5>
              </Accordion.Header>
              <Accordion.Body>
                <div noValidate validated={validated}>
                  {/* <div> */}
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Phone Number</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                          aria-describedby="inputGroupPrepend"
                          required
                          defaultValue={phone_number}
                          onChange={(e) => setPhone_number(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Phone Number.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Address"
                        defaultValue={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationCustomDescription"
                    >
                      <Form.Label>Description (Optional) </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Additional instructions on delivery or address"
                        defaultValue={directions}
                        onChange={(e) => setDirections(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        required
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        required
                        defaultValue={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        required
                        defaultValue={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Country.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h5>Payment Method</h5>
              </Accordion.Header>
              <Accordion.Body>
                <div className="mb-1">
                  <Form.Check // prettier-ignore
                    as="input"
                    required
                    type={"radio"}
                    name="payment_method"
                    id={`defaultCard`}
                    label={`Credit Card`}
                    defaultChecked
                    defaultValue={"credit_card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <Form.Check // prettier-ignore
                    as="input"
                    required
                    type={"radio"}
                    name="payment_method"
                    id={`defaultDirect`}
                    label={`Direct Bank Transfer`}
                    defaultValue={"direct_bank_transfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <Form.Check // prettier-ignore
                    required
                    as="input"
                    type={"radio"}
                    name="payment_method"
                    id={`defaultCash`}
                    label={`Cash On Delivery`}
                    defaultValue={"cash_on_delivery"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg="4">
          <OrderDetailsStyle>
            <p className="header">Order Details</p>
            {CartItems &&
              CartItems.items.map((prod) => (
                <div key={prod.id} className="eachProduct">
                  <div className="info">
                    <img
                      src={"http://127.0.0.1:8000" + prod.product.image}
                      alt={prod.product.title}
                    />
                    <div>
                      <p>{prod.product.title}</p>
                      <p>Qty: {prod.quantity}</p>
                    </div>
                  </div>
                  <p className="price">{prod.sub_total}</p>
                </div>
              ))}
            {CartItems && (
              <div className="eachProduct">
                <h3>Total:</h3>
                <h3>{CartItems.grand_total}</h3>
              </div>
            )}
            <ButtonStyle width="100%">Place Order</ButtonStyle>
          </OrderDetailsStyle>
        </Col>
      </Row>
    </Container>
  );
};

const OrderDetailsStyle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 0px 4px 7px 1px #dbdbdb;
  width: 100%;
  height: max-content;

  .header {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
  }
  img {
    max-width: 80px;
  }
  .eachProduct {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    /* border-bottom: 1px solid #dfdada; */
    padding-bottom: 0.5rem;
  }
  .info {
    display: flex;
    gap: 0.5rem;
    flex: 4;
  }
  .price {
    flex: 1;
    /* background: yellowgreen; */
    text-align: right;
  }
`;

export default CheckoutPage;
