import { useTranslation } from 'react-i18next'
import CheckoutItem from '../../Components/checkout/CheckoutItem'
import Container from '../../Components/ui/Container'
import { HOME } from '../../constants/routes'
import useScrollTop from '../../hooks/useScrollTop'
import { Link } from 'react-router-dom'
import '../../styles/checkout/styles.css'
import CheckoutDetails from './step_1'
import { useSelector } from 'react-redux'
import { calculateTotal } from '../../helpers/utils'
import EmptyCart from '../../Components/cart/EmptyCart'
import Loader from '../../Components/ui/Loader'
import { useEffect } from 'react'
import { getProfileStart } from '../../redux/slices/profileSlice'
import { useDispatch } from 'react-redux'

const Checkout = () => {
    const { t } = useTranslation()
    useScrollTop()

    const { cart, user, profile, isLoadingCheckout } = useSelector((state) => ({
        cart: state.cart,
        user: state.auth,
        profile: state.profile,
        isLoadingCheckout: state.loadingState.isLoadingCheckout,
    }))

    const dispatch = useDispatch()

    const subtotal = Number(
        calculateTotal(cart.map((product) => product.price * product.qty))
    )

    const totalPrice = Number((subtotal * 0.5 + subtotal + 10).toFixed(2))

    const orderDetails = {
        orderItems: cart,
        user,
        itemsPrice: subtotal,
        taxPrice: 5,
        shippingPrice: 10,
        totalPrice,
    }

    useEffect(() => {
        if (!profile._id) {
            dispatch(getProfileStart(user))
        }
    }, [profile._id, dispatch, user])

    return (
        <>
            {isLoadingCheckout && <Loader msg="loading..." />}

            <section className="py-20 ">
                {cart.length <= 0 && <EmptyCart />}
                {cart.length > 0 && (
                    <Container>
                        <div className="checkout-container">
                            <Link to={HOME} className="btn-primary">
                                {`<`} {t('continue shopping')}
                            </Link>
                            <div className="mb-6">
                                <h3 className="heading">
                                    {t('Shopping cart')}
                                </h3>
                                <p className="text-md">
                                    {t('list of items picked')}
                                </p>
                            </div>
                            <div
                                className="checkout-grid"
                                style={{ direction: 'ltr' }}
                            >
                                <div>
                                    {cart.length > 0 &&
                                        cart.map((product) => (
                                            <div key={product.id}>
                                                <CheckoutItem
                                                    product={product}
                                                />
                                            </div>
                                        ))}
                                    <div className="mt-10 ">
                                        <div className="border-b-2 border-secondary w-full mb-4"></div>
                                        <div className="grid grid-cols-2 gap-6 mb-4">
                                            <p className="font-bold">
                                                SubTotal:
                                            </p>
                                            <p className=" justify-self-end text-lg font-semibold">
                                                ${subtotal}
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6 mb-4">
                                            <p className="font-bold">Tax:</p>
                                            <p className=" justify-self-end text-lg font-semibold">
                                                $5%
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6 mb-4">
                                            <p className="font-bold">
                                                Delivery fee:
                                            </p>
                                            <p className=" justify-self-end text-lg font-semibold">
                                                $10
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6 mb-4">
                                            <p className="font-bold">Total:</p>
                                            <p className=" justify-self-end text-lg font-semibold">
                                                ${totalPrice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <CheckoutDetails
                                        orderDetails={orderDetails}
                                        auth={user}
                                        profile={profile}
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                )}
            </section>
        </>
    )
}

export default Checkout
