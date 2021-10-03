import httpRequest from './fetcher'

export const getAllUsers = (token) =>
    httpRequest({
        method: 'GET',
        url: '/users',
        headers: { authorization: `Bearer ${token}` },
    })

export const deleteUser = (id, token) =>
    httpRequest({
        method: 'DELETE',
        url: `/users/${id}`,
        headers: { authorization: `Bearer ${token}` },
    })

export const getStatistics = (token) =>
    httpRequest({
        method: 'GET',
        url: `/statistics`,
        headers: { authorization: `Bearer ${token}` },
    })

export const extraStatistics = (token) =>
    httpRequest({
        method: 'GET',
        url: `/sellerExtraStatistics`,
        headers: { authorization: `Bearer ${token}` },
    })
