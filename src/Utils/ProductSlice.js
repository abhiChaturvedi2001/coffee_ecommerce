import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const ProductSlice = createSlice({
    name: "productData",
    initialState: {
        coffeeData: [],
        singleProductData: null,
        cartData: []
    },
    reducers: {
        addCoffeeData: (state, action) => {
            state.coffeeData = action.payload
        },
        addSingleProductData: (state, action) => {
            state.singleProductData = action.payload
        },
        addDataToCart: (state, action) => {
            const data = action.payload;
            state.cartData = [...state.cartData, data];
        },
        deleteItemsCart: (state, action) => {
            const id = action.payload;
            state.cartData = state.cartData.filter((items) => items.id !== id);
        }
    }
});



export const { addCoffeeData, addSingleProductData, addDataToCart, deleteItemsCart } = ProductSlice.actions

export default ProductSlice.reducer