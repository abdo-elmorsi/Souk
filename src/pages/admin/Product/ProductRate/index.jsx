import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../../../../Components/adminPanel/Navbar'
import Sidebar from '../../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../../Components/adminPanel/Dropdown'
import { useSelector, useDispatch } from 'react-redux'
import RatesList from '../../../../Components/seller/RatesList'
import ScrollReveal from '../../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../../helpers/animation'
import { getAllReviewsStart } from '../../../../redux/slices/sellerSlice'
import Loader from '../../../../Components/ui/Loader'

const ProductRate = () => {
    const { t } = useTranslation()
    const [showDropdown, setShowDropdown] = React.useState(false)
    const { user, allReviews, isLoadingSeller } = useSelector((state) => ({
        user: state.auth,
        allReviews: state.seller.allReviews,
        isLoadingSeller: state.loadingState.isLoadingSeller,
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if (allReviews.length === 0) {
            dispatch(getAllReviewsStart({ token: user.token }))
        }
    }, [allReviews.length, dispatch, user.token])

    return (
        <>
            <div className="flex">
                <Dropdown
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />
                <Sidebar />

                <div className="bg-backgroundDB w-full px-4">
                    <Navbar
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                    />
                    <div className="mx-auto my-5 font-semibold text-md max-w-screen-xl">
                        {t('Product_Rates')}
                    </div>

                    {/* Container- Rate & Reviews */}
                    <div className="mx-auto my-5 bg-white font-semibold text-md rounded max-w-screen-xl">
                        <ScrollReveal
                            variants={slideUp}
                            className="py-10 px-4 max-w-screen-md mx-auto"
                        >
                            {isLoadingSeller && <Loader />}
                            <div className="md:col-span-2 md:p-6 p-2 bg-gray-50 rounded-md shadow-md">
                                <h2 className="font-semibold mb-4">
                                    Customer Reviews
                                </h2>
                                {!isLoadingSeller && allReviews.length > 0 && (
                                    <RatesList
                                        allReviews={allReviews}
                                        user={user}
                                        dispatch={dispatch}
                                    />
                                )}
                                {!isLoadingSeller &&
                                    allReviews.length === 0 && (
                                        <h2 className="font-bold py-4">
                                            You have no reviews yet
                                        </h2>
                                    )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductRate
