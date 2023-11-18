import { RootApi } from "./RootApi";

const CartsApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    createCart: build.mutation({
      query: ({ formData }) => ({
        url: "cart/all/",
        method: "POST",
        body: formData,
      }),
    }),
    getCartById: build.query({
      query: (id) => `cart/all/${id}/`,
    }),
    getCartItemsFromId: build.query({
      query: (id) => `cart/all/${id}/items/`,
    }),
    createCartItems: build.mutation({
      query: ({ formData, id }) => ({
        url: `cart/all/${id}/items/`,
        method: "POST",
        body: formData,
      }),
    }),
  }),
  overrideExisting: false,
});

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

export const {
  useGetCartByIdQuery,
  useGetCartItemsFromIdQuery,
  useCreateCartMutation,
  useCreateCartItemsMutation,
} = CartsApi;
