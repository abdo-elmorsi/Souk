import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../../../Components/ui/Loader'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { FORGOT_PASSWORD, SIGNUP } from '../../../constants/routes'
import { slideToLeft, slideToRight } from '../../../helpers/animation'
import useScrollTop from '../../../hooks/useScrollTop'
import {
    loginWithEmail,
    loginWithFacebook,
    signUpWithFacebook,
} from '../../../redux/slices/authSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginValidation } from '../../../helpers/yupValidation'
import '../../../styles/auth/login.css'

const Login = () => {
    const { t } = useTranslation()

    const currentLanguage = Cookies.get('i18next')
    useScrollTop()

    const dispatch = useDispatch()

    const isLoadingAuth = useSelector(
        (state) => state.loadingState.isLoadingAuth
    )

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginValidation),
    })

    const onSubmit = (data) => {
        dispatch(loginWithEmail(data))
    }

    return (
        <>
            {isLoadingAuth && <Loader msg="Authenticating..." />}

            <section className="py-28 overflow-hidden">
                <div className="max-w-screen-lg px-4 mx-auto">
                    <div className="grid lg:grid-cols-2  grid-cols-1">
                        <ScrollReveal
                            variants={slideToRight}
                            className={`
                         lg:border-b-0 border-b-2 border-gray-100 lg:pb-0 pb-8 
                        ${
                            currentLanguage === 'sa'
                                ? 'lg:border-l-2 lg:pl-8 ml-4'
                                : 'lg:border-r-2 lg:pr-8'
                        }
                    `}
                        >
                            <h3 className="login-heading">{t('Login')}</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        name="email"
                                        {...register('email')}
                                        id="email"
                                        className={`login-input ${
                                            errors?.email
                                                ? 'focus:border-primary'
                                                : 'focus:border-secondary'
                                        }`}
                                        placeholder={t('Email')}
                                    />
                                    <div>
                                        <span className="err-msg">
                                            {errors?.email?.message}
                                        </span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        {...register('password')}
                                        className={`login-input ${
                                            errors?.password
                                                ? 'focus:border-primary'
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
                                <div className="mb-6">
                                    <NavLink
                                        to={FORGOT_PASSWORD}
                                        className="text-md hover:text-primary font-semibold"
                                    >
                                        {t('forgot password ?')}
                                    </NavLink>
                                </div>
                                <button type="submit" className="login-btn">
                                    <span className="login-icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <span>{t('Login')}</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(loginWithFacebook())
                                    }
                                    className="login-btn"
                                >
                                    <span className="login-icon">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </span>
                                    <span>{t('login with facebook')}</span>
                                </button>
                            </form>
                        </ScrollReveal>

                        <ScrollReveal
                            variants={slideToLeft}
                            className="lg:pl-8 lg:pt-0 pt-8"
                        >
                            <div className="flex flex-col h-full justify-between">
                                <h3 className="login-heading">
                                    {t('create account')}
                                </h3>
                                <p className="login-text">
                                    {t(
                                        `Create your customer account in just few clicks! 
                                            you can register either using your e-mail address 
                                            or through your facebook account.`
                                    )}
                                </p>
                                <div>
                                    <NavLink to={SIGNUP}>
                                        <button className="login-btn">
                                            <span className="login-icon">
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                />
                                            </span>
                                            <span>
                                                {t(
                                                    'create an account via email'
                                                )}
                                            </span>
                                        </button>
                                    </NavLink>
                                    <button
                                        className="login-btn"
                                        onClick={() =>
                                            dispatch(signUpWithFacebook())
                                        }
                                    >
                                        <span className="login-icon">
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </span>
                                        <span>
                                            {t('sign up with facebook')}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
