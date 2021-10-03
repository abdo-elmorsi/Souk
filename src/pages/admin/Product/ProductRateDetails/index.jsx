import React from 'react'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { PRODUCT_RATE } from '../../../../constants/routes'
import StarRatings from 'react-star-ratings'
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im'
import ProgressBarAll from '../../../../Components/adminPanel/Products/ProductRate/ProgressBarAll'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../../../Components/adminPanel/Loader/DataLoader'
import { getSingleProductRate } from '../../../../redux/actions/products/productRateAction'
import { useParams, Link } from 'react-router-dom'

const ProductRateDetails = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()

    const { productRate, loader, productsRates } = useSelector(
        (state) => state.productsRates
    )
    const averageRateValue = productRate?.rating?.rate || 0
    const { id } = useParams()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getSingleProductRate(id))
    }, [dispatch, id])
    return (
        <>
            {!loader ? (
                <div>
                    <div className="flex px-4 py-8">
                        <Link to={PRODUCT_RATE}>
                            <div className="bg-primary flex items-center py-1 px-5 rounded-3xl text-white">
                                {currentLanguageCode === 'sa' ? (
                                    <ImArrowRight2 className="ml-2" />
                                ) : (
                                    <ImArrowLeft2 className="mr-2" />
                                )}
                                {t('Back')}
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-semibold">
                            {t('Reviews')}
                        </div>
                        <div className="text-6xl pt-5 font-semibold">
                            {averageRateValue}
                        </div>
                        <div className="text-base pt-5 font-thin flex">
                            <StarRatings
                                rating={averageRateValue}
                                starRatedColor="#FFE921"
                                numberOfStars={5}
                                name="rating"
                                starHoverColor={'#FFE921'}
                                starDimension={'35px'}
                                starSpacing={'2px'}
                            />
                        </div>
                        <div className="text-base pt-1 font-thin">
                            ( {t('based_on')} 23 {t('reviews')} )
                        </div>

                        <div className="text-base w-full max-w-3xl pt-12 font-thin">
                            <ProgressBarAll
                                excellect="60"
                                good="80"
                                average="66"
                                below_average={productRate?.id || 0}
                                poor="50"
                            />
                        </div>

                        {/* A Border */}
                        <div className="mt-12 w-full border-t border-black"></div>

                        {/*Comment */}
                        {productsRates.map((item, index) => (
                            <div
                                key={index}
                                className="px-8 text-base w-full max-w-3xl pt-12 font-thin"
                            >
                                <div className="">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div>
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnUrTVjfediV7LLr2ubK5uD7FczLm6xqV7Q&usqp=CAU"
                                                    className="h-24 w-24 bg-gray-200 rounded-full border-2 border-primary"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="mx-5">
                                                <div className="text-thin font-semibold">
                                                    {/* Name */}
                                                    {item.title.slice(0, 5)}
                                                </div>
                                                <div className="text-base font-thin flex items-center">
                                                    <StarRatings
                                                        rating={
                                                            item.rating.rate
                                                        }
                                                        starRatedColor="#FFE921"
                                                        numberOfStars={5}
                                                        name="rating"
                                                        starHoverColor={
                                                            '#FFE921'
                                                        }
                                                        starDimension={'15px'}
                                                        starSpacing={'1px'}
                                                    />
                                                    <div className="px-5 text-thin font-semibold">
                                                        {/* Rating */}
                                                        {item.rating.rate}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-thin font-semibold">
                                            {/* Time */}
                                            {item.rating.rate}am
                                        </div>
                                    </div>
                                    <div className="py-3 text-sm">
                                        {/* Comment */}
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Bottom Margin */}
                        <div className="my-16"></div>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default ProductRateDetails
