import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import '../../../styles/auth/signup.css'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpValidation } from '../../../helpers/yupValidation'
import { useDispatch, useSelector } from 'react-redux'
import { addSellerStart } from '../../../redux/slices/adminSlice'

const SellerInfo = () => {
    const { t } = useTranslation()
    const token = useSelector((state) => state.auth.token)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(signUpValidation),
    })

    const onSubmit = async (data) => {
        dispatch(addSellerStart({ data, token }))
        reset()
    }
    return (
        <>
            <div className="bg-white shadow-xl rounded mt-20 mb-80  w-full lg:w-9/12 mx-auto">
                <div className="pt-6 px-5 pb-3 border-b border-black font-semibold">
                    {t('Seller_Info')}
                </div>
                <div className="bg-white rounded-b h-96">
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SellerInfo
