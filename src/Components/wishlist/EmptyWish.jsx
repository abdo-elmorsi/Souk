import { Link } from 'react-router-dom'
import { HOME } from '../../constants/routes'
import ImageLoader from '../ui/ImageLoader'
import emptyWish from '../../assets/empty-wishlist.jpg'

const EmptyWish = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <div className="mb-6">
                    <ImageLoader
                        src={emptyWish}
                        alt="emptycart"
                        className="h-96 w-96 object-cover"
                    />
                </div>
                <h2 className="text-gray-500 text-3xl mb-4">
                    Your wishlist is empty!
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

export default EmptyWish
