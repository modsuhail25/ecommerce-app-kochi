import { apiSlice } from "./apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: `/api/orders`,
        method: "POST",
        body: data,
      }),
    }),
    getOrderById: build.query({
      query: (id) => ({
        url: `/api/orders/${id}`,
      }),
    }),
    getMyOrders: build.query({
      query: () => ({
        url: `/api/orders/mine`,
      }),
    }),
    getOrders: build.query({
      query: () => ({
        url: `/api/orders`,
      }),
    }),
    deliverOrder: build.mutation({
      query: (orderId) => ({
        url: `/api/orders/${orderId}/deliver`,
        method: "PUT",
      }),
    }),
    payOrder: build.mutation({
      query: (orderId) => ({
        url: `/api/orders/${orderId}/pay`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
  usePayOrderMutation,
} = orderApiSlice;
