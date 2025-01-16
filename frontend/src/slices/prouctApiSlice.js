import { apiSlice } from "./apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({
        url: "/api/products",
      }),
      providesTags: ["Products"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/api/products/${id}`,
      }),
      providesTags: ["Product"],
    }),
    createProduct: build.mutation({
      query: () => ({
        url: `/api/products`,
        method: "POST",
      }),
      invalidatesTags: ["Products"],
    }),
    udpateProduct: build.mutation({
      query: (data) => ({
        url: `/api/products/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Products", "Product"],
    }),
    uploadProductImage: build.mutation({
      query: (data) => ({
        url: `/api/uploads`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products", "Product"],
    }),
    deleteProduct: build.mutation({
      query: (productId) => ({
        url: `/api/products/${productId}`,
        method: "DELETE",
      }),
      providesTags: ["Product"],
    }),
    createProductReview: build.mutation({
      query: (data) => ({
        url: `/api/products/${data.productId}/review`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUdpateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateProductReviewMutation,
} = productApiSlice;
