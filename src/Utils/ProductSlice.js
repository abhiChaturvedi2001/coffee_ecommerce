import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const ProductSlice = createSlice({
    name: "productData",
    initialState: {
        coffeeData: [],
        singleProductData: null,
        cartData: [],
        totalAmount: 0,
    },
    reducers: {
        addCoffeeData: (state, action) => {
            state.coffeeData = action.payload
        },
        addSingleProductData: (state, action) => {
            state.singleProductData = action.payload
        },
        addCartData: (state, action) => {
            const data = action.payload;
            const found = state.cartData.findIndex((items) => items.id === data.id);
            if (found) {
                // make a shallow copy and update the cart data 
                return { ...state, cartData: [...state.cartData, data] }
            }
            else {
                toast("Items exist in your cart 🥲 ", {
                    position: "top-center",
                    type: "success"
                })
            }
            const amount = state.cartData.reduce((accum, currentItems) => {
                return currentItems + accum;
            })
            state.totalAmount = amount;
        },
        deleteCartData: (state, action) => {
            const id = action.payload
            state.cartData = state.cartData.filter((items) => items.id !== id);

        },
    }
});

export const { addCoffeeData, addSingleProductData, addCartData, deleteCartData, } = ProductSlice.actions

export default ProductSlice.reducer