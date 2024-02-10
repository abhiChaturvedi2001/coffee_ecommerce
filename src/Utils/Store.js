import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./ProductSlice"
import userSlice from "./userSlice";

const Store = configureStore({
    reducer: {
        productData: coffeeReducer,
        user: userSlice
    }
})

export default Store;