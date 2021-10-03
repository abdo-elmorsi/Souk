import { createSlice } from '@reduxjs/toolkit'
import {
    getCategories,
    // deleteProduct,
} from '../../actions/products/allCategoriesAction'
const categoriesReducer = createSlice({
    name: 'categoriesReducer',
    initialState: {
        categories: [],
        SearchContainer: [],
        loader: false,
        errors: {},
        deleteProduct: {},
    },
    reducers: {
        filteredCategories: (state, action) => {
            state.categories = state.SearchContainer.filter((categories) =>
                categories.toLowerCase().includes(action.payload)
            )
        },
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.loader = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loader = false
            state.categories = action.payload
            state.SearchContainer = action.payload
        },
        [getCategories.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
        // [deleteProduct.pending]: (state, action) => {
        //     state.loader = true
        // },
        // [deleteProduct.fulfilled]: (state, action) => {
        //     state.loader = false
        //     state.deleteProduct = action.payload
        // },
        // [deleteProduct.rejected]: (state, action) => {
        //     state.loader = false
        //     state.errors = action.payload
        // },
    },
})
export const { filteredCategories } = categoriesReducer.actions
export default categoriesReducer.reducer
