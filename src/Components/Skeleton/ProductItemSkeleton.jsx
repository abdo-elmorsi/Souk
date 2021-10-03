import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductItemSkeleton = () => {
    return (
        <div className="flex flex-col w-max">
            <Skeleton height={200} width={180} />
            <Skeleton width={180} />
            <Skeleton width={180} />

            <div className="mt-2 flex  justify-end ">
                <Skeleton height={30} width={120} />
            </div>
        </div>
    )
}

export default ProductItemSkeleton
