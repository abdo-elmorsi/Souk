import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { slideUp } from '../../helpers/animation'
import ScrollReveal from '../ui/ScrollReveal'
import {
    addQtyItem,
    minusQtyItem,
    removeFromCart,
} from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

const CheckoutItem = ({ product }) => {
    const handleMinusQty = () => {
        if (product.qty === 1) {
            dispatch(removeFromCart(product.id))
            toast.success('product removed from cart')
        } else {
            dispatch(minusQtyItem(product.id))
        }
    }

    const dispatch = useDispatch()

    return (
        <ScrollReveal
            variants={slideUp}
            className="bg-white rounded-md  p-4 mb-4 shadow-md"
        >
            <div className="grid xl:grid-cols-2 gap-2 items-center">
                <div className="flex items-center">
                    <div
                        className="rounded-md  h-24 w-28 bg-center bg-contain bg-no-repeat"
                        style={{
                            backgroundImage: `url(${
                                product.image
                                    ? `data:image/png;base64,${product.image}`
                                    : null
                            })`,
                        }}
                    />

                    <div className="mx-6">
                        <h3 className="font-bold text-lg mb-2">
                            {product.name}
                        </h3>
                        <p className="text-gray-500">product description</p>
                    </div>
                </div>
                <div className="flex xl:justify-self-end items-center">
                    <div className="flex items-center">
                        <button
                            onClick={() => dispatch(addQtyItem(product.id))}
                            className="border border-gray-300 bg-gray-200 w-8 h-8 font-bold text-lg rounded-md"
                        >
                            +
                        </button>
                        <span className="font-bold mx-4 text-md">
                            {product.qty}
                        </span>
                        <button
                            onClick={handleMinusQty}
                            className="border border-gray-300 bg-gray-200 w-8 h-8 font-bold text-lg rounded-md"
                        >
                            -
                        </button>
                    </div>
                    <div className="mx-6">${product.price}</div>
                    <span
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="text-red-500 text-lg cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default CheckoutItem
