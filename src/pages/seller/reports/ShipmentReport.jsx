import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { getSellerOrdersStart } from '../../../redux/slices/sellerSlice'
import '../../../styles/$seller/style.css'

const columns = [
    {
        name: 'N° of items',
        selector: 'orderItems',
        sortable: true,
        center: true,
        cell: (row) => <span>{row.orderItems.length}</span>,
    },

    {
        name: 'Shipping Price',
        selector: 'shippingPrice',
        sortable: true,
        center: true,
    },

    {
        name: 'shipment',
        selector: 'deliverStatus',
        sortable: true,
        center: true,
        reorder: true,
    },
]

const ShipmentReport = () => {
    const { allOrders, auth, isLoadingSeller } = useSelector((state) => ({
        allOrders: state.seller.allOrders,
        auth: state.auth,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (allOrders.length === 0) {
            dispatch(
                getSellerOrdersStart({
                    sellerId: auth._id,
                    token: auth.token,
                })
            )
        }
    }, [allOrders.length, auth._id, auth.token, dispatch])

    const allShipment = allOrders.filter(
        (order) => order.deliverStatus === 'Delivered'
    )

    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">All Shipment</h2>
                <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                    {/* <div>
                        <input
                            type="text"
                            placeholder="type name or date"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />
                    </div> */}
                </div>
            </div>
            {isLoadingSeller && <Loader msg="Loading Products" />}
            {!isLoadingSeller && allShipment.length > 0 && (
                <DataTable columns={columns} data={allShipment} pagination />
            )}
            {!isLoadingSeller && allShipment.length === 0 && (
                <h3 className="font-semibold text-lg text-center">
                    No Shipment
                </h3>
            )}
        </div>
    )
}

export default ShipmentReport
