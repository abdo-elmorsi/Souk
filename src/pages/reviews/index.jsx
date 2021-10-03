import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CustomerReviews from '../../Components/product/reviews'
import Container from '../../Components/ui/Container'
import useScrollTop from '../../hooks/useScrollTop'
import GetSingleProduct from '../../hooks/getSingleProduct'

const ReviewsPage = () => {
    const { slug } = useParams()
    useScrollTop()
    const { currentProduct } = GetSingleProduct(slug)

    return (
        <section className="py-10">
            <Container>
                <div className="bg-gray-100 p-4 rounded">
                    <div className="md:px-6  mb-4 bg-white shadow-md rounded-lg  px-4 py-4 flex items-center space-x-4 ">
                        <Link
                            to={`/product/${slug}`}
                            className="text-gray-800 hover:text-primary"
                        >
                            <span className="text-2xl">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </span>
                        </Link>
                        <h2 className="text-gray-800 font-semibold ">
                            Customers Reviews
                        </h2>
                    </div>
                    {currentProduct?.reviews.length > 0 && (
                        <CustomerReviews
                            rating={currentProduct.rating}
                            reviews={currentProduct.reviews}
                        />
                    )}
                    {currentProduct?.reviews.length === 0 && (
                        <div className="text-center py-10">
                            <h2 className="text-gray-800  ">
                                There is No reviews for this product
                            </h2>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default ReviewsPage
