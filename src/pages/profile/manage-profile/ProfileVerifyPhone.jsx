import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { updateProfilePhone } from '../../../redux/slices/profileSlice'

const ProfileVerifyPhone = () => {
    const [verifyErr, setVerifyErr] = useState(false)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    const { auth, isProfileUpdate } = useSelector((state) => ({
        profile: state.profile,
        auth: state.auth,
        isProfileUpdate: state.loadingState.isProfileUpdate,
    }))

    const onSubmit = (data) => {
        const code = localStorage.getItem('phoneCode') || ''
        if (data.code === code) {
            const phoneNumber = JSON.parse(localStorage.getItem('newPhone'))
            dispatch(updateProfilePhone({ phoneNumber, token: auth.token }))
        } else {
            setVerifyErr(true)
        }
    }

    return (
        <>
            {isProfileUpdate && <Loader msg="updating..." />}
            {!isProfileUpdate && (
                <div className="profile-update-section bg-white rounded my-10">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full px-4"
                    >
                        <div
                            className={`border  p-4 text-center ${
                                verifyErr
                                    ? 'border-red-400'
                                    : 'border-green-400'
                            }`}
                        >
                            <h3
                                className={`font-semibold  text-lg ${
                                    verifyErr
                                        ? 'text-red-400'
                                        : 'text-green-400'
                                }`}
                            >
                                {verifyErr
                                    ? 'Verification Code is Incorrect'
                                    : 'Verification code was sent to the new phone'}
                            </h3>
                        </div>
                        <div className="my-4">
                            <div className=" mb-4">
                                <label
                                    className="font-semibold"
                                    htmlFor="new-email"
                                >
                                    Enter Verification Code
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="text"
                                    {...register('code')}
                                />
                            </div>
                        </div>

                        <div>
                            <button className="update-btn" type="submit">
                                verify
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default ProfileVerifyPhone
