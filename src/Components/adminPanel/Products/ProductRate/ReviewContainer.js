import React from 'react'
import BottomWithStar from './BottomWithStar'
import LeftSection from './LeftSection'
import ProgressBarAll from './ProgressBarAll'

const ReviewContainer = ({
    excellect,
    poor,
    good,
    average,
    below_average,
    rating,
    image,
    id,
}) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row border-b border-black">
                {/* Image */}
                <LeftSection image={image} />
                <div className="my-5 w-full lg:w-2/3">
                    {/* Progress Bar All */}
                    <ProgressBarAll
                        excellect={excellect}
                        poor={poor}
                        good={good}
                        average={average}
                        below_average={below_average}
                    />

                    {/* Border Bottom */}
                    <div className="mx-8 mt-3 border-t-2 border-gray-300"></div>

                    {/* Bottom & Star */}
                    <BottomWithStar
                        excellect={excellect}
                        poor={poor}
                        good={good}
                        average={average}
                        below_average={below_average}
                        rating={rating}
                        id={id}
                    />
                </div>
            </div>
        </>
    )
}

export default ReviewContainer
