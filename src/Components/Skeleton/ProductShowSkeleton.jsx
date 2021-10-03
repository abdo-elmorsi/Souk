import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const ProductShowSkeleton = () => {
    return (
        <div className="flex flex-col w-max">
            <SkeletonTheme color="#eee" highlightColor="#f4f4f4">
                <Skeleton height={450} />
            </SkeletonTheme>

            <div className="flex space-x-2">
                <SkeletonTheme color="#eee" highlightColor="#f4f4f4">
                    <Skeleton count={4} width={90} height={90} />
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default ProductShowSkeleton
