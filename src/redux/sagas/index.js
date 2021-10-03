import { takeLatest } from 'redux-saga/effects'
import {
    registerStart,
    loginWithEmail,
    logoutStart,
    loginWithFacebook,
    signUpWithFacebook,
    upgradeUserStart,
} from '../slices/authSlice'
import { setCheckoutDetails, setPaymentDetails } from '../slices/checkoutSlice'
import {
    getProfileStart,
    updateProfileAvatar,
    updateProfileEmail,
    updateProfileInfo,
    updateProfilePassword,
    updateProfilePhone,
} from '../slices/profileSlice'
import authSaga from './authSaga'
import profileSaga from './profileSaga'
import checkoutSaga from './checkoutSaga'
import { addProductStart, getProductsStart } from '../slices/productsSlice'
import productSaga from './productSaga'
import { getUserOrdersStart } from '../slices/userOrdersSlice'
import userOrdersSaga from './userOrdersSaga'

import {
    createCategoryStart,
    delCategoryStart,
    delOrderStart,
    delProductStart,
    editProductStart,
    getAllCategoriesStart,
    getSellerCustomersStart,
    getSellerOrdersStart,
    getSellerProductsStart,
    updateOrderStart,
    updateCategoryStart,
    updateSubCategoryStart,
    getSubCategoriesStart,
    delSubCategoryStart,
    createSubCategoryStart,
    getAllReviewsStart,
    approveReviewStart,
    addReviewStart,
    getSellerStaisticsStart,
} from '../slices/sellerSlice'
import sellerSaga from './sellerSaga'
import {
    addSellerStart,
    delUserStart,
    getAdminStaisticsStart,
    getAllCouponsStart,
    getAllUserStart,
    createCouponStart,
    delCouponStart,
} from '../slices/adminSlice'
import adminSaga from './adminSaga'

function* rootSaga() {
    yield takeLatest(
        [
            registerStart.type,
            loginWithEmail.type,
            logoutStart.type,
            loginWithFacebook.type,
            signUpWithFacebook.type,
            upgradeUserStart.type,
        ],
        authSaga
    )

    yield takeLatest(
        [
            getProfileStart.type,
            updateProfileInfo.type,
            updateProfileEmail.type,
            updateProfilePhone.type,
            updateProfilePassword.type,
            updateProfileAvatar.type,
        ],
        profileSaga
    )
    yield takeLatest(
        [setCheckoutDetails.type, setPaymentDetails.type],
        checkoutSaga
    )
    yield takeLatest([getProductsStart.type, addProductStart.type], productSaga)
    yield takeLatest([getUserOrdersStart.type], userOrdersSaga)
    yield takeLatest(
        [
            getSellerProductsStart.type,
            delProductStart.type,
            editProductStart.type,
            getSellerCustomersStart.type,
            getSellerOrdersStart.type,
            delOrderStart.type,
            updateOrderStart.type,
            getAllCategoriesStart.type,
            delCategoryStart.type,
            createCategoryStart.type,
            updateCategoryStart.type,
            delSubCategoryStart.type,
            updateSubCategoryStart.type,
            getSubCategoriesStart.type,
            createSubCategoryStart.type,
            getAllReviewsStart.type,
            approveReviewStart.type,
            addReviewStart.type,
            getSellerStaisticsStart.type,
        ],
        sellerSaga
    )
    yield takeLatest(
        [
            getAllUserStart.type,
            addSellerStart.type,
            delUserStart.type,
            getAdminStaisticsStart.type,
            getAllCouponsStart.type,
            createCouponStart.type,
            delCouponStart.type,
        ],
        adminSaga
    )
}

export default rootSaga
