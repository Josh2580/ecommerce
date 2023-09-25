import React from "react";
import { orderProduct } from "../../source/ProductSource";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { AccountMainHeader } from "./AccountHeader";
import { AccHeader } from "./UsersDashboard";
import { UserDiv } from "./UsersDashboard";

const Orders = () => {
  return (
    <UserDiv>
      <AccHeader>
        <AccountMainHeader />
      </AccHeader>
      <Table>
        <thead>
          <Tr>
            <th className="serialNumber">S/N</th>
            <th>OrderId</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </Tr>
        </thead>
        <tbody>
          {orderProduct.map((data, i) => (
            <Tr>
              <td className="serialNumber">{i + 1}</td>
              <td>{data.orderId}</td>
              <td>{data.price}</td>
              <td>{data.status}</td>
              {/* <td>{data.action}</td> */}
              <td>
                <tr>
                  <td>
                    <NavLink>
                      <span>Delete</span>
                    </NavLink>
                  </td>
                  <td>
                    <NavLink>
                      <span>Action</span>
                    </NavLink>
                  </td>
                </tr>
              </td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </UserDiv>
  );
};

const Tr = styled.tr`
  text-align: left;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #afacac;
  gap: 10px;

  td,
  th {
    width: 100px;
    padding: 5px 0px;
  }
  .serialNumber {
    width: 25px;
  }
`;

const Table = styled.table`
  width: 100%;
`;

const OrderStyle = styled.div`
  box-shadow: 0px 0px 5px 0px #c4bfbf;
  padding: 1rem 0rem;
  /* max-width: max-content; */
  width: 100%;
`;

export default Orders;
