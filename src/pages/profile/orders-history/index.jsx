// import { faFilter } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import NoOrder from '../../../Components/checkout/NoOrder'
import OrderedItem from '../../../Components/profile/OrderedItem'
import Loader from '../../../Components/ui/Loader'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import { getUserOrdersStart } from '../../../redux/slices/userOrdersSlice'

const OrdersHistory = () => {
    const ordersTable = [
        'orderN°',
        'N° Of Products',
        'Date',
        'Total Price',
        'Status',
    ]

    const { user, userOrders, isLoadingUserOrders } = useSelector((state) => ({
        user: state.auth,
        userOrders: state.userOrders,
        isLoadingUserOrders: state.loadingState.isLoadingUserOrders,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (userOrders.length === 0) {
            dispatch(getUserOrdersStart(user))
        }
    }, [dispatch, user, userOrders.length])

    const { t } = useTranslation()

    return (
        <ScrollReveal
            variants={slideUp}
            className="rounded shadow-md mt-10 bg-white p-6 overflow-x-scroll md:overflow-x-hidden max-w-screen-lg"
        >
            {/* <div className="mb-4 flex md:flex-row flex-col md:items-center md:space-y-0 space-y-2">
                <input
                    type="text"
                    name="filter"
                    id="filter"
                    className="border border-gray-300 rounded p-2"
                />
                <button className="bg-gray-200 hover:bg-purple-500 hover:text-white border md:mx-4 px-4 py-2 w-28">
                    <span className="mx-2 ">
                        <FontAwesomeIcon icon={faFilter} />
                    </span>
                    Filter
                </button>
            </div> */}
            {isLoadingUserOrders && <Loader msg="loading orders..." />}
            {!isLoadingUserOrders && userOrders.length === 0 && <NoOrder />}
            {userOrders.length > 0 && (
                <>
                    <h1 className="mb-6 text-gray-600 font-semibold capitalize text-xl">
                        {t('Purchase_History')}
                    </h1>
                    <div className="lg:grid hidden grid-cols-6 gap-2  w-full justify-items-center border-b-2 border-gray-100 pb-2 mb-4">
                        {ordersTable.map((title, index) => (
                            <h3
                                key={`${title}-${index}`}
                                className={`font-semibold text-gray-700 cursor-pointer capitalize  ${
                                    index === 0 && 'col-span-2 '
                                }`}
                            >
                                {t(`${title}`)}
                            </h3>
                        ))}
                    </div>
                </>
            )}
            <div>
                {userOrders?.length > 0 &&
                    userOrders.map(
                        (
                            {
                                _id,
                                createdAt,
                                deliverStatus,
                                orderItems,
                                totalPrice,
                                isPaid,
                            },
                            index
                        ) => (
                            <div key={_id}>
                                <OrderedItem
                                    orderNum={index + 1}
                                    deliverStatus={deliverStatus}
                                    isPaid={isPaid}
                                    orderItems={orderItems}
                                    totalPrice={totalPrice}
                                    createdAt={createdAt}
                                />
                            </div>
                        )
                    )}
            </div>
        </ScrollReveal>
    )
}

export default OrdersHistory
