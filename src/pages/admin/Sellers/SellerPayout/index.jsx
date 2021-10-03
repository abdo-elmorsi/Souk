import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import SellerPayout from '../../../../Components/adminPanel/Sellers/SellerPayout'
import DataLoader from '../../../../Components/adminPanel/Loader/DataLoader'
import { GetSellers } from '../../../../redux/reducers/Sellers/GetSellers'
const Seller_payout = () => {
    const dispatch = useDispatch()
    const [showDropdown, setShowDropdown] = useState(false)
    const { loading, Sellers } = useSelector((state) => state.Sellers)
    useEffect(() => {
        if (Sellers?.length === 0) {
            dispatch(GetSellers())
        }
    }, [dispatch, Sellers?.length])

    return (
        <>
            {loading ? (
                <DataLoader />
            ) : (
                <div className="flex">
                    {/* SetDropdown */}
                    <Dropdown
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    {/* Sidebar Component */}
                    <Sidebar />

                    <div className="bg-backgroundDB w-full px-3 md-px-8">
                        {/* Navbar Component */}
                        <Navbar
                            showDropdown={showDropdown}
                            setShowDropdown={setShowDropdown}
                        />
                        {/* {seller info} */}
                        {Sellers ? (
                            <SellerPayout Data={Sellers} />
                        ) : (
                            <h3 className="font-semibold text-lg text-center">
                                You Have No Data Yet
                            </h3>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
export default Seller_payout
