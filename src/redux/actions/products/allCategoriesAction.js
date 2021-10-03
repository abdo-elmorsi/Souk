import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ImBin } from 'react-icons/im'
import toast from 'react-hot-toast'

export const getCategories = createAsyncThunk('categories', async () => {
    const response = await axios.get(
        'https://fakestoreapi.com/products/categories'
    )
    return response.data
})

export const deleteCategory = createAsyncThunk('deleteCategory', async (id) => {
    const confirm = window.confirm(
        'Are you really want to delete this product?'
    )
    if (confirm) {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                toast(`${json.title} is deleted.`, {
                    icon: <ImBin className="text-white w-12 h-12" />,
                    style: {
                        borderRadius: '10px',
                        background: 'red',
                        color: '#fff',
                        padding: '12px',
                    },
                })
            })
    }
})
