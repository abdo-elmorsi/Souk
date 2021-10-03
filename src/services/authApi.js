import httpRequest from './fetcher'

export const register = ({ firstName, lastName, email, password }) =>
    httpRequest({
        method: 'POST',
        url: '/users/',
        data: { firstName, lastName, email, password },
    })

export const verifyEmail = (name, email) =>
    httpRequest({
        method: 'POST',
        url: '/users/verifyemail',
        data: { name, email },
    })

export const login = ({ email, password }) =>
    httpRequest({
        method: 'POST',
        url: '/users/login',
        data: { email, password },
    })

export const facebookLogin = (email) =>
    httpRequest({
        method: 'POST',
        url: '/users/facebooklogin',
        data: { email },
    })

export const facebookSignup = (user) =>
    httpRequest({
        method: 'POST',
        url: '/users/facebooksignup',
        data: user,
    })

// Profile Methods
export const getProfile = (user) =>
    httpRequest({
        method: 'GET',
        url: `/users/profile`,
        headers: { authorization: `Bearer ${user.token}` },
    })

export const updateUserInfo = (updates, token) =>
    httpRequest({
        method: 'PUT',
        url: `/users/profile/info`,
        data: updates,
        headers: { authorization: `Bearer ${token}` },
    })

export const updateUserEmail = (email, token) =>
    httpRequest({
        method: 'PUT',
        url: `/users/profile/email`,
        data: { email },
        headers: { authorization: `Bearer ${token}` },
    })

export const updateUserPassword = (currentPassword, newPassword, token) =>
    httpRequest({
        method: 'PUT',
        url: `/users/profile/password`,
        data: { currentPassword, newPassword },
        headers: { authorization: `Bearer ${token}` },
    })

export const updateUserPhone = (phone, token) =>
    httpRequest({
        method: 'PUT',
        url: `/users/profile/phone`,
        data: { phone },
        headers: { authorization: `Bearer ${token}` },
    })

export const verifyPhone = (phoneNumber, token) =>
    httpRequest({
        method: 'POST',
        url: '/users/verifyPhone',
        data: { phoneNumber },
        headers: { authorization: `Bearer ${token}` },
    })

export const updateUserAvatar = (avatar, token) =>
    httpRequest({
        method: 'POST',
        url: `/users/profile/avatar`,
        data: avatar,
        headers: { authorization: `Bearer ${token}` },
    })

export const upgradeUser = (role, userId, token) =>
    httpRequest({
        method: 'PUT',
        url: `/users/${userId}`,
        data: { role },
        headers: { authorization: `Bearer ${token}` },
    })

export const beSeller = (token) =>
    httpRequest({
        method: 'PUT',
        url: `/users/profile/seller`,
        headers: { authorization: `Bearer ${token}` },
    })
