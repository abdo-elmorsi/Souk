import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { RatingView } from 'react-simple-star-rating'
import { useTranslation } from 'react-i18next'
import {
    addToWishlist,
    removeFromWishlist,
} from '../../redux/slices/wishlistSlice'
import {
    addQtyItem,
    addToCart,
    minusQtyItem,
    removeFromCart,
} from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const ProductInfo = ({ product }) => {
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const { name, originalPrice, discountPrice, brand, rating, id, images } =
        product

    const { foundProductInCart } = useSelector((state) => ({
        foundProductInCart: state.cart.find((item) => item.id === id),
    }))

    const handleAddToCart = () => {
        const order = {
            name,
            price: product.discountPrice,
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

    const { foundProductInWishlist } = useSelector((state) => ({
        foundProductInWishlist: state.wishlist.find((item) => item.id === id),
    }))

    return (
        <div>
            <div className="mb-4 pb-2 border-b-2 border-gray-200">
                <h3 className="capitalize font-semibold text-2xl mb-2">
                    {name}
                </h3>
                <p className="text-lg font-light">Brand: {brand}</p>
                <div className="flex items-center space-x-4 my-4">
                    <RatingView ratingValue={rating} />
                </div>
            </div>
            <div>
                <div className="mb-10">
                    <h3 className="font-bold text-3xl mb-2">
                        $ {discountPrice}
                    </h3>
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="text-gray-400 line-throw text-md">
                            {originalPrice}
                        </span>
                        <span className="font-bold text-primary">
                            {((originalPrice - discountPrice) * 0.1).toFixed(2)}
                            %
                        </span>
                    </div>
                    {/* <p className="font-light text-lg">
                        + shipping from ₦ 1.41 to LEKKI-AJAH (SANGOTEDO)
                    </p> */}
                </div>
                {!foundProductInCart && (
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className="bg-primary  relative px-2 mb-4 capitalize font-semibold text-white text-lg py-3 rounded w-full"
                    >
                        <span className="text-xl absolute left-4 top-1/2 transform -translate-y-1/2 ">
                            <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                        <span>{t('Add_To_Cart')}</span>
                    </motion.button>
                )}
                {foundProductInCart && (
                    <div className="flex mb-2 space-x-4 items-center justify-start">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
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
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleMinusQty}
                            className="product-btn disabled:cursor-not-allowed disabled:opacity-50 lg:text-sm text-md font-semibold w-8 h-8 rounded-md"
                        >
                            -
                        </motion.button>
                        <span className="text-lg font-semi-bold text-red-500">
                            ({foundProductInCart.qty} Items in Cart)
                        </span>
                    </div>
                )}
                {!foundProductInWishlist && (
                    <span
                        onClick={() => dispatch(addToWishlist(product))}
                        className="cursor-pointer text-secondary hover:text-primary transform  transition-all font-semibold flex text-lg"
                    >
                        <span>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className="mx-4"> {t('Add To Wishlist')} </span>
                    </span>
                )}
                {foundProductInWishlist && (
                    <span
                        onClick={() => dispatch(removeFromWishlist(product.id))}
                        className="cursor-pointer text-secondary hover:text-primary transform  transition-all font-semibold flex text-lg"
                    >
                        <span>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className="mx-4">
                            {t('remove from Wishlist')}
                        </span>
                    </span>
                )}
            </div>
        </div>
    )
}

export default ProductInfo
