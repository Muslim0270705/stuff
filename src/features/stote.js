import {configureStore} from "@reduxjs/toolkit/";
import categoriesSlice from "./Categories/CategoriesSlice";
import productSlice from "./Products/ProductSlice";
import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice,
        [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools : true
})