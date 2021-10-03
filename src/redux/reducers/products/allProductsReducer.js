import { createSlice } from '@reduxjs/toolkit'
import {
    getProducts,
    deleteProduct,
} from '../../actions/products/allProductsAction'
const productsReducer = createSlice({
    name: 'productsReducer',
    initialState: {
        products: [],
        SearchContainer: [],
        loader: false,
        errors: {},
        deleteProduct: {},
    },
    reducers: {
        filteredUsers: (state, action) => {
            state.products = state.SearchContainer.filter((product) =>
                product.name.toLowerCase().includes(action.payload)
            )
        },
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            state.loader = true
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loader = false
            state.products = action.payload
            state.SearchContainer = action.payload
        },
        [getProducts.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
        [deleteProduct.pending]: (state, action) => {
            state.loader = true
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.loader = false
            state.deleteProduct = action.payload
        },
        [deleteProduct.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
    },
})
export const { filteredUsers } = productsReducer.actions
export default productsReducer.reducer
