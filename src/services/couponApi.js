import httpRequest from './fetcher'

export const getCoupons = (token) =>
    httpRequest({
        method: 'GET',
        url: `/copons`,
        headers: { authorization: `Bearer ${token}` },
    })

export const createCoupon = (data, token) =>
    httpRequest({
        method: 'POST',
        url: `/copons`,
        data: { ...data },
        headers: { authorization: `Bearer ${token}` },
    })

export const editCoupon = (id, data, token) =>
    httpRequest({
        method: 'PUT',
        url: `/copons/${id}`,
        data: { data },
        headers: { authorization: `Bearer ${token}` },
    })

export const deleteCoupon = (id, token) =>
    httpRequest({
        method: 'PUT',
        url: `/copons/${id}`,

        headers: { authorization: `Bearer ${token}` },
    })
