import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductsRates = createAsyncThunk('productRate', async () => {
    const response = await axios.get('https://fakestoreapi.com/products/')
    return response.data
})

export const getSingleProductRate = createAsyncThunk(
    'getSingleProductRate',
    async (id) => {
        const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
        )
        return response.data
    }
)
