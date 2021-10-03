import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
// import AdsBanner from '../../Components/home/AdsBanner'
import CategoryNav from '../../Components/home/CategoryNav'
import ProductItemSkeleton from '../../Components/Skeleton/ProductItemSkeleton'
import Container from '../../Components/ui/Container'
import { MARKET } from '../../constants/routes'
// import { useProducts } from '../../hooks/useProducts'
import '../../styles/home/home.css'
import sales1 from '../../assets/sales1.jpg'
import sales2 from '../../assets/sales2.jpg'
import Carousel from '../../Components/ui/Carousel'
import ImageLoader from '../../Components/ui/ImageLoader'
// import ads1 from '../../assets/ads/ads1.jpg'
// import ads6 from '../../assets/ads/ads6.jpg'
// import ads7 from '../../assets/ads/ads7.jpg'
import ads3 from '../../assets/ads/ads3.jpg'
import ads9 from '../../assets/ads/ads9.jpg'
import ads10 from '../../assets/ads/ads10.jpg'
import SubButtons from '../../Components/home/SubButtons'
import ProductList from '../../Components/product/ProductList'
import {
    animateList,
    fadeIn,
    slideDown,
    slideToLeft,
    slideToRight,
} from '../../helpers/animation'
import ScrollReveal from '../../Components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { getProductsStart } from '../../redux/slices/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Components/ui/Loader'

