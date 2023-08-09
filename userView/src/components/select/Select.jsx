import React, { useState, useEffect } from "react";
import { useGetProductSizesQuery } from "../../source/api/ProductsApi";

const SizeNames = ({ sizeId }) => {
  const { data, isSuccess } = useGetProductSizesQuery();
  const [size, setSize] = useState("default");

  useEffect(() => {
    if (isSuccess) {
      // Filter the Specific Size by its ID(which is the SizeId)
      let mySizeDisplay = data.filter((siz) => siz.id == sizeId);

      // Mapping the filtered Category to get its name
      mySizeDisplay.map((finalSize) => setSize(finalSize.size));
    }
    // This useEffect functions always run when the data or categoryName is updated
  }, [data, size]);

  return size;
};

const Select = ({ sizes, placeHolder }) => {
  return (
    <select>
      <option>{placeHolder}</option>
      {sizes.map((size) => (
        <option key={size} value={size}>
          {SizeNames({ sizeId: size })}
        </option>
      ))}
    </select>
  );
};

export default Select;

export const QtySelect = ({ size, placeHolder }) => {
  let arr = new Array(size);

  {
    /* Arrray Constructor for changing the QTY to an array of Numbers*/
  }
  // {
  //   [...Array(size).keys()].map((x) => console.log(x));
  // }

  return (
    <select>
      <option>{placeHolder}</option>
      {/* Arrray Constructor for changing the QTY to an array of Numbers*/}
      {[...Array(size).keys()].map((x) => (
        <option key={x} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>
  );
};
