import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchHelpers = async (
    api,
    body,
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjMwYjFiNDRjNzZlYzMyODMxZWY1MSIsImlhdCI6MTYzMDQ4NDA0NiwiZXhwIjoxNjMzMDc2MDQ2fQ.JbxDV3gooSeCTEZND_GRztuKV4ofWrGVygI8wsNgf1I'
) => {
    const res = await fetch(api, {
        method: 'post',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    })
    return await res.json()
}

export const postNewCategory = createAsyncThunk(
    'addNewCategory',
    async (FormData) => {
        const response = await fetchHelpers(
            'https://souk-team-server.herokuapp.com/api/category',
            FormData
        )
        return response
    }
)
