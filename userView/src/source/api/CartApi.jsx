import { RootApi } from "./RootApi";

const CartsApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    createCart: build.mutation({
      query: ({ formData }) => ({
        url: "cart/all/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Cart", "CartItems"],
    }),
    getCartById: build.query({
      query: (id) => `cart/all/${id}/`,
      providesTags: ["Cart", "CartItems"],
    }),
    getCartItemsFromId: build.query({
      query: (id) => `cart/all/${id}/items/`,
      providesTags: ["Cart", "CartItems"],
    }),
    createCartItems: build.mutation({
      query: ({ formData, id }) => ({
        url: `cart/all/${id}/items/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Cart", "CartItems"],
    }),
    updateCartItems: build.mutation({
      query: ({ formData, cart_id, item_id }) => ({
        url: `cart/all/${cart_id}/items/${item_id}/`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Cart", "CartItems"],
    }),
    removeCartItems: build.mutation({
      query: ({ cart_id, item_id }) => ({
        url: `cart/all/${cart_id}/items/${item_id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart", "CartItems"],
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
  useUpdateCartItemsMutation,
  useRemoveCartItemsMutation,
} = CartsApi;
