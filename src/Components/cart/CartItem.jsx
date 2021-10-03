import { faHeart, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import { slideUp } from '../../helpers/animation'
import ScrollReveal from '../ui/ScrollReveal'
import { useDispatch } from 'react-redux'
import {
    addQtyItem,
    minusQtyItem,
    removeFromCart,
} from '../../redux/slices/cartSlice'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const CartItem = ({ product }) => {
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const handleMinusQty = () => {
        if (product.quantity === 1) {
            dispatch(removeFromCart(product.id))
            toast.success('product removed from cart')
        } else {
            dispatch(minusQtyItem(product.id))
        }
    }

    return (
        <ScrollReveal
            variants={slideUp}
            className="grid sm:grid-cols-6 grid-cols-1 p-4 items-center sm:justify-items-center bg-gray-100 rounded-lg"
        >
            <div className="sm:col-span-3   sm:mb-0 mb-4 justify-self-start grid gap-6 lg:grid-cols-2">
                <div
                    className=" h-40 rounded-md bg-center bg-contain bg-no-repeat"
                    style={{
                        backgroundImage: `url(${
                            product.image ? product.image : null
                        })`,
                    }}
                ></div>
                <div className="flex flex-col justify-between">
                    <h3 className="font-bold text-md">{product.name}</h3>
                    <div className="pt-2">
                        <h4 className="text-sm font-light mb-2">
                            Product seller
                        </h4>
                        <div className="flex items-center space-x-4">
                            <span className="text-secondary text-sm">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="mx-2 font-semibold">
                                    {t('Add To Wishlist')}
                                </span>
                            </span>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-red-500 hover:text-primary cursor-pointer text-sm "
                                onClick={() =>
                                    dispatch(removeFromCart(product.id))
                                }
                            >
                                <FontAwesomeIcon icon={faTrashAlt} />
                                <span className="mx-2 font-semibold">
                                    {t('Delete')}
                                </span>
                            </motion.span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center ">
                <motion.button
                    onClick={() => dispatch(addQtyItem(product.id))}
                    whileTap={{ scale: 0.9 }}
                    className="border hover:bg-gray-400 border-gray-300 bg-gray-200 w-10 h-10 font-bold text-lg rounded-md"
                >
                    +
                </motion.button>
                <span className="font-bold text-md inline-block mx-4">
                    {product.qty}
                </span>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={handleMinusQty}
                    className="border hover:bg-gray-400 border-gray-300 bg-gray-200 w-10 h-10 font-bold text-lg rounded-md"
                >
                    -
                </motion.button>
            </div>
            <div className="sm:block hidden">
                <p className="font-bold text-md">${product.price}</p>
            </div>
            <div className="sm:block hidden">
                <p className="font-bold text-md">
                    ${(product.price * product.qty).toFixed(2)}
                </p>
            </div>
        </ScrollReveal>
    )
}

export default CartItem
