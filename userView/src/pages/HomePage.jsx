import React, { useEffect } from "react";
import Snippet from "../components/snippet";
import { styled } from "styled-components";
import { snippetProduct } from "../source/ProductSource";
import { useGetAllProductsQuery } from "../source/api/ProductsApi";

const HomePage = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <AllSnippet>
        {snippetProduct.map((product) => (
          <Snippet
            key={product.id}
            name={product.name}
            price={product.price}
            picture={product.picture}
            category={product.category}
          />
        ))}
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
