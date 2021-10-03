import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ScrollReveal from '../../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../../helpers/animation'
import {
    delCouponStart,
    getAllCouponsStart,
} from '../../../../redux/slices/adminSlice'
// import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import { Link } from 'react-router-dom'
import { ADMIN_PRODUCTS_ADD_COUPON } from '../../../../constants/routes'
import { displayTime } from '../../../../helpers/utils'

const Actions = ({ id }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (
        <div className="flex items-center space-x-6">
            {/* <span className="text-lg text-blue-500 cursor-pointer hover:opacity-70">
                <FontAwesomeIcon icon={faEdit} />
            </span> */}
            <span
                onClick={() =>
                    dispatch(delCouponStart({ id, token: auth.token }))
                }
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </div>
    )
}

const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
        center: true,
    },
    {
        name: 'expirity Date',
        selector: 'expireDate',
        sortable: true,
        center: true,
        cell: (row) => <span>{displayTime(row.expireDate)}</span>,
    },
    {
        name: 'N° of Products',
        selector: 'products',
        sortable: true,
        center: true,
        cell: (row) => <span>{row.products.length}</span>,
    },
    {
        name: 'Action',
        selector: 'action',
        sortable: true,
        center: true,
        reorder: true,
        cell: (row) => <Actions id={row._id} />,
    },
]

const AdminAllCoupons = () => {
    const { token, allCoupons } = useSelector((state) => ({
        token: state.auth.token,
        allCoupons: state.admin.allCoupons,
    }))
    const [showDropdown, setShowDropdown] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (allCoupons.length === 0) {
            dispatch(getAllCouponsStart({ token }))
        }
    }, [allCoupons.length, token, dispatch])

    return (
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

                    <div className="mt-8">
                        <div className="text-end">
                            <Link
                                to={ADMIN_PRODUCTS_ADD_COUPON}
                                className="bg-primary px-4 py-2 rounded mb-4 text-white"
                            >
                                Add Coupon
                            </Link>
                        </div>
                        <ScrollReveal
                            variants={slideUp}
                            className="col-span-2 bg-gray-50 rounded-md shadow-md p-4"
                        >
                            <div className="flex lg:flex-row flex-col justify-between items-center border-b-2 border-gray-100 pb-4 mb-4">
                                <h2 className="font-semibold">Coupons</h2>
                                {/* <div>
                                    <input
                                        type="text"
                                        placeholder="type name or date"
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div> */}
                            </div>
                            {allCoupons.length > 0 && (
                                <DataTable
                                    columns={columns}
                                    data={allCoupons}
                                    pagination
                                />
                            )}
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAllCoupons
