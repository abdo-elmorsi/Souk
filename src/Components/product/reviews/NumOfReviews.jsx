import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import { RatingView } from 'react-simple-star-rating'

const NumOfReviews = ({ reviews, rating }) => {
    const starRates = [
        {
            star: '5 star',
            num: reviews.filter((rev) => rev.rating > 4.4 && rev.rating <= 5)
                .length,
        },
        {
            star: '4 star',
            num: reviews.filter((rev) => rev.rating > 3.4 && rev.rating <= 4.4)
                .length,
        },
        {
            star: '3 star',
            num: reviews.filter((rev) => rev.rating > 2.4 && rev.rating <= 3.4)
                .length,
        },
        {
            star: '2 star',
            num: reviews.filter((rev) => rev.rating > 1.4 && rev.rating <= 2.4)
                .length,
        },
        {
            star: '1 star',
            num: reviews.filter((rev) => rev.rating <= 1.4).length,
        },
    ]

    return (
        <div className="mx-auto bg-white shadow-lg rounded-lg  px-4 py-4 max-w-sm ">
            <div className="mb-1 tracking-wide ">
                <h2 className="text-gray-800 font-semibold mb-4">
                    {reviews.length} Users reviews
                </h2>

                <div className="border-b -mx-8 px-8 pb-3">
                    <div className="md:col-span-3">
                        {starRates.map(({ star, num }, index) => (
                            <div
                                className="grid grid-cols-5 gap-1 items-center mb-1"
                                key={`${star}-${index}`}
                            >
                                <div className="text-sm text-gray-600 tracking-tighter">
                                    <span>{star}</span>
                                </div>
                                <div className="col-span-3">
                                    <ProgressBar
                                        completed={(num / reviews.length) * 100}
                                        height={'9px'}
                                        labelSize={'10px'}
                                        baseBgColor={'#D1D5DB'}
                                        bgColor={'#F7E733'}
                                        borderRadius={'5px'}
                                        isLabelVisible={false}
                                    />
                                </div>
                                <div className=" text-gray-700 text-sm tracking-tighter">
                                    <span>{(num / reviews.length) * 100}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-yellowGB text-3xl font-bold mb-4">
                        {rating}/5
                    </h3>
                    <div>
                        <RatingView fillColor="#F7E733" ratingValue={rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NumOfReviews
