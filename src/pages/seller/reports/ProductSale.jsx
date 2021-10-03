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
        name: 'Total Price',
        selector: 'totalPrice',
        sortable: true,
        center: true,
    },
]

const ProductSale = () => {
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

    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold capitalize">
                    Product Sale report
                </h2>
            </div>
            {isLoadingSeller && <Loader msg="Loading Products" />}
            {!isLoadingSeller && allOrders.length > 0 && (
                <DataTable columns={columns} data={allOrders} pagination />
            )}
            {!isLoadingSeller && allOrders.length === 0 && (
                <h3 className="font-semibold text-lg text-center">No Salles</h3>
            )}
        </div>
    )
}

export default ProductSale
