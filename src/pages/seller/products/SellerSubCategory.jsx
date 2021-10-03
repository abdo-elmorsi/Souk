import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CustomDialog } from 'react-st-modal'
import EditCategory from '../../../Components/seller/category/EditCategory'
import Loader from '../../../Components/ui/Loader'
import { SELLER_PRODUCTS_ADD_SUB_CATEGORY } from '../../../constants/routes'
import {
    delSubCategoryStart,
    getSubCategoriesStart,
    updateSubCategoryStart,
} from '../../../redux/slices/sellerSlice'

const Actions = ({ slug }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const handleEdit = async () => {
        const result = await CustomDialog(<EditCategory />, {
            title: 'Edit Sub Category',
            showCloseIcon: true,
        })

        if (result && result !== '') {
            dispatch(
                updateSubCategoryStart({
                    slug,
                    name: result,
                    token: auth.token,
                })
            )
        }
    }
    return (
        <div className="flex items-center space-x-6">
            <span
                onClick={handleEdit}
                className="text-lg text-blue-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faEdit} />
            </span>
            <span
                onClick={() =>
                    dispatch(delSubCategoryStart({ slug, token: auth.token }))
                }
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
        </div>
    )
}

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
        center: true,
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

const SellerSubCategory = () => {
    const dispatch = useDispatch()
    const { allSubCategories, isLoadingSeller } = useSelector((state) => ({
        allSubCategories: state.seller.AllSubCategories,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    useEffect(() => {
        if (allSubCategories.length === 0) {
            dispatch(getSubCategoriesStart())
        }
    }, [allSubCategories.length, dispatch])
    return (
        <div className="bg-gray-50 rounded-md shadow-md mt-8 px-4 py-10">
            <div className="flex justify-end">
                <Link
                    to={SELLER_PRODUCTS_ADD_SUB_CATEGORY}
                    className="px-6 py-2 bg-primary text-white mb-6 rounded"
                >
                    Add Sub Category
                </Link>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                <h2 className="font-semibold">All Sub Categories</h2>

                {/* <div>
                    <input
                        type="text"
                        placeholder="type name or date"
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div> */}
            </div>
            <div className="max-w-lg bg-white rounded-md mx-auto mt-8 shadow-lg">
                {isLoadingSeller && <Loader msg="Loading Products" />}
                {!isLoadingSeller && allSubCategories.length > 0 && (
                    <DataTable
                        columns={columns}
                        data={allSubCategories}
                        pagination
                    />
                )}
                {!isLoadingSeller && allSubCategories.length === 0 && (
                    <h3 className="font-semibold text-lg text-center">
                        There is no sub category
                    </h3>
                )}
            </div>
        </div>
    )
}

export default SellerSubCategory
