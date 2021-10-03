import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    authError: null,
    profileError: null,
    checkoutError: null,
    productError: null,
    userOrdersError: null,
    sellerError: null,
    adminError: null,
}

const errorSlice = createSlice({
    name: 'errorState',
    initialState,
    reducers: {
        setAuthErrMsg: (state, action) => {
            return {
                ...state,
                authError: action.payload,
            }
        },
        setProfileErrMsg: (state, action) => {
            return {
                ...state,
                profileError: action.payload,
            }
        },
        setCheckoutErrMsg: (state, action) => {
            return {
                ...state,
                checkoutError: action.payload,
            }
        },
        setProductErrMsg: (state, action) => {
            return {
                ...state,
                productError: action.payload,
            }
        },
        setUserOrdersErrMsg: (state, action) => {
            return {
                ...state,
                userOrdersError: action.payload,
            }
        },
        setSellerErrMsg: (state, action) => {
            return {
                ...state,
                sellerError: action.payload,
            }
        },
        setAdminErrMsg: (state, action) => {
            return {
                ...state,
                adminError: action.payload,
            }
        },
    },
})

export const {
    setAuthErrMsg,
    setProfileErrMsg,
    setCheckoutErrMsg,
    setProductErrMsg,
    setUserOrdersErrMsg,
    setSellerErrMsg,
    setAdminErrMsg,
} = errorSlice.actions

export default errorSlice.reducer
