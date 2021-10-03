import React from 'react'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import CrateFlashDeal from '../../../../Components/adminPanel/Marketing/FlashDeal/CreateFlashDeal'

const Shop = () => {
	const [showDropdown, setShowDropdown] = React.useState(false)
	return (
        <div className="flex">
            {/* SetDropdown */}
            <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
            />
            {/* Sidebar Component */}
            <Sidebar />

            <div className="bg-backgroundDB w-full px-3 lg:px-8">
                {/* Navbar Component */}
                <Navbar
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />

                <div className="flex flex-col lg:flex-row">
                    {/* CflashD comp*/}
                    <CrateFlashDeal />
                </div>
            </div>
        </div>
    )
}

export default Shop


