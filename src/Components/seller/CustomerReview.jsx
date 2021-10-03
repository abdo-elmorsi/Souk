import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RatingView } from 'react-simple-star-rating'
import { approveReviewStart } from '../../redux/slices/sellerSlice'

const CustomerReview = ({
    user,
    comment,
    rating,
    approve = null,
    sellerBtn = false,
    id,
}) => {
    const dispatch = useDispatch()

    const auth = useSelector((state) => state.auth)

    const handleApproval = () => {
        const data = { id, approve: true }
        dispatch(approveReviewStart({ data, token: auth.token }))
    }
    // const handleDisapproval = () => {
    //     const data = { id, approve: false }
    //     dispatch(approveReviewStart({ data, token: auth.token }))
    // }

    return (
        <div className="p-2 flex md:flex-row flex-col  rounded justify-between bg-white border-b-2 pb-2 border-gray-100 mb-4">
            <div>
                <p className="flex items-baseline">
                    <span className="text-gray-600 font-bold">
                        {user.split('@')[0]}
                    </span>
                    <span className="ml-2 text-green-600  text-xs">
                        Verified Buyer
                    </span>
                </p>
                <div className="flex items-center mt-1">
                    <RatingView fillColor="#F7E733" ratingValue={rating} />
                </div>

                <div className="mt-3">
                    <p className="mt-1">{comment}</p>
                </div>
            </div>
            {sellerBtn && (
                <div className="flex  flex-col  justify-between">
                    <span className="text-red-500 font-semibold text-sm ">
                        {!approve && 'Not Approved'}
                    </span>
                    <button
                        onClick={handleApproval}
                        className="text-white bg-green-400 mt-auto rounded px-4 py-1 hover:opacity-70"
                    >
                        approve
                    </button>
                    {/* <button
                        onClick={handleDisapproval}
                        className="text-white bg-red-400 rounded px-4 py-1 hover:opacity-70"
                    >
                        delete
                    </button> */}
                </div>
            )}
        </div>
    )
}

export default CustomerReview
