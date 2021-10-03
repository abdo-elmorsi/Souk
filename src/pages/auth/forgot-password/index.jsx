import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import '../../../styles/auth/forgot-password.css'

export const schema = yup.object().shape({
    email: yup
        .string()
        .required('this field is required')
        .email('please enter a valid email'),
})

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => console.log(data)

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto">
                <h2 className="font-semibold text-lg mb-4">
                    Forget Your Password
                </h2>
                <p className="text-md mb-6">
                    Enter your email address and we will send you a password
                    reset email.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            {...register('email')}
                            className="password-input"
                        />
                        <span className="err-msg">
                            {errors?.email?.message}
                        </span>
                    </div>
                    <button className="password-btn">
                        Send password reset email
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
