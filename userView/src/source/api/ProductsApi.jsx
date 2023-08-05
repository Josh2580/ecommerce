import { rootApi } from "./RootApi";

const productsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => "products/all/",
    }),
    getProductsById: build.query({
      query: ({ id }) => `products/all/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery } = productsApi;
