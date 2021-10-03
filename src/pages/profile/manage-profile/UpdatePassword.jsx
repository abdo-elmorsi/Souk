import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { updateProfilePassword } from '../../../redux/slices/profileSlice'

const UpdatePassword = () => {
    const { t } = useTranslation()
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const { auth, isProfileUpdate } = useSelector((state) => ({
        auth: state.auth,
        isProfileUpdate: state.loadingState.isProfileUpdate,
    }))
    const onSubmit = async (data) => {
        dispatch(
            updateProfilePassword({
                currentPassword: data.oldPassword,
                newPassword: data.newPassword,
                token: auth.token,
            })
        )
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
                                    htmlFor="new-email"
                                >
                                    {t('Current Password')}
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="password"
                                    {...register('oldPassword')}
                                />
                            </div>
                        </div>
                        <div className="form-grid">
                            <div className="label-container">
                                <label
                                    className="form-label"
                                    htmlFor="new-email"
                                >
                                    {t('New Password')}
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="password"
                                    {...register('newPassword')}
                                />
                            </div>
                        </div>

                        <div>
                            <button className="update-btn" type="submit">
                                {t('Update Password')}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default UpdatePassword
