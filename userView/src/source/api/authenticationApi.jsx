import { rootApi } from "./RootApi";

const categorysApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    customerLogin: build.mutation({
      query: ({ formData }) => ({
        url: "categorys/main/${id}/",
        method: POST,
        body: formData,
      }),
    }),
    getCategoryById: build.query({
      query: ({ id }) => ({
        url: "categorys/main/${id}/",
        method: POST,
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCategoryQuery, useGetCategoryByIdQuery } = categorysApi;
