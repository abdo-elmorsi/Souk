import { motion } from 'framer-motion'
import { slideUp } from '../../helpers/animation'
import ScrollReveal from '../ui/ScrollReveal'
import ProductItem from './ProductItem'

const ProductList = ({
    products,
    light = false,
    setWidth = false,
    animate = slideUp,
    animateReveal = false,
}) => {
    return (
        <>
            {!animateReveal &&
                products?.map(
                    ({
                        id,
                        images,
                        name,
                        discountPrice,
                        originalPrice,
                        slug,
                        subcategory,
                        rating,
                        numReviews,
                    }) => (
                        <motion.div variants={animate} key={`product-${id}`}>
                            <ProductItem
                                light={light}
                                setWidth={setWidth}
                                id={id}
                                slug={slug}
                                images={images}
                                title={name}
                                price={discountPrice}
                                originalPrice={originalPrice}
                                category={subcategory}
                                rating={rating}
                                numReviews={numReviews}
                            />
                        </motion.div>
                    )
                )}
            {animateReveal &&
                products?.map(
                    ({
                        id,
                        images,
                        name,
                        discountPrice,
                        slug,
                        subcategory,
                        originalPrice,
                        rating,
                        numReviews,
                    }) => (
                        <ScrollReveal
                            custom={0.2}
                            variants={animate}
                            key={`product-${id}`}
                        >
                            <ProductItem
                                light={light}
                                setWidth={setWidth}
                                id={id}
                                slug={slug}
                                images={images}
                                title={name}
                                price={discountPrice}
                                originalPrice={originalPrice}
                                category={subcategory}
                                rating={rating}
                                numReviews={numReviews}
                            />
                        </ScrollReveal>
                    )
                )}
        </>
    )
}

export default ProductList
