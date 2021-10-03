import { call, put } from 'redux-saga/effects'

import toast from 'react-hot-toast'
import {
    delUserStart,
    delUserSuccess,
    getAllUserStart,
    getAllUserSuccess,
    addSellerStart,
    getAdminStaisticsStart,
    getAdminStaisticsSuccess,
    getAllCouponsStart,
    getAllCouponsSuccess,
    createCouponStart,
    createCouponSuccess,
    delCouponStart,
    delCouponSuccess,
} from '../slices/adminSlice'
import { deleteUser, getAllUsers } from '../../services/adminApi'
import { isAdminLoading } from '../slices/loadingSlice'
import { setAdminErrMsg } from '../slices/errorSlice'
import { upgradeUser, register } from '../../services/authApi'
import { getSellerProducts } from '../../services/productApi'
import { getStatistics } from '../../services/adminApi'
import { getSellerProductsSuccess } from '../slices/sellerSlice'
import {
    createCoupon,
    deleteCoupon,
    getCoupons,
} from '../../services/couponApi'
import { history } from '../../routes/AppRouter'
import { ADMIN_ALL_COUPONS } from '../../constants/routes'

function* handleError(e) {
    yield put(isAdminLoading(false))
    if (e.message) {
        yield put(setAdminErrMsg({ msg: e.message }))
        toast.error(e.message)
    } else {
        yield put(setAdminErrMsg({ msg: 'server error' }))
    }
}

function* adminSaga({ type, payload }) {
    switch (type) {
        case getAllUserStart.type:
            try {
                yield put(isAdminLoading(true))
                const users = yield call(getAllUsers, payload.token)
                yield put(getAllUserSuccess(users))
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case delUserStart.type:
            try {
                yield put(isAdminLoading(true))
                const res = yield call(deleteUser, payload.id, payload.token)
                if (res.message) {
                    yield put(delUserSuccess(payload.id))
                    toast.success(res.message)
                }
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case addSellerStart.type:
            try {
                yield put(isAdminLoading(true))
                const user = yield call(register, payload.data)
                if (user._id) {
                    const seller = yield call(
                        upgradeUser,
                        'seller',
                        user._id,
                        payload.token
                    )
                    if (seller?._id) {
                        toast.success(`seller ${seller.firstName} was created`)
                    }
                }
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case getAdminStaisticsStart.type:
            try {
                yield put(isAdminLoading(true))
                const stats = yield call(getStatistics, payload.token)
                const products = yield call(
                    getSellerProducts,
                    payload.sellerId,
                    payload.token
                )
                yield put(getAdminStaisticsSuccess(stats))
                yield put(getSellerProductsSuccess(products.data))
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case getAllCouponsStart.type:
            try {
                yield put(isAdminLoading(true))
                const coupons = yield call(getCoupons, payload.token)
                yield put(getAllCouponsSuccess(coupons))
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case createCouponStart.type:
            try {
                yield put(isAdminLoading(true))
                const coupons = yield call(
                    createCoupon,
                    payload.data,
                    payload.token
                )
                yield put(createCouponSuccess(coupons))
                toast.success('coupon created')
                history.push(ADMIN_ALL_COUPONS)
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        case delCouponStart.type:
            try {
                yield put(isAdminLoading(true))
                const coupon = yield call(
                    deleteCoupon,
                    payload.id,
                    payload.token
                )
                yield put(delCouponSuccess(coupon._id))
                toast.success('coupon deleted')
                yield put(isAdminLoading(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        default:
            throw new Error(`Unexpected action type ${type}.`)
    }
}

export default adminSaga
