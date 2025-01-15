import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    regsiterUser: build.mutation({
      query: (data) => ({
        url: `/api/users`,
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `/api/users/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: `/api/users/logout`,
        method: "POST",
      }),
    }),
    udpateUserProfile: build.mutation({
      query: (data) => ({
        url: `/api/users/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getUsers: build.query({
      query: () => ({
        url: "/api/users",
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),
    getUserDetails: build.query({
      query: (id) => ({
        url: `/api/users/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/api/users/${data.userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (userId) => ({
        url: `/api/users/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRegsiterUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useUdpateUserProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} = userApiSlice;
