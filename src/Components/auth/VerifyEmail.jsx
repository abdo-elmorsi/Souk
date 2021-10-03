import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { SIGNUP } from '../../constants/routes'
import { registerStart } from '../../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { verifyEmail } from '../../services/authApi'
import toast from 'react-hot-toast'
import Loader from '../ui/Loader'

const VerifyEmail = () => {
    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const isLoadingAuth = useSelector(
        (state) => state.loadingState.isLoadingAuth
    )

    const userData = JSON.parse(localStorage.getItem('userData'))

    const onSubmit = ($data) => {
        const code = localStorage.getItem('verificationCode') || ''
        if ($data.code === code) {
            dispatch(registerStart(userData))
        } else {
            toast.error('incorrect code')
        }
    }

    const handleCodeResend = async () => {
        const verificationCode = await verifyEmail(
            userData.firstName,
            userData.email
        )
        localStorage.setItem('verificationCode', verificationCode)
        alert('code sent to your email')
    }

    return (
        <>
            {isLoadingAuth && <Loader />}
            {!isLoadingAuth && (
                <div
                    className="py-6 px-4 min-h-screen flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0,0,0,.6)' }}
                >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center bg-white shadow-md px-4 py-6 rounded-md"
                    >
                        <h3 className="text-semibold text-lg mb-4">
                            Enter the verification code sent to your email
                        </h3>
                        <input
                            {...register('code')}
                            type="text"
                            name="code"
                            id="code"
                            autoComplete="off"
                            className=" mb-4  appearance-none border-2 border-gray-200  rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none bg-white focus:border-primary"
                        />
                        <div className="flex w-full justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-primary text-white rounded"
                            >
                                Verify
                            </button>
                            <span
                                onClick={handleCodeResend}
                                className="px-4 py-2 bg-blue-400 text-white rounded"
                            >
                                resend
                            </span>
                            <Link
                                to={SIGNUP}
                                className="px-4 py-2 bg-green-400 text-white rounded"
                            >
                                back
                            </Link>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default VerifyEmail
