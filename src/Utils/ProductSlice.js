import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const ProductSlice = createSlice({
    name: "productData",
    initialState: {
        coffeeData: [],
        singleProductData: null,
        cartData: [],
        totalAmount: 0,
        userAddress: []
    },
    reducers: {
        addCoffeeData: (state, action) => {
            state.coffeeData = action.payload
        },
        addSingleProductData: (state, action) => {
            state.singleProductData = action.payload
        },
        addDataToCart: (state, action) => {
            const data = action.payload
            state.cartData = [...state.cartData, data];
            let sum = state.cartData.reduce((accum, curreElem) => {
                return accum + curreElem.price * curreElem.quantity;
            }, 0)
            state.totalAmount = sum;
        },
        deleteItemsCart: (state, action) => {
            const flavour = action.payload;
            state.cartData = state.cartData.filter((items) => {
                if (items.flavour !== flavour) {
                    state.totalAmount -= items.price * items.quantity
                    return items;
                }
            });
        },
        addUserAddress: (state, action) => {
            state.userAddress = action.payload
        }
    }
});



export const { addCoffeeData, addSingleProductData, addUserAddress, addDataToCart, deleteItemsCart } = ProductSlice.actions

export default ProductSlice.reducer