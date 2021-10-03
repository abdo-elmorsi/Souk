import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../../../Components/ui/Loader'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { CART, PURCHASE_HISTORY, WISHLIST } from '../../../constants/routes'
import { slideUp } from '../../../helpers/animation'
import { getUserOrdersStart } from '../../../redux/slices/userOrdersSlice'
import '../../../styles/profile/dashboard.css'

const CustomerDashboard = () => {
    const { t } = useTranslation()

    const { cart, wishlist, user, userOrders, isLoadingUserOrders } =
        useSelector((state) => ({
            user: state.auth,
            userOrders: state.userOrders,
            isLoadingUserOrders: state.loadingState.isLoadingUserOrders,
            cart: state.cart,
            wishlist: state.wishlist,
        }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (userOrders.length === 0) {
            dispatch(getUserOrdersStart(user))
        }
    }, [dispatch, user, userOrders.length])

    return (
        <div className="py-10 px-4">
            {isLoadingUserOrders && <Loader />}
            <div className="grid md:grid-cols-3 gap-10">
                <ScrollReveal variants={slideUp} className="w-full">
                    <Link
                        to={CART}
                        className="h-52 w-full inline-block p-8 gradient_1 hover:scale-110 transform transition-all rounded-md"
                    >
                        <h3 className="font-bold text-white capitalize text-2xl mb-2">
                            {cart.length} {t('Product')}
                        </h3>
                        <p className="text-gray-800 capitalize">
                            {t('In_Your_Cart')}
                        </p>
                    </Link>
                </ScrollReveal>
                <ScrollReveal variants={slideUp} className="w-full">
                    <Link
                        to={WISHLIST}
                        className="h-52 w-full p-8 inline-block rounded-md gradient_2 hover:scale-110 transform transition-all"
                    >
                        <h3 className="font-bold text-white capitalize text-2xl mb-2">
                            {wishlist.length} {t('Product')}
                        </h3>
                        <p className="text-gray-800 capitalize">
                            {t('In_Your_Wishlist')}{' '}
                        </p>
                    </Link>
                </ScrollReveal>
                <ScrollReveal variants={slideUp} className="w-full">
                    <Link
                        to={PURCHASE_HISTORY}
                        className="h-52 w-full p-8 inline-block rounded-md gradient_3 hover:scale-110 transform transition-all"
                    >
                        <h3 className="font-bold text-white capitalize text-2xl mb-2">
                            {userOrders?.length} {t('Product')}
                        </h3>
                        <p className="text-gray-800 capitalize">
                            {t('You_Ordered')}
                        </p>
                    </Link>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default CustomerDashboard
