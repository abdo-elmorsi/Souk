import Container from '../../Components/ui/Container'
import { useParams } from 'react-router'
import ProductList from '../../Components/product/ProductList'
import Filter from '../../Components/filters'
import { useTranslation } from 'react-i18next'
import { HOME } from '../../constants/routes'
import { Link } from 'react-router-dom'
import useScrollTop from '../../hooks/useScrollTop'
import ProductItemSkeleton from '../../Components/Skeleton/ProductItemSkeleton'
import ImageLoader from '../../Components/ui/ImageLoader'
import ads2 from '../../assets/ads/ads2.jpg'
import ads3 from '../../assets/ads/ads3.jpg'
import ads4 from '../../assets/ads/ads4.jpg'
import ads5 from '../../assets/ads/ads5.jpg'

import '../../styles/shop/styles.css'
import { useSelector } from 'react-redux'

const SubCategoryFilter = () => {
    const { sub_category } = useParams()
    const {
        subCategories,
        categories,
        mainProducts,
        isLoadingProduct,
        productError,
    } = useSelector((state) => ({
        subCategories: state.seller.AllSubCategories,
        categories: state.seller.AllCategories,
        mainProducts: state.mainProducts,
        isLoadingProduct: state.loadingState.isLoadingProduct,
        productError: state.errorState.productError,
    }))

    const currentSubCategory = subCategories?.find(
        (cat) => sub_category === cat.slug
    )

    const parentCategory = categories?.find(
        (cat) => cat._id === currentSubCategory?.category
    )

    const allCurrentSubCategories = subCategories?.filter(
        (cat) => cat.category === parentCategory?._id
    )

    const filteredProducts = mainProducts?.filter(
        (product) => product.subcategory?.slug === sub_category
    )

    const { t } = useTranslation()

    useScrollTop()
    return (
        <section className=" pb-20">
            <Container>
                <h3 className="my-4 font-bold">
                    <Link to={HOME}>{t('Home')}</Link> {`>`}{' '}
                    <Link to={`/shop/${parentCategory?.slug}`}>
                        {t('Shop')}
                    </Link>{' '}
                    {`>`}
                    {t(`${sub_category}`)}
                </h3>

                <div className="filter-container">
                    <div className="xl:block hidden">
                        <div className="mb-10">
                            {parentCategory?._id && (
                                <Filter
                                    current_category={parentCategory}
                                    sub_categories={allCurrentSubCategories}
                                />
                            )}
                        </div>
                        {[ads2, ads3, ads4, ads5].map((item, index) => (
                            <div
                                key={`ads-${index}`}
                                className="rounded-md overflow-hidden p-2 hover:p-1 bg-gray-200 mb-10"
                                style={{ height: 450 }}
                            >
                                <ImageLoader
                                    src={item}
                                    alt="ads"
                                    className="h-full w-full"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-4">
                        <div className="all-products">
                            {isLoadingProduct &&
                                !productError &&
                                new Array(44)
                                    .fill({})
                                    .map((item, index) => (
                                        <ProductItemSkeleton
                                            key={`skeleton-${index}`}
                                        />
                                    ))}

                            {filteredProducts?.length > 0 && (
                                <ProductList
                                    products={filteredProducts}
                                    animateReveal
                                />
                            )}
                            {filteredProducts?.length === 0 && (
                                <div className="py-4 col-span-4 text-center bg-gray-50">
                                    No Product Was Found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SubCategoryFilter
