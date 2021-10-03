import { useTranslation } from 'react-i18next'
import OrdersList from '../../../Components/seller/OrdersList'
// import verify from '../../../assets/verify.png'
import SLineChart from '../../../Components/charts/SLineChart'
import SAreaChart from '../../../Components/charts/SAreaChart'
import SBarChart from '../../../Components/charts/SBarChart'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import { SELLER_PRODUCTS_REVIEWS } from '../../../constants/routes'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { getSellerStaisticsStart } from '../../../redux/slices/sellerSlice'
import { useEffect } from 'react'
import Loader from '../../../Components/ui/Loader'

const SellerDashboard = () => {
    const { t } = useTranslation()

    const { sellerStatistics, auth, isLoadingSeller, sellerError } =
        useSelector((state) => ({
            allOrders: state.seller.allOrders,
            auth: state.auth,
            sellerStatistics: state.seller.sellerStatistics,
            isLoadingSeller: state.loadingState.isLoadingSeller,
            sellerError: state.errorState.sellerError,
        }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(sellerStatistics).length === 0) {
            dispatch(getSellerStaisticsStart({ token: auth.token }))
        }
    }, [sellerStatistics, auth.token, dispatch])

    return (
        <div className="py-10 md:px-4">
            {isLoadingSeller && !sellerError && <Loader />}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white shadow-md rounded-md">
                    <h3 className="font-bold p-3 text-secondary capitalize text-2xl mb-2">
                        {sellerStatistics?.addedProducts || 0}
                        <span className="mx-2"> {t('added products')} </span>
                    </h3>
                    <div style={{ direction: 'ltr' }}>
                        <SLineChart />
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md ">
                    <h3 className="font-bold p-3 text-secondary capitalize text-2xl mb-2">
                        {sellerStatistics?.soldProducts || 0}
                        <span className="mx-2"> {t('Sold Products')} </span>
                    </h3>
                    <div style={{ direction: 'ltr' }}>
                        <SAreaChart />
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md ">
                    <h3 className="font-bold p-3 text-secondary capitalize text-2xl mb-2">
                        {sellerStatistics?.returnedProducts || 0}
                        <span className="mx-2"> {t('returned products')}</span>
                    </h3>
                    <div style={{ direction: 'ltr' }}>
                        <SBarChart />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                <ScrollReveal variants={slideUp} className="md:col-span-2">
                    <OrdersList orders={sellerStatistics.orders} />
                </ScrollReveal>
                {/* <ScrollReveal
                    variants={slideUp}
                    className="rounded shadow-md bg-white items-center flex flex-col justify-center"
                >
                    <div className="mb-4">
                        <img src={verify} alt="verify" />
                    </div>
                    <Link
                        to={SHOP_VERIFICATION}
                        className="hover:bg-purple-500 shadow  capitalize font-bold rounded px-6 py-2 bg-primary text-white"
                    >
                        {t('Verify_Now')}
                    </Link>
                </ScrollReveal> */}
                {/* Reviews */}

                {/* <ScrollReveal
                    variants={slideUp}
                    className="rounded shadow-md text-center md:self-start bg-white items-center py-6 px-4 flex justify-center"
                >
                    <div>
                        <h3 className="font-bold text-xl capitalize mb-2">
                            {t('Payment')}
                        </h3>
                        <p className="mb-4 capitalize">
                            {t('Configure_Your_Payment_Method')}
                        </p>
                        <button className="bg-gray-200 hover:bg-purple-500 shadow capitalize text-black font-bold rounded px-6 py-2 hover:bg-purple-500 hover:text-white">
                            {t('Configure_Now')}
                        </button>
                    </div>
                </ScrollReveal> */}
                <ScrollReveal
                    variants={slideUp}
                    className="rounded shadow-md bg-white items-center flex flex-col justify-center"
                >
                    <div className="mb-4 text-center mb-2 p-4">
                        <h2 className="text-lg mb-2">
                            {sellerStatistics?.penddingReviews} Pending reviews
                        </h2>
                        <span className="text-5xl text-yellowGB">
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </div>
                    <Link
                        to={SELLER_PRODUCTS_REVIEWS}
                        className="hover:bg-purple-500 shadow  capitalize font-bold rounded px-6 py-2 bg-primary text-white"
                    >
                        {t('View Reviews')}
                    </Link>
                </ScrollReveal>
            </div>
        </div>
    )
}

export default SellerDashboard
