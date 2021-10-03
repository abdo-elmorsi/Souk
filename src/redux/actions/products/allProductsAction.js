import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ImBin } from 'react-icons/im'
import toast from 'react-hot-toast'

export const getProducts = createAsyncThunk('products', async () => {
    const response = await axios.get(
        // 'https://jsonplaceholder.typicode.com/users'
        // 'https://fakestoreapi.com/products/'
        'https://souk-team-server.herokuapp.com/api/product'
    )
    return response.data.data
})

export const deleteProduct = createAsyncThunk('deleteProduct', async () => {
    const confirm = window.confirm('Are you really want to delete this post?')
    if (confirm) {
        const response = await axios.delete(
            // `https://fakestoreapi.com/products/${id}`
            'https://fakestoreapi.com/products/6'
        )
        return response.data
    }
})

export const deleteSingleProduct = createAsyncThunk(
    'deleteProduct',
    async (id) => {
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
    }
)
