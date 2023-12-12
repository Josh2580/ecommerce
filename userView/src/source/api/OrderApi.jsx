import { RootApi } from "./RootApi";

const OrderApi = RootApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: ({ formData }) => ({
        url: "orders/all/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Order", "OrderItems"],
    }),
    getOrderById: build.query({
      query: (id) => `orders/all/${id}/`,
      providesTags: ["Order", "OrderItems"],
    }),
    getOrderItems: build.query({
      query: (id) => `orders/all/${id}/items/`,
      providesTags: ["Order", "OrderItems"],
    }),
    orderAddress: build.mutation({
      query: ({ formData, id, method }) => ({
        url: `orders/all/${id}/`,
        method: method,
        body: formData,
      }),
      invalidatesTags: ["Order"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useGetOrderItemsQuery,
  useOrderAddressMutation,
} = OrderApi;
