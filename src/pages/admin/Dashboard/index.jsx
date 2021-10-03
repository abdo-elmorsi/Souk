import React, { useEffect } from 'react'
import Bottom from '../../../Components/adminPanel/Dashboard/Bottom'
// import CloselyGraph from '../../../Components/adminPanel/Dashboard/CloselyGraph'
import Header from '../../../Components/adminPanel/Dashboard/Header'
// import RecentServey from '../../../Components/adminPanel/Dashboard/RecentServey'
import SummaryAndSelling from '../../../Components/adminPanel/Dashboard/SummaryAndSelling'
import Top4items from '../../../Components/adminPanel/Dashboard/Top4items'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import Loader from '../../../Components/ui/Loader'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAdminStaisticsStart } from '../../../redux/slices/adminSlice'

const Dashboard = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { auth, allProducts, adminStatistics, isLoadingAdmin, adminError } =
        useSelector((state) => ({
            auth: state.auth,
            allProducts: state.seller.allProducts,
            adminStatistics: state.admin.adminStatistics,
            isLoadingAdmin: state.loadingState.isLoadingAdmin,
            adminError: state.errorState.adminError,
        }))
    const dispatch = useDispatch()

    useEffect(() => {
        if (!adminStatistics._id) {
            dispatch(
                getAdminStaisticsStart({
                    sellerId: auth._id,
                    token: auth.token,
                })
            )
        }
    }, [adminStatistics._id, dispatch, auth._id, auth.token])

    return (
        <div className="flex">
            <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
            />

            {/* Sidebar Component */}
            <Sidebar />

            <div className="bg-backgroundDB w-full px-6">
                {/* Navbar Component */}
                <Navbar
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
                {isLoadingAdmin && !adminError && (
                    <Loader msg="Loading admin" />
                )}

                {/* Header */}
                <Header />

                {/* Top 4 items- NewOrders, TotalIncomes, Total Sales, Total Customers */}
                <Top4items statistics={adminStatistics} />

                {/* Summary & Top Selling */}
                <SummaryAndSelling
                    statistics={adminStatistics}
                    products={allProducts}
                />

                {/* OrderActivity RecentProduct RecentBuyers
                <RecentServey topSelling={topSelling} /> */}

                {/* Closely graph analysis
                <CloselyGraph /> */}

                {/* Bottom */}
                <Bottom />
            </div>
        </div>
    )
}

export default Dashboard
