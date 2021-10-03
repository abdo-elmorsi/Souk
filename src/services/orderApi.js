import httpRequest from './fetcher'

export const addOrders = (
    {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        phoneNumber,
        totalPrice,
    },
    token
) =>
    httpRequest({
        method: 'POST',
        url: '/orders',
        data: {
            orderItems,
            shippingAddress,
            paymentMethod,
            phoneNumber,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        },
        headers: { authorization: `Bearer ${token}` },
    })

export const updateToPayed = (paymentResult, orderId, token) =>
    httpRequest({
        method: 'PUT',
        url: `/orders/${orderId}/pay`,
        data: paymentResult,
        headers: { authorization: `Bearer ${token}` },
    })

export const getUserOrders = (user, token) =>
    httpRequest({
        method: 'GET',
        url: '/orders/myorders',
        data: user,
        headers: { authorization: `Bearer ${token}` },
    })

export const getOrderById = (orderId, token) =>
    httpRequest({
        method: 'GET',
        url: `/orders/${orderId}`,
        headers: { authorization: `Bearer ${token}` },
    })

//Seller
export const getSellerOrders = (user, token) =>
    httpRequest({
        method: 'GET',
        url: '/orders/sellerorders',
        data: user,
        headers: { authorization: `Bearer ${token}` },
    })

export const updateToDelivered = (orderId, token) =>
    httpRequest({
        method: 'PUT',
        url: `/orders/${orderId}/deliver`,
        headers: { authorization: `Bearer ${token}` },
    })

export const updateOrderStatus = (deliverStatus, orderId, token) =>
    httpRequest({
        method: 'PUT',
        url: `/orders/${orderId}/status`,
        data: { deliverStatus },
        headers: { authorization: `Bearer ${token}` },
    })

export const deleteOrder = (id, token) =>
    httpRequest({
        method: 'DELETE',
        url: `/orders/${id}`,
        headers: { authorization: `Bearer ${token}` },
    })

export const getSellerCustomers = (user, token) =>
    httpRequest({
        method: 'GET',
        url: '/orders/sellercustomers',
        data: user,
        headers: { authorization: `Bearer ${token}` },
    })

// Admin
export const getAllOrders = (token) =>
    httpRequest({
        method: 'GET',
        url: '/orders',
        headers: { authorization: `Bearer ${token}` },
    })
