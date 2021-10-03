import { createSlice } from '@reduxjs/toolkit'
import { getBrands } from '../../actions/products/allBrandAction'
const brandsReducer = createSlice({
    name: 'brandsReducer',
    initialState: {
        brands: [],
        SearchContainer: [],
        loader: false,
        errors: {},
        deleteProduct: {},
    },
    reducers: {
        filteredBrands: (state, action) => {
            state.brands = state.SearchContainer.filter((brand) =>
                brand.title.toLowerCase().includes(action.payload)
            )
        },
    },
    extraReducers: {
        [getBrands.pending]: (state, action) => {
            state.loader = true
        },
        [getBrands.fulfilled]: (state, action) => {
            state.loader = false
            state.brands = action.payload
            state.SearchContainer = action.payload
        },
        [getBrands.rejected]: (state, action) => {
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
export const { filteredBrands } = brandsReducer.actions
export default brandsReducer.reducer
