import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RootApi = createApi({
  reducerPath: "RootApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/",
    prepareHeaders: (headers, { getState }) => {
      const { access } = getState().auth.token ? getState().auth.token : "";
      console.log(access);
      if (access) {
        // console.log(access);
        headers.set("authorization", `JWT ${access}`);
      }
      return headers;
    },
  }),
  tagTypes: ["ParentProductCategory"],

  endpoints: (builder) => ({
    postCategory: builder.mutation({
      query: ({ formData }) => ({
        url: "categorys/parent/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["ParentProductCategory"],
    }),
  }),
});

export const { usePostCategoryMutation } = RootApi;
