import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { slideUp } from '../../helpers/animation'
import { removeFromWishlist } from '../../redux/slices/wishlistSlice'
import ScrollReveal from '../ui/ScrollReveal'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

const WishItem = ({ product }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(removeFromWishlist(product.id))
        toast('product removed')
    }

    const handleAddToCart = () => {
        const order = {
            name: product.name,
            price: product.discountPrice,
            image: product.images[0],
            product: product.id,
            id: product.id,
        }
        dispatch(addToCart(order))
        dispatch(removeFromWishlist(product.id))
        toast.success('product added to cart')
    }

    return (
        <ScrollReveal
            variants={slideUp}
            className="grid lg:grid-cols-6 sm:grid-cols-5 grid-cols-2 items-center gap-4 justify-items-center"
        >
            <span
                onClick={handleDelete}
                className="text-red-500 sm:col-span-1 col-span-2 cursor-pointer text-xl"
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </span>
            <div
                className=" w-full rounded-md h-40 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${product.images[0]})` }}
            ></div>
            <h3 className="font-bold text-lg">{product.name}</h3>
            <h4 className="text-md">$ {product.discountPrice}</h4>
            <h4 className="text-md">
                {product.quantity > 0 ? t('in Stock') : t('sold out')}
            </h4>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                disabled={product.quantity === 0}
                className="lg:col-span-1 hover:bg-secondary transition-all w-full col-span-2 text-white bg-primary font-bold px-6 py-2 rounded-sm"
            >
                {t('Add_To_Cart')}
            </motion.button>
        </ScrollReveal>
    )
}

export default WishItem
