import React from 'react'
// import DiscountRange from './DiscountRange'
// import PriceRange from './PriceRange'
// import RatingRange from './RatingRange'
import '../../styles/filter/filter.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Filter = ({ current_category, sub_categories }) => {
    const { t } = useTranslation()

    return (
        <div className=" border border-gray-200 py-6  bg-gray-50 px-4">
            <div className="mb-10">
                <h3 className="font-semibold text-base capitalize mb-4 pb-1 border-b-2 border-gray-100">
                    {t('Category')}
                </h3>
                <Link
                    to={`/shop/${current_category?.slug}`}
                    className="ml-2 text-base capitalize hover:text-gray-900 text-gray-600 mb-2"
                >
                    {t(`${current_category?.name}`)}
                </Link>
                <ul className="pl-6 ">
                    {sub_categories?.map((cat) => (
                        <li key={cat._id} className="mb-4">
                            <Link
                                to={`/filter/${cat.slug}`}
                                className="font-sm font-semibold  hover:text-gray-900 text-gray-600 mb-2"
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <PriceRange />
            <DiscountRange />
            <RatingRange /> */}
        </div>
    )
}

export default Filter
