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
  }),
});

export const {
  useRegsiterUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useUdpateUserProfileMutation,
} = userApiSlice;
