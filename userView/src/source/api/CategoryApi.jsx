import { RootApi } from "./RootApi";

const categorysApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategory: build.query({
      query: () => "categorys/main/",
    }),
    getCategoryById: build.query({
      query: ({ id }) => `categorys/main/${id}/`,
    }),
    postCategory: build.mutation({
      query: ({ formData }) => ({
        url: "categorys/parent/",
        method: "POST",
        body: formData,
      }),
      prepareHeaders: (headers, { getState }) => {
        const userInfo = getState().auth.userInfo;
        const access = userInfo ? userInfo.data.access : "";

        if (access) {
          console.log(access);
          headers.set("Authorization", `JWT ${access}`);
        }

        return headers;
      },
      //  prepareHeaders: (headers, { getState }) => {
      //         const token = getState().auth.userInfo;
      //         console.log(token);

      //         Add custom headers here
      //         console.log(localStorage.getItem("userInfo"));
      //         headers.append(
      //           "Authorization",
      //           `JWT ${localStorage.getItem("userInfo")}`
      //         );
      //         return headers;
      //       },
      invalidatesTags: ["Category"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoryQuery,
  useGetCategoryByIdQuery,
  // usePostCategoryMutation,
} = categorysApi;
