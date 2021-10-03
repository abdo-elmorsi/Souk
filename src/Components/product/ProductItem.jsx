import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import '../../styles/product/product.css'
import {
    addQtyItem,
    addToCart,
    minusQtyItem,
    removeFromCart,
} from '../../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { RatingView } from 'react-simple-star-rating'

const ProductItem = ({
    slug,
    id,
    images,
    title,
    price,
    category,
    light = false,
    setWidth = false,
    originalPrice,
    rating,
    numReviews,
}) => {
    const dispatch = useDispatch()
    const { foundProductInCart } = useSelector((state) => ({
        foundProductInCart: state.cart.find((item) => item.id === id),
    }))

    const handleAddToCart = () => {
        const order = {
            name: title,
            price,
            image: images[0],
            product: id,
            id,
        }
        dispatch(addToCart(order))
        toast.success('product added to cart')
    }

    const handleMinusQty = () => {
        if (foundProductInCart.qty === 1) {
            dispatch(removeFromCart(id))
            toast.success('product removed from cart')
        } else {
            dispatch(minusQtyItem(id))
        }
    }

    const { t } = useTranslation()
    const discountPercentage = (
        ((originalPrice - price) / price) *
        100
    ).toFixed(1)

    return (
        <div
            className={` ${
                light ? 'bg-white' : 'bg-gray-100'
            } h-full flex flex-col relative product-card rounded-md px-3 transform overflow-hidden transition hover:scale-105 pt-3 pb-1 shadow-lg
            ${setWidth && 'xl:w-auto w-72 '}
            `}
        >
            <NavLink to={`/product/${slug}`}>
                <div
                    className={`${
                        light ? 'bg-white' : 'bg-white'
                    } product-img rounded-md lg:h-56 h-72 mb-2  bg-contain bg-no-repeat bg-center`}
                    style={{
                        backgroundImage: `url(${images[0]})`,
                    }}
                ></div>
            </NavLink>

            <div className="mb-2">
                <div>
                    <h3 className="font-semibold lg:text-sm text-md">
                        {title && title}
                    </h3>
                    <p className="font-light lg:text-xs text-sm">
                        {category?.name && category?.name}
                    </p>
                </div>
                <div className=" flex items-start space-x-1">
                    <RatingView ratingValue={rating} size={18} />

                    <span className="text-gray-600 text-sm">
                        ({numReviews})
                    </span>
                </div>
            </div>
            <div className="flex items-center mt-auto justify-between">
                <div className="price">
                    <h5 className="font-semibold text-lg">${price}</h5>
                    {price < originalPrice && (
                        <p>
                            <span className="mr-2 text-gray-400 line-through">
                                {originalPrice}
                            </span>
                            <span className="text-primary text-bold text-sm">
                                -{discountPercentage}%
                            </span>
                        </p>
                    )}
                </div>

                {!foundProductInCart && (
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className="product-btn lg:text-sm text-md font-semibold px-4 py-2 rounded-md"
                    >
                        {t('Add_To_Cart')}
                    </motion.button>
                )}

                {foundProductInCart && (
                    <div className="flex space-x-4 items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => dispatch(addQtyItem(id))}
                            className="product-btn lg:text-sm text-md font-semibold w-8 h-8 rounded-md"
                        >
                            +
                        </motion.button>
                        <span className="font-bold">
                            {foundProductInCart.qty}
                        </span>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleMinusQty}
                            className="product-btn disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm text-md font-semibold w-8 h-8 rounded-md"
                        >
                            -
                        </motion.button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductItem
