import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderItems: [],
    user: null,
    shippingAddress: {
        address: '',
        city: '',
        postalCode: '',
        country: '',
    },
    phoneNumber: '',
    paymentMethod: '',
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setCheckoutDetails: (state, action) => {},
        setPaymentDetails: (state, action) => {},
        setCheckoutDetailsSuccess: (state, action) => {
            return {
                ...action.payload,
            }
        },

        resetCheckout: () => {
            return {}
        },
    },
})

export const {
    setCheckoutDetails,
    setCheckoutDetailsSuccess,
    setPaymentDetails,
    resetCheckout,
} = checkoutSlice.actions

export default checkoutSlice.reducer
