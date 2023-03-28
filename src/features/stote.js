import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./Categories/CategoriesSlice";
import productSlice from "./Products/ProductSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productSlice,
    },
    devTools : true
})