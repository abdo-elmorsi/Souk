import React from 'react'
import CustomerReview from '../../seller/CustomerReview'

const ReviewsList = ({ reviews }) => {
    return (
        <div className="md:px-6  bg-white shadow-lg rounded-lg  px-4 py-4  ">
            <div className="mb-1 tracking-wide ">
                <h2 className="text-gray-800 font-semibold mb-4">
                    All Comments
                </h2>
            </div>

            {reviews.slice(0, 3).map((review) => (
                <CustomerReview
                    key={review.id}
                    user={review.user}
                    comment={review.comment}
                    rating={review.rating}
                    approve={review.approve}
                    id={review.id}
                />
            ))}
        </div>
    )
}

export default ReviewsList
