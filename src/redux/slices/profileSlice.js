import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfileStart: (state, action) => {},
        getProfileSuccess: (state, action) => {
            return action.payload
        },
        updateProfileInfo: (state, action) => {},
        updateProfileEmail: (state, action) => {},
        updateProfilePassword: (state, action) => {},
        updateProfilePhone: (state, action) => {},
        updateProfileAvatar: (state, action) => {},

        updateProfileSuccess: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
       

        clearProfile: (state, action) => {
            return {}
        },
    },
})

export const {
    getProfileStart,
    getProfileSuccess,
    updateProfileSuccess,
    updateProfileInfo,
    updateProfileEmail,
    updateProfilePassword,
    updateProfilePhone,
    updateProfileAvatar,
    clearProfile,
} = profileSlice.actions

export default profileSlice.reducer
