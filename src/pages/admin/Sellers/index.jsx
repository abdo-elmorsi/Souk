import React, { useEffect, useMemo, useState } from 'react'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import '../../../styles/$seller/style.css'
import DataTable from 'react-data-table-component'
import Loader from '../../../Components/ui/Loader'
import { delUserStart, getAllUserStart } from '../../../redux/slices/adminSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisH,
    faTrash,
    faBan,
    faDollarSign,
    faFlag,
} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { StaticDialog } from 'react-st-modal'
import { Link } from 'react-router-dom'
import { REPORT_SELLER_PRODUCT_SALE } from '../../../constants/routes'
// import { banSellerAction } from '../../../redux/actions/banSeller'☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠

function AllActions({ isOpen, id, setOpen, isBan }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (
        <StaticDialog
            isOpen={isOpen}
            title="Actions"
            onAfterClose={(result) => {
                setOpen(false)
            }}
            className="all-actions"
            showCloseIcon
        >
            <div className="p-6 max-w-sm mx-auto">
                <div
                    onClick={() =>
                        dispatch(delUserStart({ id, token: auth.token }))
                    }
                    className="grid grid-cols-3 items-center mb-1 text-primary hover:opacity-70 cursor-pointer"
                >
                    <span className="text-lg mx-4">
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span className="text-semibold col-span-2">
                        {t('Delete')}
                    </span>
                </div>
                <div
                    // onClick={() => {☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠
                    //     dispatch(banSellerAction(id))☠☠☠☠☠☠☠☠☠☠☠☠☠☠
                    // }}
                    className="grid grid-cols-3 items-center mb-1 text-red-400  hover:opacity-70 cursor-pointer"
                >
                    <span className="text-lg mx-4 ">
                        <FontAwesomeIcon icon={faBan} />
                    </span>
                    <span className="text-semibold col-span-2">
                        {t(isBan ? 'unBan' : 'Ban')}
                    </span>
                </div>
                <div className="grid grid-cols-3 items-center mb-1 text-secondary hover:opacity-70 cursor-pointer">
                    <span className="text-lg mx-4">
                        <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                    <span className="text-semibold col-span-2">
                        {t('Payment')}
                    </span>
                </div>
                <Link
                    to={REPORT_SELLER_PRODUCT_SALE}
                    className="grid grid-cols-3 items-center mb-1 cursor-pointer text-indigo-500 hover:opacity-70"
                >
                    <span className="text-lg mx-4">
                        <FontAwesomeIcon icon={faFlag} />
                    </span>
                    <span className="text-semibold col-span-2">
                        {t('Reports')}
                    </span>
                </Link>
            </div>
        </StaticDialog>
    )
}

export const Actions = ({ id }) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <AllActions isOpen={isOpen} id={id} setOpen={setOpen} />
            <span
                onClick={() => setOpen(true)}
                className="text-sm border border-indigo-500 rounded-full w-6 h-6 flex items-center justify-center text-indigo-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faEllipsisH} />
            </span>
        </div>
    )
}

const AllSeller = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { adminAllUsers, user, isLoadingAdmin } = useSelector((state) => ({
        adminAllUsers: state.admin.adminAllUsers,
        user: state.auth,
        isLoadingAdmin: state.loadingState.isLoadingAdmin,
        // BanSeller: state.BanSeller,☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠
    }))

    const dispatch = useDispatch()

    const { t } = useTranslation()
    const columns = useMemo(
        () => [
            {
                name: `${t('Name')}`,
                selector: 'lastName',
                sortable: true,
                center: true,
                cell: (row) => (
                    <span>{row.firstName + ' ' + row.lastName}</span>
                ),
            },
            {
                name: `${t('Email')}`,
                selector: 'email',
                sortable: true,
                center: true,
                reorder: true,
            },
            {
                name: `${t('role')}`,
                selector: 'role',
                sortable: true,
                center: true,
                reorder: true,
                cell: (row) => <span>{t(row.role)}</span>,
            },
            {
                name: `${t('address')}`,
                selector: 'address1',
                sortable: true,
                center: true,
                reorder: true,
            },
            {
                name: `${t('country')}`,
                selector: 'country',
                sortable: true,
                center: true,
                reorder: true,
            },
            {
                name: `${t('actions')}`,
                selector: 'action',
                sortable: true,
                center: true,
                reorder: true,
                cell: (row) => <Actions id={row.id} isBan={row.ban} />,
            },
        ],
        [t]
    )
    useEffect(() => {
        if (adminAllUsers.length === 0) {
            dispatch(getAllUserStart({ token: user.token }))
        }
    }, [adminAllUsers.length, user, dispatch])

    const adminAllSellers = adminAllUsers.filter(
        (user) => user.role === 'seller'
    )

    return (
        <div className="flex">
            {/* SetDropdown */}
            <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
            />

            {/* Sidebar Component */}
            <Sidebar />

            <div className="bg-backgroundDB w-full px-2 lg:px-8">
                {/* Navbar Component */}
                <Navbar
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
                <div className="bg-backgroundDB w-full px-0 lg:px-8">
                    {/* {seller info} */}
                    <div className="py-10 bg-white rounded px-4 mt-10 shadow">
                        <h2 className="font-semibold mb-4 ">
                            {t('All Sellers')}
                        </h2>
                        {isLoadingAdmin && <Loader msg="loading customers" />}
                        {!isLoadingAdmin && adminAllSellers.length > 0 && (
                            <DataTable
                                columns={columns}
                                data={adminAllSellers}
                                pagination
                            />
                        )}
                        {!isLoadingAdmin && adminAllSellers.length === 0 && (
                            <h3 className="font-semibold text-lg text-center">
                                There is no Sellers
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllSeller
