import React from 'react'

import Container from '../../ui/Container'
import NumOfReviews from './NumOfReviews'
import ReviewsList from './ReviewsList'

const CustomerReviews = ({ reviews, rating }) => {
    return (
        <div>
            <Container>
                <div className="items-start  lg:grid gap-8 lg:grid-cols-4">
                    <div>
                        <NumOfReviews rating={rating} reviews={reviews} />
                    </div>
                    <div className="lg:col-span-3">
                        <ReviewsList reviews={reviews} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CustomerReviews
