import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginWithEmail: (state, action) => {},

        loginWithFacebook: (state, action) => {},

        signUpWithFacebook: (state, action) => {},

        registerStart: (state, action) => {},

        upgradeUserStart: (state, action) => {},
        upgradeUserSuccess: (state, action) => {
            return { ...state, ...action.payload }
        },

        logoutStart: () => {},

        loginSuccess: (state, action) => {
            return action.payload
        },

        logoutSuccess: () => {
            return initialState
        },

        registerSuccess: (state, action) => {
            return action.payload
        },
    },
})

export const {
    loginWithEmail,
    loginWithFacebook,
    signUpWithFacebook,
    registerStart,
    logoutStart,
    logoutSuccess,
    registerSuccess,
    loginSuccess,
    upgradeUserStart,
    upgradeUserSuccess,
} = authSlice.actions

export default authSlice.reducer
