import React from 'react'
import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { getSellerProductsStart } from '../../../redux/slices/sellerSlice'
import '../../../styles/$seller/style.css'

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        center: true,
    },

    {
        name: 'Stock Amount',
        selector: 'quantity',
        sortable: true,
        center: true,
        reorder: true,
    },
]

const StockReport = () => {
    const { allProducts, auth, isLoadingSeller } = useSelector((state) => ({
        allProducts: state.seller.allProducts,
        auth: state.auth,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (allProducts.length === 0) {
            dispatch(
                getSellerProductsStart({
                    sellerId: auth._id,
                    token: auth.token,
                })
            )
        }
    }, [allProducts.length, auth._id, auth.token, dispatch])
    return (
        <div className="rounded-md py-6 shadow-md px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold capitalize">
                    Product Stock report
                </h2>
            </div>
            {isLoadingSeller && <Loader msg="Loading Products" />}
            {!isLoadingSeller && allProducts.length > 0 && (
                <DataTable columns={columns} data={allProducts} pagination />
            )}
            {!isLoadingSeller && allProducts.length === 0 && (
                <h3 className="font-semibold text-lg text-center">
                    You Have No Products Yet
                </h3>
            )}
        </div>
    )
}

export default StockReport
