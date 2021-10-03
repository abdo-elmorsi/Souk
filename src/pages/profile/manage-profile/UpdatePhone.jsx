import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { PROFILE_VERIFY_PHONE } from '../../../constants/routes'
import { history } from '../../../routes/AppRouter'
import { verifyPhone } from '../../../services/authApi'
import PhoneInput from '../../../Components/auth/PhoneInput'
import toast from 'react-hot-toast'

const ProfilePhone = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()
    const { isProfileUpdate, auth } = useSelector((state) => ({
        isProfileUpdate: state.loadingState.isProfileUpdate,
        auth: state.auth,
    }))

    const onSubmit = async (data) => {
        if (data.phone && data.phone.length > 6) {
            try {
                const code = await verifyPhone(data.phone, auth.token)
                localStorage.setItem('phoneCode', code)
                localStorage.setItem('newPhone', JSON.stringify(data.phone))
                history.push(PROFILE_VERIFY_PHONE)
            } catch (e) {
                toast.error(e.message)
            }
        }
    }

    return (
        <>
            {isProfileUpdate && <Loader msg="Updating..." />}
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
                                    htmlFor="new-phone"
                                >
                                    New Phone Number
                                </label>
                            </div>
                            <div className="col-span-4 self-center justify-self-center">
                                <PhoneInput control={control} />
                                {errors['phone'] && (
                                    <span className="err-msg">
                                        Enter a valid Phone
                                    </span>
                                )}
                            </div>
                        </div>
                        <button className="update-btn" type="submit">
                            Update phone
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default ProfilePhone
