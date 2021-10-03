import React from 'react'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import AddNewSeller from '../../../../Components/adminPanel/Dashboard/AddNewSeller'

const Add_NewSeller = () => {
	const [showDropdown, setShowDropdown] = React.useState(false);
	return (
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

                {/* {seller info} */}
                <AddNewSeller />
            </div>
        </div>
    )
}
export default Add_NewSeller

