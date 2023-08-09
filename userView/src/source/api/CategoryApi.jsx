import { rootApi } from "./RootApi";

const categorysApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => "categorys/main/",
    }),
    getCategoryById: build.query({
      query: ({ id }) => `categorys/main/${id}/`,
    }),
    getCategoryNames: build.query({
      query: () => `categorys/names/`,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
  useGetCategoryNamesQuery,
} = categorysApi;
