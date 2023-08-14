import { rootApi } from "./RootApi";

const productsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query({
      query: () => "products/all/",
    }),
    getProductById: build.query({
      query: (id) => `products/all/${id}/`,
    }),
    getProductColors: build.query({
      query: () => "products/color/",
    }),
    getProductSizes: build.query({
      query: () => "products/size/",
    }),
    getProductQuality: build.query({
      query: () => "products/quality/",
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useGetProductColorsQuery,
  useGetProductSizesQuery,
  useGetProductQualityQuery,
} = productsApi;
