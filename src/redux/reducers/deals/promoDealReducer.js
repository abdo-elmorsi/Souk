import { createSlice } from '@reduxjs/toolkit'
import {
    getPromoDeal,
    getPastPromoDeal,
} from '../../actions/deals/promoDealAction'
const promoDealReducer = createSlice({
    name: 'promoDealReducer',
    initialState: {
        promoDeal: [],
        pastPromoDeal: [],
        SearchContainer: [],
        SearchContainerPastPromo: [],
        loader: false,
        errors: {},
    },
    reducers: {
        filteredPromoDeal: (state, action) => {
            state.promoDeal = state.SearchContainer.filter((promoDeal) =>
                promoDeal.title.toLowerCase().includes(action.payload)
            )
        },
        filteredPastPromoDeal: (state, action) => {
            state.pastPromoDeal = state.SearchContainerPastPromo.filter(
                (pastPromoDeal) =>
                    pastPromoDeal.title.toLowerCase().includes(action.payload)
            )
        },
    },
    extraReducers: {
        [getPromoDeal.pending]: (state, action) => {
            state.loader = true
        },
        [getPromoDeal.fulfilled]: (state, action) => {
            state.loader = false
            state.promoDeal = action.payload
            state.SearchContainer = action.payload
        },
        [getPromoDeal.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
        [getPastPromoDeal.pending]: (state, action) => {
            state.loader = true
        },
        [getPastPromoDeal.fulfilled]: (state, action) => {
            state.loader = false
            state.pastPromoDeal = action.payload
            state.SearchContainerPastPromo = action.payload
        },
        [getPastPromoDeal.rejected]: (state, action) => {
            state.loader = false
            state.errors = action.payload
        },
    },
})
export const { filteredPromoDeal, filteredPastPromoDeal } =
    promoDealReducer.actions
export default promoDealReducer.reducer
