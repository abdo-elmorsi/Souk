import React from 'react'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import RecentPromoTable from '../../../../Components/adminPanel/Marketing/PromoDeal/RecentPromoTable'
import PastPromoTable from '../../../../Components/adminPanel/Marketing/PromoDeal/PastPromoTable'
import Header from '../../../../Components/adminPanel/Marketing/PromoDeal/Header'
import { motion } from 'framer-motion'
import { itemSlideUp, slideDown } from '../../../../helpers/animation'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../../../Components/adminPanel/Loader/DataLoader'
import {
    getPromoDeal,
    getPastPromoDeal,
} from '../../../../redux/actions/deals/promoDealAction'

const AllProducts = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { promoDeal, pastPromoDeal, loader } = useSelector(
        (state) => state.promoDeal
    )
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getPromoDeal())
        dispatch(getPastPromoDeal())
    }, [dispatch])

    return (
        <>
            {!loader ? (
                <div className="flex">
                    <Dropdown
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    <Sidebar />

                    <div className="bg-backgroundDB w-full px-3 lg:px-8">
                        <Navbar
                            showDropdown={showDropdown}
                            setShowDropdown={setShowDropdown}
                        />
                        <Header />

                        <motion.div
                            variants={slideDown}
                            initial="hidden"
                            animate="visible"
                            className="mb-10 bg-white overflow-x-auto pb-5 text-black px-5 pt-3 rounded"
                        >
                            <RecentPromoTable promoDeal={promoDeal} />
                        </motion.div>

                        <motion.div
                            variants={itemSlideUp}
                            initial="hidden"
                            animate="visible"
                            className="mb-20 bg-white overflow-x-auto pb-5 text-black px-5 pt-3 rounded"
                        >
                            <PastPromoTable pastPromoDeal={pastPromoDeal} />
                        </motion.div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default AllProducts
