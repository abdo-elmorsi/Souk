import axios from 'axios'
import httpRequest from './fetcher'

export const getProducts = () =>
    httpRequest({
        method: 'GET',
        url: '/product',
    })

// SELLER API

export const uploadProductImg = (formData, token) => {
    const config = {
        headers: {
            authorization: `Bearer ${token}`,
            'content-type': 'multipart/form-data',
        },
    }
    return axios.post('/upload', formData, config)
}

export const addProduct = (product, token) =>
    httpRequest({
        method: 'POST',
        url: '/product',
        data: { ...product },
        headers: { authorization: `Bearer ${token}` },
    })

export const getSellerProducts = (sellerId, token) =>
    httpRequest({
        method: 'GET',
        url: `/seller/${sellerId}`,
        headers: { authorization: `Bearer ${token}` },
    })

export const deleteProduct = (slug, token) =>
    httpRequest({
        method: 'DELETE',
        url: `/product/${slug}`,
        headers: { authorization: `Bearer ${token}` },
    })

export const editProduct = (slug, product, token) =>
    httpRequest({
        method: 'PUT',
        url: `/product/${slug}`,
        data: { ...product },
        headers: { authorization: `Bearer ${token}` },
    })
