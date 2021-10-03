import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useMemo } from 'react'
// import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../../../Components/ui/Loader'
import {
    delProductStart,
    getSellerProductsStart,
} from '../../../redux/slices/sellerSlice'

export const Actions = ({ slug }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const editing_page = '/seller/products/edit-product'
    return (
        <div className="flex items-center space-x-6">
            <Link
                to={`${editing_page}/${slug}`}
                className="text-lg text-blue-500"
            >
                <FontAwesomeIcon icon={faEdit} />
            </Link>
            <span
                onClick={() =>
                    dispatch(delProductStart({ slug, token: auth.token }))
                }
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </div>
    )
}

export const ProductImg = ({ img }) => (
    <div
        className="h-20 bg-contain bg-no-repeat bg-center w-20 rounded"
        style={{ backgroundImage: `url(${img})` }}
    ></div>
)

const SellerAllProducts = () => {
    // const { t } = useTranslation()

    const { allProducts, auth, isLoadingSeller } = useSelector((state) => ({
        allProducts: state.seller.allProducts,
        auth: state.auth,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    const dispatch = useDispatch()

    const columns = useMemo(
        () => [
            {
                name: 'product img',
                selector: 'images',
                sortable: true,
                center: true,
                cell: (row) => <ProductImg img={row.img} />,
            },
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
                center: true,
            },
            {
                name: 'price',
                selector: 'discountPrice',
                sortable: true,
                center: true,
                reorder: true,
            },
            {
                name: 'Stock',
                selector: 'quantity',
                sortable: true,
                center: true,
                reorder: true,
            },
            {
                name: 'Action',
                selector: 'action',
                sortable: true,
                center: true,
                reorder: true,
                cell: (row) => <Actions slug={row.slug} />,
            },
        ],
        []
    )

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
        <div className="bg-gray-50 rounded-md shadow-md mt-8 p-4">
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">All Products</h2>
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

export default SellerAllProducts
