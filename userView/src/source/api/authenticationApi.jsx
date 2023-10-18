import { rootApi } from "./RootApi";

const authenticationApi = rootApi.injectEndpoints({
  tagTypes: ["User"],

  endpoints: (build) => ({
    customersLogin: build.mutation({
      query: ({ formData }) => ({
        url: "auth/jwt/create/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["User"],
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

export const { useCustomersLoginMutation } = authenticationApi;
