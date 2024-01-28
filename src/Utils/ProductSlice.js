import { createSlice } from '@reduxjs/toolkit'

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
        addCartData: (state, action) => {
            const id = action.payload;
            const selected = state.coffeeData.find((items) => {
                return items.id === id;
            })
            console.log(selected);
        }
    }
});

export const { addCoffeeData, addSingleProductData, addCartData } = ProductSlice.actions

export default ProductSlice.reducer