import Container from '../../Components/ui/Container'
import ProductShowcase from '../../Components/product/ProductShowcase'
import ProductInfo from '../../Components/product/ProductInfo'
import DeliveryLocation from '../../Components/productDetails/DeliveryLocation'
import SellerDetails from '../../Components/productDetails/SellerDetails'
import AdsBanner from '../../Components/home/AdsBanner'
import ProductList from '../../Components/product/ProductList'
import { useTranslation } from 'react-i18next'
import useScrollTop from '../../hooks/useScrollTop'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ProductItemSkeleton from '../../Components/Skeleton/ProductItemSkeleton'
import ProductShowSkeleton from '../../Components/Skeleton/ProductShowSkeleton'
import ads1 from '../../assets/ads/ads1.jpg'
// import ads7 from '../../assets/ads/ads7.jpg'
import { motion } from 'framer-motion'
import {
    animateList,
    slideToLeft,
    slideToRight,
    slideUp,
} from '../../helpers/animation'
import ScrollReveal from '../../Components/ui/ScrollReveal'
import '../../styles/product/product-detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import CustomerReviews from '../../Components/product/reviews'
import GetSingleProduct from '../../hooks/getSingleProduct'
import { getProductsStart } from '../../redux/slices/productsSlice'
import ImageLoader from '../../Components/ui/ImageLoader'

const ProductDetails = () => {
    const { t } = useTranslation()
    useScrollTop()
    const { slug } = useParams()
    const { currentProduct } = GetSingleProduct(slug)
    const mainProducts = useSelector((state) => state.mainProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (mainProducts.length === 0) {
            dispatch(getProductsStart())
        }
    }, [mainProducts.length, dispatch])

    const specs = [
        { spec: 'SKU', content: currentProduct?.sku },
        { spec: 'color', content: currentProduct?.color },
        { spec: 'main material', content: currentProduct?.mainMaterial },
        { spec: 'model', content: currentProduct?.model },
        {
            spec: 'production country',
            content: currentProduct?.productionCountry,
        },
        { spec: 'Product Line', content: currentProduct?.productLine },
        { spec: 'size', content: currentProduct?.size },
        { spec: 'weight', content: currentProduct?.weight },
    ]
    return (
        <section className="mt-8 pb-20">
            <Container>
                {/* <h3 className="my-4 font-bold">
                    Home &gt; Shop &gt; product_category &gt; product_name
                </h3> */}
                <div className="grid-container">
                    <div className="product-info">
                        {!currentProduct && <ProductShowSkeleton />}
                        {currentProduct && (
                            <>
                                <motion.div
                                    variants={slideToRight}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <ProductShowcase
                                        images={currentProduct.images}
                                    />
                                </motion.div>
                                <motion.div
                                    variants={slideToLeft}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <ProductInfo product={currentProduct} />
                                </motion.div>
                            </>
                        )}
                    </div>
                    <ScrollReveal
                        variants={animateList}
                        className="delivery-info"
                    >
                        <motion.div variants={slideUp}>
                            <DeliveryLocation />
                        </motion.div>
                        <motion.div variants={slideUp}>
                            <SellerDetails />
                        </motion.div>
                    </ScrollReveal>
                </div>
                <AdsBanner image={ads1} />
                <ScrollReveal variants={slideUp} className="detail-container">
                    <h4 className="detail-heading">{t('product details')}</h4>

                    <p className="detail-text">{currentProduct?.details}</p>
                    <div className="img-box">
                        {currentProduct?.images?.map((img) => (
                            <ImageLoader
                                src={img}
                                key={img}
                                className="img-container"
                            />
                        ))}
                    </div>
                </ScrollReveal>
                <ScrollReveal variants={slideUp} className="spec-container">
                    <h4 className="detail-heading">
                        {t('product specification')}
                    </h4>
                    <div className="mb-4">
                        {specs?.map(({ spec, content }, index) => (
                            <div className="spec-info" key={`spec-${index}`}>
                                <h4 className="font-bold capitalize">
                                    {spec}:
                                </h4>
                                <p className="sm:text-base text-sm">
                                    {content}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-2 mb-2">
                        <h4 className="font-bold capitalize">Website :</h4>
                        <p className="text-base">{currentProduct?.website}</p>
                    </div>
                </ScrollReveal>
            </Container>
            <div className="bg-gray-100 py-12 mb-16">
                <Container>
                    <h3 className="product-heading">{t('most popular')}</h3>
                    <div className="product-list">
                        {mainProducts.length === 0 &&
                            new Array(5)
                                .fill({})
                                .map((item, index) => (
                                    <ProductItemSkeleton
                                        key={`skeleton-${index}`}
                                    />
                                ))}

                        {mainProducts.length > 0 && (
                            <ProductList
                                setWidth
                                light
                                products={mainProducts.slice(0, 5)}
                                animateReveal
                            />
                        )}
                    </div>
                </Container>
            </div>
            <Container>
                {currentProduct?.reviews.length === 0 && (
                    <div className="bg-gray-50  rounded p-4 ">
                        <h2 className="text-gray-800 font-semibold border-b-2 pb-2 border-gray-100 ">
                            Customers Reviews
                        </h2>
                        <div className="text-center py-10">
                            <h2 className="text-gray-800  ">
                                There is No reviews for this product
                            </h2>
                        </div>
                    </div>
                )}
                {currentProduct?.reviews.length > 0 && (
                    <div className="bg-gray-50 rounded p-4">
                        <div className="md:px-6  mb-4 bg-white shadow-md rounded-lg  px-4 py-4 flex items-center justify-between ">
                            <h2 className="text-gray-800 font-semibold ">
                                Customers Reviews
                            </h2>
                            <Link
                                to={`/reviews/${slug}`}
                                className="text-primary px-2 py-1  rounded hover:bg-red-100"
                            >
                                View more
                            </Link>
                        </div>
                        <CustomerReviews
                            reviews={currentProduct.reviews}
                            slug={slug}
                            rating={currentProduct.rating}
                        />
                    </div>
                )}
            </Container>

            {/* <div className="bg-gray-100 py-12 mb-16">
                <Container>
                    <h3 className="product-heading">
                        {t('you may also like')}
                    </h3>
                    <div className="product-list">
                        {mainProducts.length === 0 &&
                            new Array(5)
                                .fill({})
                                .map((item, index) => (
                                    <ProductItemSkeleton
                                        key={`skeleton-${index}`}
                                    />
                                ))}

                        {mainProducts.length > 0 && (
                            <ProductList
                                products={mainProducts.slice(10, 15)}
                                light
                                setWidth
                                animateReveal
                            />
                        )}
                    </div>
                </Container>
            </div>
            <Container>
                <AdsBanner image={ads7} />
                <h3 className="product-heading">
                    {t('more products from this seller')}
                </h3>
                <div className="product-grid">
                    {(isLoading || isError) &&
                        new Array(10)
                            .fill({})
                            .map((item, index) => (
                                <ProductItemSkeleton
                                    key={`skeleton-${index}`}
                                />
                            ))}

                    {!isError && products && (
                        <ProductList
                            products={products.slice(10, 21)}
                            animateReveal
                        />
                    )}
                </div>
            </Container> */}
        </section>
    )
}

export default ProductDetails
