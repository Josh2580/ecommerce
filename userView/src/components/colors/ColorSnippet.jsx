import React from "react";
import { ColorNames } from "./ColorsName";

const ColorSnippet = ({ color }) => {
  return <div>{ColorNames(color)}</div>;
};

export default ColorSnippet;
