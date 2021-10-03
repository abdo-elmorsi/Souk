import { addOrders, updateToPayed } from '../../services/orderApi'
import { call, put } from 'redux-saga/effects'
import {
    setCheckoutDetails,
    setCheckoutDetailsSuccess,
    setPaymentDetails,
} from '../slices/checkoutSlice'
import { setCheckoutErrMsg } from '../slices/errorSlice'
import { isCheckout } from '../slices/loadingSlice'
import { history } from '../../routes/AppRouter'
import { CHECKOUT_CASH, CHECKOUT_PAYPAL, HOME } from '../../constants/routes'
import toast from 'react-hot-toast'
import { updateUserOrderSuccess } from '../slices/userOrdersSlice'
import { clearCart } from '../slices/cartSlice'

function* handleError(e) {
    yield put(isCheckout(false))
    if (e.message) {
        yield put(setCheckoutErrMsg({ msg: e.message }))
        yield call(toast.error, e.message)
    } else {
        yield put(setCheckoutErrMsg({ msg: 'server error' }))
    }
}

function* checkoutSaga({ type, payload }) {
    switch (type) {
        case setCheckoutDetails.type:
            try {
                yield put(isCheckout(true))
                const checkoutDetails = yield call(
                    addOrders,
                    payload.details,
                    payload.token
                )
                yield put(setCheckoutDetailsSuccess(checkoutDetails))
                yield put(updateUserOrderSuccess(checkoutDetails))
                yield put(clearCart())
                yield put(isCheckout(false))
                if (checkoutDetails.paymentMethod === 'cash') {
                    history.push(CHECKOUT_CASH)
                } else if (
                    checkoutDetails.paymentMethod === 'paypal' ||
                    checkoutDetails.paymentMethod === 'card'
                ) {
                    history.push(CHECKOUT_PAYPAL)
                }
            } catch (e) {
                yield handleError(e)
            }
            break
        case setPaymentDetails.type:
            try {
                yield put(isCheckout(true))
                const paymentDetails = yield call(
                    updateToPayed,
                    payload.paymentResult,
                    payload.orderId,
                    payload.token
                )
                yield put(setCheckoutDetailsSuccess(paymentDetails))
                yield put(isCheckout(false))
                toast.success('payement success')
                history.push(HOME)
            } catch (e) {
                yield handleError(e)
            }
            break
        default:
            return
    }
}

export default checkoutSaga
