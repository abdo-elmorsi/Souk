import React from 'react'
import { useTranslation } from 'react-i18next'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'

const BottomWithStar = ({ rating, id }) => {
    const { t } = useTranslation()
    const setRettingForStar = rating
    const [state] = React.useState({ rating: setRettingForStar })

    // const changeRating = (newRating) => {
    //     setState({
    //         rating: newRating,
    //     })
    // }
    return (
        <>
            {/* Star */}
            <div className="my-5 px-8 flex justify-between items-center">
                <div className="">
                    <div className="text-3xl font-bold">
                        {rating}
                        <span className="text-xs font-thin mx-2">
                            {' '}
                            ( {t('based_on')} 23 {t('reviews')} )
                        </span>
                    </div>
                    <div className="">
                        <StarRatings
                            rating={state.rating}
                            starRatedColor="#FFE921"
                            // changeRating={changeRating}
                            numberOfStars={5}
                            name="rating"
                            starHoverColor={'#FFE921'}
                            starDimension={'35px'}
                            starSpacing={'2px'}
                        />
                    </div>
                </div>
                <div className="border border-primary px-5 py-3 text-primary cursor-pointer rounded-3xl">
                    {/* Pass with Different id, For Example, I use 43434 */}
                    {/* Pass with Different id, For Example, I use 43434 */}
                    <Link to={`/admin/dashboard/Product/Rate/Details/${id}`}>
                        {t('show_reviews')}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BottomWithStar
