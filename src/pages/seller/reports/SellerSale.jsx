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
        name: 'Sold Amount',
        selector: 'sold',
        sortable: true,
        center: true,
        reorder: true,
    },
]

const SellerSale = () => {
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
        <div className="rounded-md py-6 shadow-md max-w-screen-md mx-auto px-4 bg-gray-50 mt-8">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold capitalize">
                    Seller Product Sale report
                </h2>
                {/* <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-2 lg:space-x-2">
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Sort by</option>
                            <option>order amount</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <span className="text-md">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </div>
                    </div>
                </div> */}
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

export default SellerSale
