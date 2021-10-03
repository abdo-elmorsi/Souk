import httpRequest from './fetcher'

export const getPendingReviews = (token) =>
    httpRequest({
        method: 'GET',
        url: '/review',
        headers: { authorization: `Bearer ${token}` },
    })

export const approveReview = (data, token) =>
    httpRequest({
        method: 'PUT',
        url: '/review',
        data: { ...data },
        headers: { authorization: `Bearer ${token}` },
    })

export const addReview = (data, slug, token) =>
    httpRequest({
        method: 'POST',
        url: `/review/${slug}`,
        data: { ...data },
        headers: { authorization: `Bearer ${token}` },
    })
