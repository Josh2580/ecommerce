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
  let arr = Array(size);
  // console.log(arr.length);
  arr.map((num, ind) => console.log(ind, num));

  return (
    <select>
      <option>{placeHolder}</option>
      {/* {sizes.map((size) => ( */}
      <option key={size} value={size}>
        {size}
      </option>
      {/* ))} */}
    </select>
  );
};
