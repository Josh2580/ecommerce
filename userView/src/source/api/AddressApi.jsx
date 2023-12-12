import { RootApi } from "./RootApi";

const AddressApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    // getOrderById: build.query({
    //   query: (id) => `users/address/`,
    //   providesTags: ["Address"],
    // }),
    // getOrderItems: build.query({
    //   query: (id) => `orders/all/${id}/items/`,
    //   providesTags: ["Order", "OrderItems"],
    // }),
    createAddress: build.mutation({
      query: ({ formData }) => ({
        url: `users/address/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Address"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateAddressMutation } = AddressApi;
