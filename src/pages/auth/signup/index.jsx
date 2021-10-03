import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { LOGIN, VERIFY_EMAIL } from '../../../constants/routes'
import { slideDown, slideUp } from '../../../helpers/animation'
import { useForm } from 'react-hook-form'
import { verifyEmail } from '../../../services/authApi'
import { history } from '../../../routes/AppRouter'
import toast from 'react-hot-toast'
import '../../../styles/auth/signup.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpValidation } from '../../../helpers/yupValidation'
import { LoadingOutlined } from '@ant-design/icons'
import { useState } from 'react'

const SignUp = () => {
    const { t } = useTranslation()

    const [verifying, setVerifying] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signUpValidation),
    })

    const onSubmit = async (data) => {
        toast('Verifying!', {
            icon: '⏳',
        })
        try {
            setVerifying(true)
            const verificationCode = await verifyEmail(
                data.firstName,
                data.email
            )
            localStorage.setItem('verificationCode', verificationCode)
            localStorage.setItem('userData', JSON.stringify(data))
            setVerifying(false)
            history.push(VERIFY_EMAIL)
        } catch (e) {
            setVerifying(false)
            toast.error(e.message)
        }
    }

    return (
        <>
            <section className={`py-20 ${verifying ? 'opacity-50' : ''}`}>
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={slideDown}
                    className="main-heading"
                >
                    {t('create account')}
                </motion.h2>
                <ScrollReveal
                    variants={slideUp}
                    className="signup-container relative"
                >
                    {verifying && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <LoadingOutlined />
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="p-8">
                        <div className="signup-grid">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    {...register('firstName')}
                                    className={`signup-input ${
                                        errors?.firstName
                                            ? 'focus:border-red-600'
                                            : 'focus:border-secondary'
                                    }`}
                                    placeholder={t('first name')}
                                />
                                <div>
                                    <span className="err-msg">
                                        {errors?.firstName?.message}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    {...register('lastName')}
                                    className={`signup-input ${
                                        errors?.lastName
                                            ? 'focus:border-red-600'
                                            : 'focus:border-secondary'
                                    }`}
                                    placeholder={t('last name')}
                                />
                                <div>
                                    <span className="err-msg">
                                        {errors?.lastName?.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                {...register('email')}
                                className={`signup-input ${
                                    errors?.email
                                        ? 'focus:border-red-600'
                                        : 'focus:border-secondary'
                                }`}
                                placeholder={t('email')}
                            />
                            <div>
                                <span className="err-msg">
                                    {errors?.email?.message}
                                </span>
                            </div>
                        </div>
                        <div className="mb-10">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                {...register('password')}
                                className={`signup-input ${
                                    errors?.password
                                        ? 'focus:border-red-600'
                                        : 'focus:border-secondary'
                                }`}
                                placeholder={t('Password')}
                            />
                            <div>
                                <span className="err-msg">
                                    {errors?.password?.message}
                                </span>
                            </div>
                        </div>

                        <div className="w-max mx-auto text-center">
                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.9 }}
                                className="submit-btn"
                            >
                                {t('create')}
                            </motion.button>
                            <p className="text-md">
                                {t('Already have an account ?')}
                                <Link to={LOGIN} className="login-link">
                                    {t('Login')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </ScrollReveal>
            </section>
        </>
    )
}

export default SignUp
