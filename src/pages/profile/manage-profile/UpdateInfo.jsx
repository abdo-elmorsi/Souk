import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileInfo } from '../../../redux/slices/profileSlice'
import { useTranslation } from 'react-i18next'
import Loader from '../../../Components/ui/Loader'

const UpdateInfo = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { profile, auth, isProfileUpdate } = useSelector((state) => ({
        profile: state.profile,
        auth: state.auth,
        isProfileUpdate: state.loadingState.isProfileUpdate,
    }))

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        const hasNoUpdates = Object.values(data).every(
            (prop) => prop === '' || prop.length === 0
        )
        if (!hasNoUpdates) {
            dispatch(updateProfileInfo({ data, token: auth.token }))
            reset()
        }
    }

    return (
        <>
            {isProfileUpdate && <Loader msg="updating..." />}
            {!isProfileUpdate && (
                <div className="profile-update-section bg-white rounded mt-10">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full px-4"
                    >
                        <div className="form-grid">
                            <div className="label-container">
                                <label
                                    className="form-label"
                                    htmlFor="first-name"
                                >
                                    {t('First_Name')}
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder={profile?.firstName || ''}
                                    {...register('firstName')}
                                />
                            </div>
                        </div>
                        <div className="form-grid">
                            <div className="label-container">
                                <label
                                    className="form-label"
                                    htmlFor="last-name"
                                >
                                    {t('Last_Name')}
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder={profile?.lastName || ''}
                                    {...register('lastName')}
                                />
                            </div>
                        </div>
                        <div className="form-grid">
                            <div className="label-container">
                                <label className="form-label" htmlFor="country">
                                    {t('country')}
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder={profile?.country || ''}
                                    {...register('country')}
                                />
                            </div>
                        </div>

                        <div className="form-grid">
                            <div className="label-container">
                                <label
                                    className="form-label"
                                    htmlFor="Address-1"
                                >
                                    {t('address')} 1
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder={profile?.address1 || ''}
                                    {...register('address1')}
                                />
                            </div>
                        </div>
                        <div className="form-grid">
                            <div className="label-container">
                                <label
                                    className="form-label"
                                    htmlFor="sub-address"
                                >
                                    {t('address')} 2
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder={profile?.address2 || ''}
                                    {...register('address2')}
                                />
                            </div>
                        </div>

                        <div>
                            <button className="update-btn" type="submit">
                                {t('Update_Profile')}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default UpdateInfo
