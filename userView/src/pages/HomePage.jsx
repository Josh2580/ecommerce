import React, { useEffect, useState } from "react";
import Snippet from "../components/snippets/Snippet";
import { styled } from "styled-components";
import { useGetAllProductQuery } from "../source/api/ProductsApi";
import { useGetAllCategoryQuery } from "../source/api/CategoryApi";
import CategorySnippet from "../components/snippets/CategorySnippet";
import CategoryList from "../components/CategoryList";

const HomePage = () => {
  const { data, isSuccess } = useGetAllProductQuery();
  const { isSuccess: categoryIsSuccess } = useGetAllCategoryQuery();

  return (
    <div>
      <br />

      <CategorySnippetStyle>
        {categoryIsSuccess && <CategoryList />}
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
  /* display: flex; */
  /* grid-template-columns: repeat(auto-fit, minmax(50px, 80px)); */
  /* gap: 16px; */

  @media (max-width: 550px) {
    /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px; */
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
