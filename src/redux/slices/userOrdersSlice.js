import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const userOrdersSlice = createSlice({
    name: 'userOrders',
    initialState,
    reducers: {
        getUserOrdersStart: (state, action) => {},
        getUserOrdersSuccess: (state, action) => {
            return [...action.payload]
        },
        updateUserOrderSuccess: (state, action) => {
            return [...state, action.payload]
        },
        clearOrders: () => {
            return []
        },
    },
})

export const {
    getUserOrdersStart,
    getUserOrdersSuccess,
    updateUserOrderSuccess,
    clearOrders,
} = userOrdersSlice.actions

export default userOrdersSlice.reducer
