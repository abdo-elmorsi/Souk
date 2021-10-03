import { useTranslation } from 'react-i18next'

const OrdersList = ({ orders }) => {
    const { t } = useTranslation()

    const ordersState = [
        { title: 'Total_Orders', qty: orders?.totalOrders || 0 },
        { title: 'Pending_Orders', qty: orders?.pendingOrders || 0 },
        { title: 'On Going Orders', qty: orders?.onGoingOrders || 0 },
        { title: 'Delivered Orders', qty: orders?.deliveredOrders || 0 },
    ]

    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <div className="border-b-2 border-gray-100 pb-4 mb-4">
                <h3 className="font-bold capitalize">{t('Orders')}</h3>
            </div>
            {ordersState.map(({ title, qty }, index) => (
                <div
                    key={`orders-${index}`}
                    className="border-b-2 border-gray-100 pb-4 mb-2 flex justify-between"
                >
                    <h3 className="font-semibold capitalize text-md">
                        {t(`${title}`)}
                    </h3>
                    <p className="font-semibold">{qty}</p>
                </div>
            ))}
        </div>
    )
}

export default OrdersList
