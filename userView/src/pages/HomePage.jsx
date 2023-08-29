import React, { useEffect, useState } from "react";
import Snippet from "../components/snippets/Snippet";
import { styled } from "styled-components";
// import { snippetProduct } from "../source/ProductSource";
import { useGetAllProductQuery } from "../source/api/ProductsApi";

const HomePage = () => {
  const { data, error, isLoading, isSuccess } = useGetAllProductQuery();

  return (
    <div>
      <AllSnippet>
        {isSuccess ? (
          <>
            {data.map((product) => (
              <Snippet key={product.id} props={product} />
            ))}
          </>
        ) : (
          <h1>"is loading"</h1>
        )}
      </AllSnippet>
    </div>
  );
};

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
