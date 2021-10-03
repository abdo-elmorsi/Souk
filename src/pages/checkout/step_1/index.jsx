import { useDispatch } from 'react-redux'
import { setCheckoutDetails } from '../../../redux/slices/checkoutSlice'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Alert, CustomDialog } from 'react-st-modal'
import VerifyPhone from '../../../Components/checkout/VerifyPhone'
import { verifyPhone } from '../../../services/authApi'
import toast from 'react-hot-toast'
import { yupResolver } from '@hookform/resolvers/yup'
import PhoneInput from '../../../Components/auth/PhoneInput'
import { checkoutValidation } from '../../../helpers/yupValidation'
import { updateProfilePhone } from '../../../redux/slices/profileSlice'

const CheckoutDetails = ({ orderDetails, profile, auth }) => {
    const [checkedPayMethod, setCheckedPayMethod] = useState(null)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(checkoutValidation),
        defaultValues: { phone: profile?.phone || '' },
    })

    const onSubmit = async (data) => {
        if (!checkedPayMethod) {
            Alert('choose a payment method')
        }

        if (profile._id && profile.phone !== data.phone) {
            try {
                const code = await verifyPhone(data.phone, auth.token)
                const result = await CustomDialog(<VerifyPhone code={code} />, {
                    title: 'Enter verification code sent to your number',
                    showCloseIcon: true,
                })

                if (result) {
                    dispatch(
                        updateProfilePhone({
                            phoneNumber: data.phone,
                            token: auth.token,
                        })
                    )
                    if (!!checkedPayMethod && !!data) {
                        const shippingAddress = {
                            country: data.country,
                            city: data.city,
                            address: data.address,
                            postalCode: data.postalCode,
                        }
                        const details = {
                            ...orderDetails,
                            shippingAddress,
                            phoneNumber: data.phone,
                            paymentMethod: checkedPayMethod,
                        }
                        dispatch(
                            setCheckoutDetails({
                                details,
                                token: orderDetails.user.token,
                            })
                        )
                    }
                }
            } catch (e) {
                toast.error(e.message)
            }
        } else {
            if (!!checkedPayMethod && !!data) {
                const shippingAddress = {
                    country: data.country,
                    city: data.city,
                    address: data.address,
                    postalCode: data.postalCode,
                }
                const details = {
                    ...orderDetails,
                    shippingAddress,
                    phoneNumber: data.phone,
                    paymentMethod: checkedPayMethod,
                }
                dispatch(
                    setCheckoutDetails({
                        details,
                        token: orderDetails.user.token,
                    })
                )
            }
        }
    }

    const paymentMethods = ['cash', 'paypal', 'card']

    return (
        <div className="leading-loose bg-white rounded shadow-xl p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-gray-800  font-semibold mb-6">
                    Customer information
                </h3>
                <div>
                    <label className="block text-sm text-gray-00">
                        Country
                    </label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        type="text"
                        defaultValue={profile?.country || ''}
                        {...register('country')}
                    />
                    <div>
                        <span className="err-msg">
                            {errors?.country?.message}
                        </span>
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-gray-00">phone</label>
                    <PhoneInput
                        control={control}
                        placeholder={profile?.phone || ''}
                    />
                    <div>
                        <span className="err-msg">
                            {errors['phone'] && (
                                <span className="err-msg">
                                    Enter a valid Phone
                                </span>
                            )}
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-sm text-gray-600">City</label>
                    <input
                        className="w-full px-2  py-2 text-gray-700 bg-gray-200 rounded"
                        type="text"
                        {...register('city')}
                    />
                    <div>
                        <span className="err-msg">{errors?.city?.message}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <label className=" block text-sm text-gray-600">
                        Address
                    </label>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        type="text"
                        defaultValue={profile?.address1 || ''}
                        {...register('address')}
                    />
                    <div>
                        <span className="err-msg">
                            {errors?.address?.message}
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-sm block text-gray-600">
                        PostalCode
                    </label>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        type="text"
                        {...register('postalCode')}
                    />
                    <div>
                        <span className="err-msg">
                            {errors?.postalCode?.message}
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-sm block text-gray-600">
                        Payment method
                    </label>
                    <div className="flex space-x-4">
                        {paymentMethods.map((method, index) => (
                            <label
                                key={`${method}-${index}`}
                                className="inline-flex items-center"
                            >
                                <input
                                    type="checkbox"
                                    className="form-checkbox"
                                    onChange={() => setCheckedPayMethod(method)}
                                    checked={checkedPayMethod === method}
                                />
                                <div>
                                    <span className="ml-2">{method}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        className="px-4 py-1 text-white font-semibold tracking-wider bg-primary hover:opacity-70  rounded"
                        type="submit"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutDetails
