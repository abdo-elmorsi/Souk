import RatesList from '../../../Components/seller/RatesList'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideUp } from '../../../helpers/animation'
import { getAllReviewsStart } from '../../../redux/slices/sellerSlice'
import Loader from '../../../Components/ui/Loader'

const SellerAllReviews = () => {
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
        <ScrollReveal
            variants={slideUp}
            className="py-10 px-4 max-w-screen-md mx-auto"
        >
            {isLoadingSeller && <Loader />}
            <div className="md:col-span-2 md:p-6 p-2 bg-gray-50 rounded-md shadow-md">
                <h2 className="font-semibold mb-4">Customer Reviews</h2>
                {!isLoadingSeller && allReviews.length > 0 && (
                    <RatesList
                        allReviews={allReviews}
                        user={user}
                        dispatch={dispatch}
                    />
                )}
                {!isLoadingSeller && allReviews.length === 0 && (
                    <h2 className="font-bold py-4">You have no reviews yet</h2>
                )}
            </div>
        </ScrollReveal>
    )
}

export default SellerAllReviews
