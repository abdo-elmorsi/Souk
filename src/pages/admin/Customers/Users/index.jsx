import React, { useEffect, useMemo } from 'react'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import '../../../../styles/$seller/style.css'
import DataTable from 'react-data-table-component'
import Loader from '../../../../Components/ui/Loader'
import {
    delUserStart,
    getAllUserStart,
} from '../../../../redux/slices/adminSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

export const Actions = ({ id }) => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (
        <div>
            <span
                onClick={() =>
                    dispatch(delUserStart({ id, token: auth.token }))
                }
                className="text-lg text-red-500 cursor-pointer hover:opacity-70"
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </div>
    )
}

const AllUsers = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { adminAllUsers, user, isLoadingAdmin } = useSelector((state) => ({
        adminAllUsers: state.admin.adminAllUsers,
        user: state.auth,
        isLoadingAdmin: state.loadingState.isLoadingAdmin,
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
                cell: (row) => <Actions id={row.id} />,
            },
        ],
        [t]
    )

    useEffect(() => {
        if (adminAllUsers.length === 0) {
            dispatch(getAllUserStart({ token: user.token }))
        }
    }, [adminAllUsers.length, user, dispatch])
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
                        <h2 className="font-semibold mb-4 ">{t("All Users")}</h2>
                        {isLoadingAdmin && <Loader msg="loading customers" />}
                        {!isLoadingAdmin && adminAllUsers.length > 0 && (
                            <DataTable
                                columns={columns}
                                data={adminAllUsers}
                                pagination
                            />
                        )}
                        {!isLoadingAdmin && adminAllUsers.length === 0 && (
                            <h3 className="font-semibold text-lg text-center">
                                There is no Users
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllUsers
