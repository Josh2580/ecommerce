import { rootApi } from "./RootApi";

const categorysApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => "categorys/main/",
    }),
    getCategoryById: build.query({
      query: ({ id }) => `categorys/main/${id}/`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCategoryQuery, useGetCategoryByIdQuery } = categorysApi;
