import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3010' }),
  endpoints: (builder) => ({
    createMnemo: builder.mutation({
      query: (characters) => ({
        url: '/mnemo',
        method: 'POST',
        body: {characters},
      }),
    }),
  }),
})

export const { useCreateMnemoMutation } = apiSlice;
export default  apiSlice.reducer;
