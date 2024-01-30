import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3010' }),
  endpoints: (builder) => ({
    createMnemo: builder.query({
      query: (characters) => ({url: `/mnemo/create/${characters}`}),
    }),
  }),
})

export const { useLazyCreateMnemoQuery } = apiSlice;

export default  apiSlice.reducer;
