import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "common/api/rick-and-morty.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "common/api/json-placeholder.api";

export const store = configureStore({
    reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
        [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(rickAndMortyApi.middleware)
            .concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch);
