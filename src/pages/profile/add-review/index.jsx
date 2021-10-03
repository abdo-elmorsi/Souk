import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Rating } from 'react-simple-star-rating'
import { Alert } from 'react-st-modal'
import { addReviewStart } from '../../../redux/slices/sellerSlice'

const AddReview = () => {
    const { slug } = useParams()

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    const token = useSelector((state) => state.auth.token)

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        if (rating === 0) {
            Alert('Rating is Required', 'Rating')
        } else {
            const review = { rating, comment: data.comment }
            dispatch(addReviewStart({ data: review, slug, token }))
        }
    }

    return (
        <div
            className="py-10  px-4 mt-8 max-w-screen-md bg-gray-50
         mx-auto rounded-md shadow-md"
        >
            <h2 className="font-semibold mb-6">Add Review</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg mx-auto px-4"
            >
                <div className="mb-4">
                    <label className="mb-2 block" htmlFor="first-name">
                        Rating
                    </label>

                    <Rating onClick={handleRating} ratingValue={rating} />
                </div>
                <div>
                    <label className="mb-2 block" htmlFor="first-name">
                        Review
                    </label>

                    <div>
                        <textarea
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            rows="8"
                            {...register('comment', {
                                required: 'a review is required',
                            })}
                        ></textarea>
                        <div className="text-red-500 mt-2">
                            <span>{errors?.comment?.message}</span>
                        </div>
                    </div>
                </div>
                <button className="px-6 py-1 hover:opacity-70 mt-4 rounded bg-purple-500 text-white">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddReview
