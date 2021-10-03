import { Link } from 'react-router-dom'
import { useDialog } from 'react-st-modal'
import { useTranslation } from 'react-i18next'

const OrderInfoModal = ({ orderItems, deliverStatus, isPaid }) => {
    const dialog = useDialog()
    const { t } = useTranslation()

    return (
        <div className="p-10 flex items-center justify-center">
            <div>
                <div className="flex items-center space-x-12 border-b-2 border-gray-100 mb-4 pb-4 justify-between">
                    <h3 className="font-semibold text-sm">
                        {t('Order Image')}
                    </h3>
                    <h3 className="font-semibold text-sm">{t('Order Name')}</h3>
                    <h3 className="font-semibold text-sm">
                        {t('Order Price')}
                    </h3>
                    {isPaid && deliverStatus === 'Delivered' && (
                        <h3 className="font-semibold text-sm">
                            {t('Add Review')}
                        </h3>
                    )}
                </div>
                {orderItems.map((order) => (
                    <div
                        key={order._id}
                        className="flex items-center space-x-12 justify-between mb-2"
                    >
                        <div
                            className="w-20 h-20 bg-gray-100 rounded-full  bg-contain bg-no-repeat bg-center"
                            style={{
                                backgroundImage: `url(${order.image})`,
                            }}
                        ></div>
                        <h3 className="font-semibold  text-sm">{order.name}</h3>

                        <h3 className="font-semibold text-sm">
                            {order.price}$
                        </h3>
                        {isPaid && deliverStatus === 'Delivered' && (
                            <Link
                                to={`/profile/add-review/${order.product.slug}`}
                                className="font-semibold text-green-500 underline text-sm"
                            >
                                Review
                            </Link>
                        )}
                    </div>
                ))}
                <div className="text-center">
                    <button
                        className="focus:outline-none mt-6 hover:opacity-70 px-4 py-2 bg-primary rounded text-white"
                        onClick={() => {
                            dialog.close()
                        }}
                    >
                        {t('Close')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderInfoModal
