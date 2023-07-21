import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResultsResponseType, ResultResponseType } from "common/types/common.types";

export const rickAndMortyApi = createApi({
    reducerPath: "rickAndMortyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://rickandmortyapi.com/api/",
    }),
    endpoints: (build) => {
        return {
            getCharacters: build.query<FetchResultsResponseType, undefined>({
                query: () => {
                    return {
                        method: "GET",
                        url: `character`,
                    };
                },
            }),
            getOneCharacter: build.query<ResultResponseType, number>({
                query: (id) => {
                    return {
                        method: "GET",
                        url: `character/${id}`,
                        params: { id },
                    };
                },
            }),
        };
    },
});

export const { useGetCharactersQuery, useGetOneCharacterQuery } = rickAndMortyApi;