const Home = () => {
    const { t } = useTranslation()

    const dispatch = useDispatch()

    const { mainProducts, isLoadingProduct, categories, productError } =
        useSelector((state) => ({
            mainProducts: state.mainProducts,
            isLoadingProduct: state.loadingState.isLoadingProduct,
            productError: state.errorState.productError,
            categories: state.seller.AllCategories,
        }))

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(getProductsStart())
        }
    }, [dispatch, categories.length])

    return (
        <main>
            {isLoadingProduct && !productError?.msg && <Loader />}
            <section className="py-10">
                <Container>
                    <div className="banner-container">
                        <div className="category-container">
                            <motion.div
                                variants={slideToRight}
                                initial="hidden"
                                animate="visible"
                                className="category-navlist"
                            >
                                <CategoryNav categories={categories} />
                            </motion.div>
                        </div>
                        <div className="main-banner">
                            <motion.div
                                className="banner-carousel"
                                variants={fadeIn}
                                initial="hidden"
                                animate="visible"
                            >
                                <Carousel>
                                    {[sales1, sales2, ads10].map(
                                        (item, index) => (
                                            <div
                                                className="h-full"
                                                key={`sales-${index}`}
                                            >
                                                <ImageLoader
                                                    src={item}
                                                    alt="banner"
                                                    className="banner-img"
                                                />
                                            </div>
                                        )
                                    )}
                                </Carousel>
                            </motion.div>

                            <motion.div
                                variants={slideToLeft}
                                initial="hidden"
                                animate="visible"
                                className="banner-ad-01"
                            >
                                <ImageLoader
                                    src={ads3}
                                    alt="banner"
                                    className="banner-img"
                                />
                            </motion.div>
                            <motion.div
                                variants={slideToLeft}
                                initial="hidden"
                                animate="visible"
                                className="banner-ad-02"
                            >
                                <ImageLoader
                                    src={ads9}
                                    alt="banner"
                                    className="banner-img"
                                />
                            </motion.div>
                            <motion.div
                                variants={animateList}
                                initial="hidden"
                                animate="visible"
                                className="sub-btns-container"
                            >
                                <SubButtons />
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="pb-10">
                <Container>
                    <Title title={t('Top_Selling')} link={MARKET} />
                    <div className="product-list-container-01">
                        {isLoadingProduct &&
                            !productError?.msg &&
                            mainProducts.length === 0 &&
                            new Array(5)
                                .fill({})
                                .map((item, index) => (
                                    <ProductItemSkeleton
                                        key={`skeleton-${index}`}
                                    />
                                ))}

                        {mainProducts.length > 0 && !!mainProducts[0] && (
                            <ProductList
                                animateReveal
                                products={mainProducts}
                            />
                        )}
                        {productError?.msg && (
                            <div className="text-center col-span-5 bg-gray-50 shadow rounded flex items-center justify-center py-8">
                                <h2 className="font-bold capitalize">
                                    An error accured please try again later
                                </h2>
                            </div>
                        )}
                    </div>
                </Container>
            </section>
            {/* <section className="pb-20">
                <Container>
                    <Title title={t('Daily_Deals')} link={MARKET} />
                </Container>
                <div className="bg-gray-100 py-10">
                    <Container>
                        <div className="product-list-container-01">
                            {(isLoading || isError) &&
                                new Array(5)
                                    .fill({})
                                    .map((item, index) => (
                                        <ProductItemSkeleton
                                            key={`skeleton-${index}`}
                                        />
                                    ))}

                            {!isError && products && (
                                <ProductList
                                    animateReveal
                                    products={products.slice(5, 10)}
                                    light
                                />
                            )}
                        </div>
                    </Container>
                </div>
            </section>
            <section className="pb-20">
                <Container>
                    <AdsBanner image={ads1} />
                    <Title title={t('Top_Shop')} link={MARKET} />
                    <div className="product-list-container-01">
                        {(isLoading || isError) &&
                            new Array(5)
                                .fill({})
                                .map((item, index) => (
                                    <ProductItemSkeleton
                                        key={`skeleton-${index}`}
                                    />
                                ))}

                        {!isError && products && (
                            <ProductList
                                animateReveal
                                products={products.slice(10, 15)}
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <Title title={t('General_Products')} link={MARKET} />
                </Container>
                <div className="bg-gray-100 py-12">
                    <Container>
                        <div className="product-list-container-02">
                            {(isLoading || isError) &&
                                new Array(5)
                                    .fill({})
                                    .map((item, index) => (
                                        <ProductItemSkeleton
                                            key={`skeleton-${index}`}
                                        />
                                    ))}

                            {!isError && products && (
                                <ProductList
                                    animateReveal
                                    products={products.slice(15, 20)}
                                    light
                                />
                            )}
                        </div>
                    </Container>
                </div>
            </section>
            <section className="pb-28">
                <Container>
                    <div className="mb-16">
                        <AdsBanner image={ads6} />
                        <Title title={t('Last_Seen')} />
                        <div className="product-list-container-02">
                            {(isLoading || isError) &&
                                new Array(5)
                                    .fill({})
                                    .map((item, index) => (
                                        <ProductItemSkeleton
                                            key={`skeleton-${index}`}
                                        />
                                    ))}

                            {!isError && products && (
                                <ProductList
                                    animateReveal
                                    products={products.slice(0, 10)}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <AdsBanner image={ads7} />
                        <Title title={t('Top_Checked_Products')} />
                        <div className="product-list-container-03">
                            {(isLoading || isError) &&
                                new Array(5)
                                    .fill({})
                                    .map((item, index) => (
                                        <ProductItemSkeleton
                                            key={`skeleton-${index}`}
                                        />
                                    ))}

                            {!isError && products && (
                                <ProductList
                                    animateReveal
                                    products={products.slice(10, 15)}
                                />
                            )}
                        </div>
                    </div>
                </Container>
            </section> */}
        </main>
    )
}

const Title = ({ title, link = null }) => {
    const { t } = useTranslation()
    return (
        <ScrollReveal
            variants={slideDown}
            className="flex items-center justify-between mb-6"
        >
            <h3 className="text-gray-800 font-bold capitalize text-lg">
                {title}
            </h3>
            {link && (
                <NavLink
                    to={link}
                    className="text-md font-semibold hover:text-primary"
                >
                    {t('See_More')}
                </NavLink>
            )}
        </ScrollReveal>
    )
}

export default Home
