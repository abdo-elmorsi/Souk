import React from 'react'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import Header from '../../../../Components/adminPanel/Products/Category/Header'
import { useSelector, useDispatch } from 'react-redux'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { CustomDialog } from 'react-st-modal'
import EditCategory from '../../../../Components/seller/category/EditCategory'
import { ADD_NEW_CATEGORY } from '../../../../constants/routes'
import {
    delCategoryStart,
    getAllCategoriesStart,
    updateCategoryStart,
} from '../../../../redux/slices/sellerSlice'
import Loader from '../../../../Components/ui/Loader'

const Actions = ({ slug }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const handleEdit = async () => {
        const result = await CustomDialog(<EditCategory />, {
            title: 'Edit Category',
            showCloseIcon: true,
        })

        if (result && result !== '') {
            dispatch(
                updateCategoryStart({
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
                    dispatch(delCategoryStart({ slug, token: auth.token }))
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

const Categories = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const dispatch = useDispatch()
    const { allCategories, isLoadingSeller } = useSelector((state) => ({
        allCategories: state.seller.AllCategories,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    useEffect(() => {
        if (allCategories.length === 0) {
            dispatch(getAllCategoriesStart())
        }
    }, [allCategories.length, dispatch])
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
                            <div className="bg-gray-50 rounded-md shadow-md mt-8 px-4 py-10">
                                <div className="flex justify-end">
                                    <Link
                                        to={ADD_NEW_CATEGORY}
                                        className="px-6 py-2 bg-primary text-white mb-6 rounded"
                                    >
                                        Add Category
                                    </Link>
                                </div>
                                <div className="flex lg:flex-row flex-col justify-between items-center mb-4">
                                    <h2 className="font-semibold">
                                        All Categories
                                    </h2>
                                </div>
                                <div className="max-w-lg bg-white rounded-md mx-auto mt-8 shadow-lg">
                                    {isLoadingSeller && (
                                        <Loader msg="Loading Products" />
                                    )}
                                    {allCategories.length > 0 && (
                                        <DataTable
                                            columns={columns}
                                            data={allCategories}
                                            pagination
                                        />
                                    )}
                                    {!isLoadingSeller &&
                                        allCategories.length === 0 && (
                                            <h3 className="font-semibold p-6 text-lg text-center">
                                                There is no category
                                            </h3>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Categories
