import {
    faEdit,
    faList,
    faShoppingBasket,
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../styles/$seller/style.css'
import DataTable from 'react-data-table-component'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
    delOrderStart,
    getSellerOrdersStart,
    updateOrderStart,
} from '../../../redux/slices/sellerSlice'
import { CustomDialog, StaticDialog } from 'react-st-modal'
import OrderInfoModal from '../../../Components/profile/OrderInfoModal'
import EditDeliverStatus from '../../../Components/seller/customers/EditDeliverStatus'
import Loader from '../../../Components/ui/Loader'
import '../../../styles/$seller/add-product.css'

export const Actions = ({ id, currentStatus }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const handleEdit = async () => {
        const result = await CustomDialog(<EditDeliverStatus />, {
            title: 'Update Delivery status',
            showCloseIcon: true,
        })

        if (result && result !== currentStatus) {
            dispatch(
                updateOrderStart({
                    status: result,
                    orderId: id,
                    token: auth.token,
                })
            )
        }
    }
    return (
        <div className="flex items-center space-x-6">
            <span
                onClick={handleEdit}
                className="text-lg hover:opacity-70 cursor-pointer text-blue-500"
            >
                <FontAwesomeIcon icon={faEdit} />
            </span>
            <span
                onClick={() =>
                    dispatch(delOrderStart({ id, token: auth.token }))
                }
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
        </div>
    )
}

const ShippingInfo = ({ shippingInfo }) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <StaticDialog
                isOpen={isOpen}
                title="Shipping Address"
                onAfterClose={() => {
                    setOpen(false)
                }}
            >
                <div className="md:p-10 p-4">
                    {Object.keys(shippingInfo).map((key, index) => (
                        <div
                            key={`${key}-${index}`}
                            className="flex items-center mb-4 justify-between"
                        >
                            <p className="text-lg font-bold">{key}</p>
                            <p className="text-lg font-semibold">
                                {shippingInfo[key]}
                            </p>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={() => setOpen(false)}
                            className="px-4 py-2 focus:outline-none rounded text-white bg-primary"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </StaticDialog>
            <span
                onClick={() => setOpen(true)}
                className="text-lg text-purple-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faList} />
            </span>
        </>
    )
}

const OrderInfo = ({ orderItems }) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <StaticDialog
                isOpen={isOpen}
                title="Shipping Address"
                onAfterClose={() => {
                    setOpen(false)
                }}
            >
                <OrderInfoModal orderItems={orderItems} />
            </StaticDialog>
            <span
                onClick={() => setOpen(true)}
                className="text-lg text-purple-900 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faShoppingBasket} />
            </span>
        </>
    )
}

const columns = [
    {
        name: 'Payment Status',
        selector: 'isPaid',
        sortable: true,
        center: true,
        cell: (row) => <span>{row.isPaid ? 'Payed' : 'Not Paid'}</span>,
    },
    {
        name: 'Paid Profit',
        selector: 'isPaidProfit',
        sortable: true,
        center: true,
        cell: (row) => <span>{row.isPaid ? 'Payed' : 'Not Paid'}</span>,
    },
    {
        name: 'shipping info',
        selector: 'shippingAddress',
        sortable: true,
        center: true,
        cell: (row) => <ShippingInfo shippingInfo={row.shippingAddress} />,
    },
    {
        name: 'status',
        selector: 'deliverStatus',
        sortable: true,
        center: true,
    },
    {
        name: 'order items',
        selector: 'orderItems',
        sortable: true,
        center: true,
        cell: (row) => <OrderInfo orderItems={row.orderItems} />,
    },

    {
        name: 'total price',
        selector: 'totalPrice',
        sortable: true,
        center: true,
    },
    {
        name: 'actions',
        selector: '_id',
        sortable: true,
        center: true,
        cell: (row) => (
            <Actions id={row._id} currentStatus={row.deliverStatus} />
        ),
    },
]

const CustomersOrders = () => {
    const { allOrders, user, isLoadingSeller, sellerError } = useSelector(
        (state) => ({
            allOrders: state.seller.allOrders,
            user: state.auth,
            isLoadingSeller: state.loadingState.isLoadingSeller,
            sellerError: state.errorState.sellerError,
        })
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (allOrders.length === 0) {
            dispatch(getSellerOrdersStart({ user, token: user.token }))
        }
    }, [allOrders.length, user, dispatch])

    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">All Orders</h2>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                    <div>
                        <input
                            type="text"
                            placeholder="type name or date"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div>
                </div>
            </div>
            {sellerError && (
                <h3 className="font-semibold text-lg text-center">
                    An Error Accured
                </h3>
            )}
            {!sellerError && isLoadingSeller && <Loader msg="loading orders" />}
            {!isLoadingSeller && allOrders.length > 0 && (
                <DataTable columns={columns} data={allOrders} pagination />
            )}
            {!isLoadingSeller && allOrders.length === 0 && (
                <h3 className="font-semibold text-lg text-center">
                    You Have No Orders Yet
                </h3>
            )}
        </div>
    )
}

export default CustomersOrders
