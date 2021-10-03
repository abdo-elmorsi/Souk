import httpRequest from './fetcher'

export const getAllCategory = () =>
    httpRequest({
        method: 'GET',
        url: '/category',
    })

export const createCategory = (name, token) =>
    httpRequest({
        method: 'POST',
        url: '/category',
        data: { name },
        headers: { authorization: `Bearer ${token}` },
    })

export const deleteCategory = (slug, token) =>
    httpRequest({
        method: 'DELETE',
        url: `/category/${slug}`,
        headers: { authorization: `Bearer ${token}` },
    })

export const updateCategory = (slug, name, token) =>
    httpRequest({
        method: 'PUT',
        url: `/category/${slug}`,
        data: { name },
        headers: { authorization: `Bearer ${token}` },
    })

export const getSubCategory = () =>
    httpRequest({
        method: 'GET',
        url: '/subcategory',
    })

export const createSubCategory = (name, category, token) =>
    httpRequest({
        method: 'POST',
        url: '/subcategory',
        data: { name, category },
        headers: { authorization: `Bearer ${token}` },
    })

export const deleteSubCategory = (slug, token) =>
    httpRequest({
        method: 'DELETE',
        url: `/subcategory/${slug}`,
        headers: { authorization: `Bearer ${token}` },
    })
export const updateSubCategory = (slug, name, token) =>
    httpRequest({
        method: 'PUT',
        url: `/subcategory/${slug}`,
        data: { name },
        headers: { authorization: `Bearer ${token}` },
    })
