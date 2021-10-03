import Container from '../../Components/ui/Container'
import AdsBanner from '../../Components/home/AdsBanner'
import ProductList from '../../Components/product/ProductList'
import { useTranslation } from 'react-i18next'
// import { useProducts } from '../../hooks/useProducts'
import ProductItemSkeleton from '../../Components/Skeleton/ProductItemSkeleton'
// import ads1 from '../../assets/ads/ads1.jpg'
// import ads6 from '../../assets/ads/ads6.jpg'
// import ads7 from '../../assets/ads/ads7.jpg'
// import ads8 from '../../assets/ads/ads8.jpg'
import sales1 from '../../assets/sales1.jpg'
import '../../styles/market/styles.css'

import { useSelector } from 'react-redux'

const Market = () => {
    const { t } = useTranslation()

    const mainProducts = useSelector((state) => state.mainProducts)

    return (
        <main>
            <section className="py-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={sales1} />
                    <div className="products-container">
                        {mainProducts.length <= 0 &&
                            new Array(5)
                                .fill({})
                                .map((item, index) => (
                                    <ProductItemSkeleton
                                        key={`skeleton-${index}`}
                                    />
                                ))}
                        {mainProducts.length > 0 && mainProducts[0] && (
                            <ProductList
                                animateReveal
                                products={mainProducts.slice(0, 5)}
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            {/* <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads6} />
                    <div className="products-container">
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
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads7} />
                    <div className="products-container">
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
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads8} />
                    <div className="products-container">
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
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads1} />
                    <div className="products-container">
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
                                products={products.slice(0, 5)}
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads6} />
                    <div className="products-container">
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
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads7} />
                    <div className="products-container">
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
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={sales1} />
                    <div className="products-container">
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
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section>
            <section className="pb-20">
                <Container>
                    <h3 className="shop-heading">{t('visit shop')}</h3>
                    <AdsBanner image={ads1} />
                    <div className="products-container">
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
                                products={products.slice(0, 5)}
                                setWidth
                            />
                        )}
                    </div>
                </Container>
            </section> */}
        </main>
    )
}

export default Market
