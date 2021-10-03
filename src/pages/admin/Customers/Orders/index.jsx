import React, { useState } from 'react'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import AllOrders from '../../../../Components/adminPanel/Customers/Orders'

const Orders = () => {
    const [showDropdown, setShowDropdown] = useState(false)
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
                    <AllOrders />
                </div>
            </div>
        </>
    )
}

export default Orders
