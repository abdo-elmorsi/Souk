import { createSlice } from '@reduxjs/toolkit'
import { postNewProduct } from '../../actions/products/addNewProductAction'
const addNewProductReducer = createSlice({
    name: 'addNewProductReducer',
    initialState: {
        addNewProduct: [],
        loader: false,
        errors: {},
    },
    reducers: {},
    extraReducers: {
        [postNewProduct.pending]: (state, action) => {
            state.loader = true
        },
        [postNewProduct.fulfilled]: (state, action) => {
            state.loader = false
            state.addNewProduct = action.payload
        },
        [postNewProduct.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
    },
})
export default addNewProductReducer.reducer
