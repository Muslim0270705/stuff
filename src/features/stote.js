import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./Categories/CategoriesSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
    },
    devTools : true
})