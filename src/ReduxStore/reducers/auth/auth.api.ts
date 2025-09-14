import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com" }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { username: string; password: string }>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<{ id: string; name: string }, void>({
      query: () => "/profile",
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery } = authApi;
