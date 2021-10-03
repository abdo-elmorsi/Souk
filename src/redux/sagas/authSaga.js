import { isAuthenticating } from '../slices/loadingSlice'
import { call, put } from 'redux-saga/effects'
import {
    loginWithEmail,
    logoutStart,
    logoutSuccess,
    registerStart,
    registerSuccess,
    loginSuccess,
    loginWithFacebook,
    signUpWithFacebook,
    upgradeUserStart,
    upgradeUserSuccess,
} from '../slices/authSlice'
import {
    beSeller,
    facebookLogin,
    facebookSignup,
    login,
    register,
} from '../../services/authApi'
import { clearCart } from '../slices/cartSlice'
import toast from 'react-hot-toast'
import { setAuthErrMsg } from '../slices/errorSlice'
import { clearProfile, getProfileStart } from '../slices/profileSlice'
import { signInWithFacebook } from '../../services/firebase'
import CustomToast from '../../Components/ui/CustomToast'
import { clearSeller } from '../slices/sellerSlice'
import { history } from '../../routes/AppRouter'
import { SELLER_DASHBOARD } from '../../constants/routes'
import { clearOrders } from '../slices/userOrdersSlice'

function* handleError(e) {
    yield put(isAuthenticating(false))
    if (e.message) {
        yield put(setAuthErrMsg({ msg: e.message }))
        toast.custom((t) => <CustomToast t={t} message={e.message} />)
    } else {
        yield put(setAuthErrMsg({ msg: 'server error' }))
    }
}

function* handleFirebaseError(e) {
    yield put(isAuthenticating(false))
    if (e.message) {
        yield put(setAuthErrMsg({ msg: e.message }))
        toast.custom((t) => <CustomToast t={t} message={e.message} />)
    } else if (e.code) {
        yield put(setAuthErrMsg(e.code))
        toast.custom((t) => <CustomToast t={t} message={e.code} />)
    } else {
        yield put(setAuthErrMsg({ msg: 'server error' }))
    }
}

function* authSaga({ type, payload }) {
    switch (type) {
        case registerStart.type:
            try {
                yield put(isAuthenticating(true))
                const user = yield call(register, payload)
                yield put(registerSuccess(user))
                yield put(isAuthenticating(false))
                yield put(getProfileStart(user))
                yield call(toast.success, 'sign up success')
            } catch (e) {
                yield handleError(e)
            }
            break
        case loginWithEmail.type:
            try {
                yield put(isAuthenticating(true))
                const user = yield call(login, payload)
                yield put(loginSuccess(user))
                yield put(isAuthenticating(false))
                yield put(getProfileStart(user))
                yield call(toast.success, 'login success')
            } catch (e) {
                yield handleError(e)
            }
            break
        case signUpWithFacebook.type:
            try {
                yield put(isAuthenticating(true))
                const result = yield call(signInWithFacebook)
                if (result) {
                    const userCredentials = {
                        firstName:
                            result.additionalUserInfo.profile.first_name || '',
                        lastName:
                            result.additionalUserInfo.profile.last_name || '',
                        email: result.additionalUserInfo.profile.email || '',
                        password: '',
                    }
                    const user = yield call(facebookSignup, userCredentials)
                    yield put(registerSuccess(user))
                }
                yield put(isAuthenticating(false))
                yield call(toast.success, 'signup success')
            } catch (e) {
                yield handleFirebaseError(e)
            }
            break
        case loginWithFacebook.type:
            try {
                yield put(isAuthenticating(true))
                const result = yield call(signInWithFacebook)

                if (result) {
                    const user = yield call(
                        facebookLogin,
                        result.additionalUserInfo.profile.email
                    )
                    yield put(loginSuccess(user))
                }
                yield put(isAuthenticating(false))
                yield call(toast.success, 'login success')
            } catch (e) {
                yield handleFirebaseError(e)
            }
            break

        case logoutStart.type:
            try {
                yield put(isAuthenticating(true))
                yield put(clearCart())
                yield put(clearProfile())
                yield put(clearSeller())
                yield put(clearOrders())
                yield put(logoutSuccess())

                yield put(isAuthenticating(false))
                yield call(toast.success, 'logout sucess')
            } catch (e) {
                yield handleError(e)
            }
            break

        case upgradeUserStart.type:
            try {
                yield put(isAuthenticating(true))
                const upgrades = yield call(beSeller, payload.token)

                if (upgrades.role === 'seller') {
                    yield put(upgradeUserSuccess(upgrades))
                    yield call(toast.success, 'you are now a seller')
                    history.push(SELLER_DASHBOARD)
                }
                yield put(isAuthenticating(false))
            } catch (e) {
                yield handleError(e)
            }
            break
        default:
            return
    }
}

export default authSaga
