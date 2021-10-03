import { createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
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

const helpers = async (
    api,
    body,
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjMwYjFiNDRjNzZlYzMyODMxZWY1MSIsImlhdCI6MTYzMDQ4NDA0NiwiZXhwIjoxNjMzMDc2MDQ2fQ.JbxDV3gooSeCTEZND_GRztuKV4ofWrGVygI8wsNgf1I'
) => {
    const res = await fetch(api, {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    })
    return await res.json()
}

export const postNewProductImages = createAsyncThunk(
    'addNewProductImages',
    async (file) => {
        console.log('FILES:>>>', file)
        const response = await helpers(
            'https://souk-team-server.herokuapp.com/api/product/upload',
            file
        )
        return response
    }
)

export const postNewProduct = createAsyncThunk(
    'addNewProduct',
    async (FormData) => {
        const { productName } = FormData
        const response = await fetchHelpers(
            'https://souk-team-server.herokuapp.com/api/product',
            {
                name: productName,
            }
        )
        return response
    }
)

// export const postNewProduct = createAsyncThunk(
//     'addNewProduct',
//     async (body) => {
//         const response = await fetchHelpers(
//             'https://jsonplaceholder.typicode.com/posts',
//             {
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1,
//             }
//         )
//         return response
//     }
// )
