import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { PROFILE_VERIFY_EMAIL } from '../../../constants/routes'
import { history } from '../../../routes/AppRouter'
import { verifyEmail } from '../../../services/authApi'

const UpdateEmail = () => {
    const { t } = useTranslation()

    const { register, handleSubmit } = useForm()
    const { isProfileUpdate } = useSelector((state) => ({
        isProfileUpdate: state.loadingState.isProfileUpdate,
    }))

    const onSubmit = async (data) => {
        if (data.email && data.email !== '') {
            const code = await verifyEmail(data.email)
            localStorage.setItem('verificationCode', code)
            localStorage.setItem('newEmail', JSON.stringify(data.email))
            history.push(PROFILE_VERIFY_EMAIL)
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
                                    htmlFor="new-email"
                                >
                                    {t('Change_Email')}
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="email"
                                    {...register('email')}
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

export default UpdateEmail
