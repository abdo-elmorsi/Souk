import React, { useEffect, useMemo } from 'react'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'

import { useDispatch, useSelector } from 'react-redux'
import { getSellerCustomersStart } from '../../../redux/slices/sellerSlice'
import '../../../styles/$seller/style.css'
import DataTable from 'react-data-table-component'
import Loader from '../../../Components/ui/Loader'
import { useTranslation } from 'react-i18next'

const AllSellers = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { allCustomers, user, isLoadingSeller } = useSelector((state) => ({
        allCustomers: state.seller.allCustomers,
        user: state.auth,
        isLoadingSeller: state.loadingState.isLoadingSeller,
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
                name: `${t('Phone')}`,
                selector: 'phone',
                sortable: true,
                center: true,
                reorder: true,
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
        ],
        [t]
    )
    useEffect(() => {
        if (allCustomers.length === 0) {
            dispatch(getSellerCustomersStart({ user, token: user.token }))
        }
    }, [allCustomers.length, user, dispatch])
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
                        <h2 className="font-semibold mb-4 ">{t("All Customers")}</h2>
                        {isLoadingSeller && <Loader msg="loading customers" />}
                        {!isLoadingSeller && allCustomers.length > 0 && (
                            <DataTable
                                columns={columns}
                                data={allCustomers}
                                pagination
                            />
                        )}
                        {!isLoadingSeller && allCustomers.length === 0 && (
                            <h3 className="font-semibold text-lg text-center">
                                You Have No Customers Yet
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllSellers
