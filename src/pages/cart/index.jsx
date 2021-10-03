import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../../Components/cart/CartItem'
import EmptyCart from '../../Components/cart/EmptyCart'
import { CHECKOUT, HOME } from '../../constants/routes'
import { calculateTotal } from '../../helpers/utils'
import { clearCart } from '../../redux/slices/cartSlice'
import '../../styles/cart/styles.css'

const Cart = () => {
    const { t } = useTranslation()
    const cart = useSelector((state) => state.cart)

    const subtotal = calculateTotal(
        cart.map((product) => product.price * product.qty)
    )
    const dispatch = useDispatch()

    return (
        <section className="py-20">
            <div className="max-w-screen-lg mx-auto px-2">
                {cart.length <= 0 && <EmptyCart />}
                {cart.length > 0 && (
                    <>
                        <div className="flex items-center justify-between">
                            <h3 className="cart-heading">
                                {cart.length} {t('items in your cart')}
                            </h3>
                            <button
                                onClick={() => dispatch(clearCart())}
                                className="bg-yellowGB px-4 py-1 rounded text-gray-600 hover:opacity-70 text-sm"
                            >
                                Clear Cart
                            </button>
                        </div>
                        <div className="mb-16">
                            <div className="cart-table">
                                <h4 className="justify-self-start col-span-3 table-title">
                                    {t('Items')}
                                </h4>
                                <h4 className="table-title">{t('Quantity')}</h4>
                                <h4 className="table-title">
                                    {t('Unit')} ({t('Price')})
                                </h4>
                                <h4 className="table-title">{t('Total')}</h4>
                            </div>
                            <div className="line" />
                            <div>
                                {cart.length > 0 &&
                                    cart.map((product) => (
                                        <div key={product.id} className="mb-6">
                                            <CartItem product={product} />
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="line" />
                        <div className="flex justify-end">
                            <div>
                                <h3 className="total-amount">
                                    {t('Total Amount')}:
                                    <span className="ml-6">${subtotal}</span>
                                </h3>
                                <p className="font-light text-right mb-6">
                                    {t('delivery fee not included')}
                                </p>
                                <div className="btns-container">
                                    <Link to={HOME} className="cart-btn">
                                        {t('continue shopping')}
                                    </Link>
                                    <Link
                                        to={CHECKOUT}
                                        className="cart-btn-outline"
                                    >
                                        {t('proceed to checkout')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Cart
