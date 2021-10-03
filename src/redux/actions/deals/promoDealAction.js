import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPromoDeal = createAsyncThunk('promoDeal', async () => {
    const response = await axios.get('https://fakestoreapi.com/products/')
    return response.data
})

export const getPastPromoDeal = createAsyncThunk('pastPromoDeal', async () => {
    const response = await axios.get('https://fakestoreapi.com/products/')
    return response.data
})
