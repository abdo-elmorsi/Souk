import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return state.some((product) => product.id === action.payload.id)
                ? state
                : [...state, { ...action.payload, qty: 1 }]
        },
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload)
        },
        addQtyItem: (state, action) => {
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        qty: product.qty + 1,
                    }
                }
                return product
            })
        },
        minusQtyItem: (state, action) => {
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        qty: product.qty - 1,
                    }
                }
                return product
            })
        },
        clearCart: () => {
            return []
        },
    },
})

export const {
    addToCart,
    removeFromCart,
    addQtyItem,
    minusQtyItem,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer
