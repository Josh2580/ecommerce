import React, { useState, useEffect } from "react";
import {
  useGetProductSizesQuery,
  useGetProductQualityQuery,
} from "../../source/api/ProductsApi";
import { styled } from "styled-components";

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

const GradeNames = ({ gradeId }) => {
  const { data, isSuccess } = useGetProductQualityQuery();

  const [grade, setGrade] = useState("default");

  useEffect(() => {
    if (isSuccess) {
      // Filter the Specific Size by its ID(which is the SizeId)
      let myGradeDisplay = data.filter((grd) => grd.id == gradeId);

      // Mapping the filtered Category to get its name
      myGradeDisplay.map((finalGrade) => setGrade(finalGrade.quality));
    }
    // This useEffect functions always run when the data or categoryName is updated
  }, [data, grade]);

  return grade;
};

const Select = ({ sizes, placeHolder }) => {
  return (
    <SelectStyled>
      {sizes.map((size) => (
        <option key={size} value={size}>
          {SizeNames({ sizeId: size })}
        </option>
      ))}
    </SelectStyled>
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
    <SelectStyled>
      {/* Arrray Constructor for changing the QTY to an array of Numbers*/}
      {[...Array(size).keys()].map((x) => (
        <option key={x} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </SelectStyled>
  );
};

export const GradeSelect = ({ grade, placeHolder }) => {
  return (
    <SelectStyled>
      {grade.map((grd) => (
        <option key={grd} value={grd}>
          {GradeNames({ gradeId: grd })}
        </option>
      ))}
    </SelectStyled>
  );
};

export const SelectStyled = styled.select`
  width: 150px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  background: none;
`;
