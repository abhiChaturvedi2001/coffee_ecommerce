import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./ProductSlice"

const Store = configureStore({
    reducer: {
        productData: coffeeReducer
    }
})

export default Store;