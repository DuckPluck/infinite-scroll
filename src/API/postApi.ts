import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<Post[], {limit:number, start:number}>({
      query: ({ limit = 10, start = 0 }) => ({
        url: '/posts',
        params:
          {
            _limit: limit,
            _start: start,
          }
      }),
    }),
    fetchPostById: build.query<Post, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});
