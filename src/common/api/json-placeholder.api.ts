import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchPostsResponseType, PostResponseType } from "common/types/common.types";

export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (build) => {
        return {
            getPosts: build.query<FetchPostsResponseType, undefined>({
                query: (userId) => {
                    return {
                        method: "GET",
                        url: `posts`,
                        params: { userId },
                    };
                },
            }),
            getOnePost: build.query<PostResponseType, number>({
                query: (id) => {
                    return {
                        method: "GET",
                        url: `posts/${id}`,
                        params: { id },
                    };
                },
            }),
        };
    },
});

export const { useGetPostsQuery, useGetOnePostQuery } = jsonPlaceholderApi;
