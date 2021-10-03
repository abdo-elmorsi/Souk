import { createSlice } from '@reduxjs/toolkit'
import {
    getProductsRates,
    getSingleProductRate,
} from '../../actions/products/productRateAction'
const productsRatesReducer = createSlice({
    name: 'productsRatesReducer',
    initialState: {
        productsRates: [],
        SearchContainer: [],
        loader: false,
        errors: {},
        productRate: {},
    },
    reducers: {
        filteredUsers: (state, action) => {
            state.products = state.SearchContainer.filter((product) =>
                product.title.toLowerCase().includes(action.payload)
            )
        },
    },
    extraReducers: {
        [getProductsRates.pending]: (state, action) => {
            state.loader = true
        },
        [getProductsRates.fulfilled]: (state, action) => {
            state.loader = false
            state.productsRates = action.payload
            state.SearchContainer = action.payload
        },
        [getProductsRates.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
        [getSingleProductRate.pending]: (state, action) => {
            state.loader = true
        },
        [getSingleProductRate.fulfilled]: (state, action) => {
            state.loader = false
            state.productRate = action.payload
        },
        [getSingleProductRate.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
    },
})
export const { filteredUsers } = productsRatesReducer.actions
export default productsRatesReducer.reducer
