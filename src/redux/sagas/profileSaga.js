import toast from 'react-hot-toast'
import { call, put } from 'redux-saga/effects'
import { MANAGE_PROFILE } from '../../constants/routes'
import { history } from '../../routes/AppRouter'
import {
    getProfile,
    updateUserInfo,
    updateUserEmail,
    updateUserPassword,
    updateUserAvatar,
    updateUserPhone,
} from '../../services/authApi'
import { setProfileErrMsg } from '../slices/errorSlice'
import { isGettingProfile, isUpdatingProfile } from '../slices/loadingSlice'
import {
    getProfileStart,
    getProfileSuccess,
    updateProfilePhone,
    updateProfileAvatar,
    updateProfileEmail,
    updateProfileInfo,
    updateProfilePassword,
    updateProfileSuccess,
} from '../slices/profileSlice'

function* handleError(e) {
    yield put(isGettingProfile(false))
    if (e.message) {
        yield put(isUpdatingProfile(false))
        yield put(setProfileErrMsg({ msg: e.message }))
        toast.error(e.message)
    } else {
        yield put(setProfileErrMsg({ msg: e.message }))
    }
}

function* profileSaga({ type, payload }) {
    switch (type) {
        case getProfileStart.type:
            try {
                yield put(isGettingProfile(true))
                const profile = yield call(getProfile, payload)
                yield put(isGettingProfile(false))
                yield put(getProfileSuccess(profile))
            } catch (e) {
                yield handleError(e)
                console.log(e)
            }
            break
        case updateProfileInfo.type:
            try {
                yield put(isUpdatingProfile(true))

                const infoUpdates = yield call(
                    updateUserInfo,
                    payload.data,
                    payload.token
                )
                yield put(updateProfileSuccess(infoUpdates))
                yield put(isUpdatingProfile(false))
                history.push(MANAGE_PROFILE)
                toast.success('info update success')
            } catch (e) {
                yield handleError(e)
            }
            break
        case updateProfileEmail.type:
            try {
                yield put(isUpdatingProfile(true))
                const newEmail = yield call(
                    updateUserEmail,
                    payload.email,
                    payload.token
                )
                yield put(updateProfileSuccess(newEmail))
                yield put(isUpdatingProfile(false))
                history.push(MANAGE_PROFILE)
                toast.success('Email update success')
            } catch (e) {
                yield handleError(e)
            }
            break

        case updateProfilePassword.type:
            try {
                yield put(isUpdatingProfile(true))
                yield call(
                    updateUserPassword,
                    payload.currentPassword,
                    payload.newPassword,
                    payload.token
                )
                yield put(isUpdatingProfile(false))
                history.push(MANAGE_PROFILE)
                toast.success('Password update success')
            } catch (e) {
                yield handleError(e)
            }

            break
        case updateProfilePhone.type:
            try {
                yield put(isUpdatingProfile(true))
                const newPhone = yield call(
                    updateUserPhone,
                    payload.phoneNumber,
                    payload.token
                )
                yield put(updateProfileSuccess(newPhone))
                yield put(isUpdatingProfile(false))
                //history.push(MANAGE_PROFILE)
                toast.success('Phone update success')
            } catch (e) {
                yield handleError(e)
            }
            break
        case updateProfileAvatar.type:
            try {
                yield put(isUpdatingProfile(true))
                const avatar = yield call(
                    updateUserAvatar,
                    payload.avatar,
                    payload.token
                )
                yield put(updateProfileSuccess({ avatar: { ...avatar } }))
                yield put(isUpdatingProfile(false))
                history.push(MANAGE_PROFILE)
                yield call(toast.success, 'update avatar success')
            } catch (e) {
                yield handleError(e)
            }
            break

        default:
            throw new Error(`Unexpected action type ${type}.`)
    }
}

export default profileSaga
