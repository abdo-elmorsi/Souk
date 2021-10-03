import { call, put } from 'redux-saga/effects'
import { setUserOrdersErrMsg } from '../slices/errorSlice'
import { isGettingUserOrders } from '../slices/loadingSlice'
import toast from 'react-hot-toast'
import {
    getUserOrdersStart,
    getUserOrdersSuccess,
} from '../slices/userOrdersSlice'
import { getUserOrders } from '../../services/orderApi'

function* handleError(e) {
    yield put(isGettingUserOrders(false))
    if (e.message) {
        yield put(setUserOrdersErrMsg({ msg: e.message }))
        yield call(toast.error, e.message)
    } else {
        yield put(setUserOrdersErrMsg({ msg: 'server error' }))
    }
}

function* userOrdersSaga({ type, payload }) {
    switch (type) {
        case getUserOrdersStart.type:
            try {
                yield put(isGettingUserOrders(true))
                const orders = yield call(getUserOrders, payload, payload.token)
                yield put(getUserOrdersSuccess(orders))
                yield put(isGettingUserOrders(false))
            } catch (e) {
                yield handleError(e)
            }

            break

        default:
            return
    }
}

export default userOrdersSaga
