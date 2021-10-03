import { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ReviewsModal from './ReviewsModal'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart } from '../../redux/slices/productsSlice'

const ProductRates = ({ review }) => {
    const rates = [
        { title: '5 star', ratePercentage: 60 },
        { title: '4 star', ratePercentage: 50 },
        { title: '3 star', ratePercentage: 20 },
        { title: '2 star', ratePercentage: 15 },
        { title: '1 star', ratePercentage: 10 },
    ]

    const [isOpen, setOpen] = useState(false)

    const dispatch = useDispatch()

    const { allProducts, token } = useSelector((state) => ({
        allProducts: state.seller.allProducts,
        token: state.auth.token,
    }))

    useEffect(() => {
        if (allProducts.length === 0) {
            dispatch(getProductsStart(token))
        }
    }, [allProducts.length, token, dispatch])

    const reviewdProduct = allProducts.find(
        (product) => product.id === review.product
    )

    return (
        <>
            <div className="bg-white shadow-md md:p-6  p-2 rounded-md mb-2">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4 border-b-2 border-gray-100 pb-4 mb-4">
                    <div>{reviewdProduct && reviewdProduct.name}</div>
                    <div className="md:col-span-3">
                        {rates.map(({ title, ratePercentage }, index) => (
                            <div
                                className="grid grid-cols-4 gap-6 items-center mb-1"
                                key={`${title}-${index}`}
                            >
                                <span className="text-sm">{title}</span>
                                <div className="col-span-3">
                                    <ProgressBar
                                        completed={ratePercentage}
                                        height={'10px'}
                                        labelSize={'10px'}
                                        baseBgColor={'#f3f3f7'}
                                        bgColor={'#f7e733'}
                                        labelColor={'#2b2d42'}
                                        borderRadius={'5px'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="flex md:flex-row flex-col space-x-2">
                        <div>
                            {new Array(5).fill({}).map((item, index) => (
                                <span
                                    key={`star-${index}`}
                                    className={`${
                                        index === 4
                                            ? 'text-gray-200'
                                            : 'text-yellowGB'
                                    } text-md`}
                                >
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            ))}
                        </div>
                        <div className="flex space-x-2 mb-2">
                            <h2 className="font-bold">4.7</h2>
                            <span className="font-light">(35 reviews)</span>
                        </div>
                    </div>
                    <span
                        onClick={() => setOpen(!isOpen)}
                        className="text-primary cursor-pointer font-semibold text-sm"
                    >
                        Show Reviews
                    </span>
                </div>
            </div>
            <ReviewsModal review={review} setOpen={setOpen} isOpen={isOpen} />
        </>
    )
}

export default ProductRates
