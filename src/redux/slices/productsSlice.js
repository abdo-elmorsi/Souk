import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductsStart: (state, action) => {},
        getProductsSuccess: (state, action) => {
            return [...action.payload]
        },
        addProductStart: (state, action) => {},
        addProductSuccess: (state, action) => {
            return [...state, action.payload]
        },
    },
})

export const {
    getProductsStart,
    getProductsSuccess,
    addProductSuccess,
    addProductStart,
} = productsSlice.actions

export default productsSlice.reducer
