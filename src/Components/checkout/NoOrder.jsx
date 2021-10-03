import { Link } from 'react-router-dom'
import { HOME } from '../../constants/routes'
import ImageLoader from '../ui/ImageLoader'
import noOrder from '../../assets/no_orders.png'

const NoOrder = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <div className="mb-2">
                    <ImageLoader
                        src={noOrder}
                        alt="no Order"
                        className="h-72 w-72 object-contain mx-auto"
                    />
                </div>
                <h2 className="text-gray-500 text-3xl mb-4">
                    You have no orders
                </h2>
                <p className="mb-6">
                    Explore our categories and discover our best offers!
                </p>
                <Link
                    to={HOME}
                    className="px-6 py-2 font-bold rounded bg-primary text-white hover:opacity-90"
                >
                    Start Shopping
                </Link>
            </div>
        </div>
    )
}

export default NoOrder
