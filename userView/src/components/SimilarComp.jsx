import React from "react";
import { useGetAllCategoryQuery } from "../source/api/CategoryApi";
import Snippet from "./snippets/Snippet";
import { styled } from "styled-components";
import CarouselComp from "./CarouselComp";

const SimilarComp = ({ catId, itemId }) => {
  const { data, isSuccess } = useGetAllCategoryQuery();
  let FilteredCategory,
    ProductsfromFilteredCategory,
    SimilarProducts = [];
  if (isSuccess) {
    // Filtering the category from the Prop-In category id (catId)
    FilteredCategory = data.filter((cat) => cat.id == catId);

    // putting the products of the filtered category in the Product variable
    FilteredCategory.map((e) => (ProductsfromFilteredCategory = e.products));
    // filtering the remaining products to display
    SimilarProducts = ProductsfromFilteredCategory.filter(
      (prod) => prod.id != itemId
    );
  }
  // console.log(SimilarProducts);
  return (
    <div>
      <p>Similar Good Products </p>
      <CarouselComp items={SimilarProducts} />
    </div>
  );
};

export default SimilarComp;
