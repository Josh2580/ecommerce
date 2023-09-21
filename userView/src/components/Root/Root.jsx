import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div>
      <Header />
      <br />
      <Outlet />
      <br />
      <h2>Footer This is the root component for Footer</h2>
    </div>
  );
};

export default Root;
