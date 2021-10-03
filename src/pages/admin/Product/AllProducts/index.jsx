import React, { useEffect } from 'react'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import Header from '../../../../Components/adminPanel/Products/AllProducts/Header'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import {
    delProductStart,
    getSellerProductsStart,
} from '../../../../redux/slices/sellerSlice'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Loader from '../../../../Components/ui/Loader'
import DataTable from 'react-data-table-component'

export const Actions = ({ slug }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const editing_page = '/admin/dashboard/edit-product'
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

const columns = [
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
]

const AllProducts = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
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
        <>
            <>
                <div className="flex">
                    <Dropdown
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    <Sidebar />

                    <div className="bg-backgroundDB w-full px-4">
                        <Navbar
                            showDropdown={showDropdown}
                            setShowDropdown={setShowDropdown}
                        />
                        <Header />

                        <div className="mb-20 bg-white overflow-x-auto pb-5 text-black px-5 pt-3 rounded">
                            {isLoadingSeller && (
                                <Loader msg="Loading Products" />
                            )}
                            {!isLoadingSeller && allProducts.length > 0 && (
                                <DataTable
                                    columns={columns}
                                    data={allProducts}
                                    pagination
                                />
                            )}
                            {!isLoadingSeller && allProducts.length === 0 && (
                                <h3 className="font-semibold text-lg text-center">
                                    You Have No Products Yet
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default AllProducts
