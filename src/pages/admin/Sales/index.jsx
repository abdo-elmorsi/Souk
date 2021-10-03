import React, { useEffect, useState } from 'react'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import SalesCpm from '../../../Components/adminPanel/Sales'
import Loader from '../../../Components/ui/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerOrdersStart } from '../../../redux/slices/sellerSlice'

const Sales = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const { allOrders, user, isLoadingSeller, sellerError } = useSelector(
        (state) => ({
            allOrders: state.seller.allOrders,
            user: state.auth,
            isLoadingSeller: state.loadingState.isLoadingSeller,
            sellerError: state.errorState.sellerError,
        })
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (allOrders.length === 0) {
            dispatch(getSellerOrdersStart({ user, token: user.token }))
        }
    }, [allOrders.length, user, dispatch])

    const allSales = allOrders.filter(
        (order) => order.deliverStatus === 'Delivered' && order.isPaid
    )

    return (
        <>
            <div className="flex">
                {/* SetDropdown */}
                <Dropdown
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />

                {/* Sidebar Component */}
                <Sidebar />

                <div className="bg-backgroundDB w-full px-8">
                    {/* Navbar Component */}

                    <Navbar
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    {sellerError && (
                        <h3 className="font-semibold text-lg text-center">
                            An Error Accured
                        </h3>
                    )}
                    {!sellerError && isLoadingSeller && (
                        <Loader msg="loading orders" />
                    )}
                    {allSales.length > 0 && <SalesCpm allSales={allSales} />}
                    {!isLoadingSeller && allSales.length === 0 && (
                        <h3 className="font-semibold text-lg text-center">
                            You Have No Orders Yet
                        </h3>
                    )}
                </div>
            </div>
        </>
    )
}

export default Sales
