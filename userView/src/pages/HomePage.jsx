import React, { useEffect, useState } from "react";
import Snippet from "../components/snippets/Snippet";
import { styled } from "styled-components";
// import { snippetProduct } from "../source/ProductSource";
import { useGetAllProductQuery } from "../source/api/ProductsApi";
import { useGetAllCategoryQuery } from "../source/api/CategoryApi";
import CategorySnippet from "../components/snippets/CategorySnippet";

const HomePage = () => {
  const { data, error, isLoading, isSuccess } = useGetAllProductQuery();
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryIsLoading,
    isSuccess: categoryIsSuccess,
  } = useGetAllCategoryQuery();

  return (
    <div>
      <h2>All Category's</h2>

      <CategorySnippetStyle>
        {categoryIsSuccess ? (
          <>
            {categoryData.map((category) => (
              <CategorySnippet key={category.id} props={category} />
            ))}
          </>
        ) : (
          <h1>Category is loading</h1>
        )}
      </CategorySnippetStyle>

      <h2>All Products</h2>
      <AllSnippet>
        {isSuccess ? (
          <>
            {data.map((product) => (
              <Snippet key={product.id} props={product} />
            ))}
          </>
        ) : (
          <h1>is loading</h1>
        )}
      </AllSnippet>
    </div>
  );
};

const CategorySnippetStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  gap: 16px;
  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
`;

const AllSnippet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }
`;

export default HomePage;
