import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const ProductSlice = createSlice({
    name: "productData",
    initialState: {
        coffeeData: [],
        singleProductData: null,
        cartData: [],
        totalAmount: 0,
        sum: 0,
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
            let sum = 0;
            const found = state.cartData.findIndex((items) => items.id === data.id)
            if (found) {
                state.cartData.push(data);
            }
            else {
                toast("Items exist in your cart 🥲 ", {
                    position: "top-center",
                    type: "success"
                })
            }
            state.totalAmount = state.cartData.reduce((accum, item) => accum + item.price, 0);
        },
        deleteCartData: (state, action) => {
            const id = action.payload
            state.cartData = state.cartData.filter((items) => items.id !== id);

        },
    }
});

export const { addCoffeeData, addSingleProductData, addCartData, deleteCartData, } = ProductSlice.actions

export default ProductSlice.reducer