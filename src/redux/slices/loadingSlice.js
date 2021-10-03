import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoadingAuth: false,
    isLoadingProfile: false,
    isProfileUpdate: false,
    isLoadingCheckout: false,
    isLoadingProduct: false,
    isLoadingUserOrders: false,
    isLoadingSeller: false,
    isLoadingAdmin: false,
}

const loadingSlice = createSlice({
    name: 'loadingState',
    initialState,
    reducers: {
        isAuthenticating: (state, action) => {
            return {
                ...state,
                isLoadingAuth: action.payload,
            }
        },
        isGettingProfile: (state, action) => {
            return {
                ...state,
                isLoadingProfile: action.payload,
            }
        },
        isUpdatingProfile: (state, action) => {
            return {
                ...state,
                isProfileUpdate: action.payload,
            }
        },
        isCheckout: (state, action) => {
            return {
                ...state,
                isLoadingCheckout: action.payload,
            }
        },
        isGettingProduct: (state, action) => {
            return {
                ...state,
                isLoadingProduct: action.payload,
            }
        },
        isGettingUserOrders: (state, action) => {
            return {
                ...state,
                isLoadingUserOrders: action.payload,
            }
        },
        isSellerLoading: (state, action) => {
            return {
                ...state,
                isLoadingSeller: action.payload,
            }
        },
        isAdminLoading: (state, action) => {
            return {
                ...state,
                isLoadingAdmin: action.payload,
            }
        },
    },
})

export const {
    isAuthenticating,
    isGettingProfile,
    isUpdatingProfile,
    isCheckout,
    isGettingProduct,
    isGettingUserOrders,
    isSellerLoading,
    isAdminLoading,
} = loadingSlice.actions

export default loadingSlice.reducer
