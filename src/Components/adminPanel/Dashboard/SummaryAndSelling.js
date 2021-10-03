import React from 'react'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'

import SPieChart from '../../charts/SPieChart'

const SummaryAndSelling = ({ products, statistics }) => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation()

    const data = [
        { name: 'Products', value: products?.length },
        { name: 'Sales', value: statistics?.totalSales },
        { name: 'Income', value: statistics?.newCustomers },
        { name: 'Orders', value: statistics?.newOrders },
    ]

    const topSelling = products.slice(0, 3)

    return (
        <>
            <div className="mx-auto flex mt-5 flex-col lg:flex-row max-w-screen-xl">
                {/* SUMMERY */}
                <div
                    className={
                        currentLanguageCode === 'sa'
                            ? 'w-full lg:w-1/2 pr-0 lg:pl-2'
                            : 'w-full lg:w-1/2 pr-0 lg:pr-2'
                    }
                >
                    <div className="bg-white shadow-xl rounded">
                        <div className="font-semibold pt-4 pb-6 px-5 border-b border-black">
                            {t('Summary')}
                        </div>
                        <div
                            style={{
                                paddingTop: '13px',
                                paddingBottom: '14px',
                            }}
                            className="rounded-b px-5 bg-white"
                        >
                            <div
                                style={{ display: 'flex', flexWrap: 'wrap' }}
                                className="justify-center grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full"
                            >
                                {/* Product */}
                                <div
                                    style={{ backgroundColor: '#0088FE' }}
                                    className="cursor-pointer shadow-md py-4 px-5  rounded"
                                >
                                    <div className="items-center ">
                                        <div className="text-sm font-semibold text-white">
                                            {products?.length}
                                        </div>
                                        <div className="text-xs text-white">
                                            {t('Product')}
                                        </div>
                                    </div>
                                </div>
                                {/* Sales */}
                                <div
                                    style={{ backgroundColor: '#00C49F' }}
                                    className="cursor-pointer shadow-md py-4 px-5  rounded"
                                >
                                    <div className="items-center ">
                                        <div className="text-sm font-semibold text-white">
                                            {statistics?.totalSales}
                                        </div>
                                        <div className="text-xs text-white">
                                            {t('Sales')}
                                        </div>
                                    </div>
                                </div>
                                {/* Cost */}
                                <div
                                    style={{ backgroundColor: '#FFBB28' }}
                                    className="cursor-pointer shadow-md py-4 px-5  rounded"
                                >
                                    <div className="items-center ">
                                        <div className="text-sm font-semibold text-white">
                                            {statistics?.newCustomers}
                                        </div>
                                        <div className="text-xs text-white">
                                            {t('Customers')}
                                        </div>
                                    </div>
                                </div>
                                {/* Revenue */}
                                <div
                                    style={{ backgroundColor: '#FF8042' }}
                                    className="cursor-pointer shadow-md py-4 px-5  rounded"
                                >
                                    <div className="items-center ">
                                        <div className="text-sm font-semibold text-white">
                                            {statistics?.newOrders}
                                        </div>
                                        <div className="text-xs text-white">
                                            {t('Orders')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-80">
                            {/* CHART */}

                            <SPieChart data={data} />
                        </div>
                    </div>
                </div>
                {/* Top Selling */}
                <div
                    className={
                        currentLanguageCode === 'sa'
                            ? 'w-full lg:w-1/2 pl-0 pt-5 lg:pt-0 lg:pr-2'
                            : 'w-full lg:w-1/2 pl-0 pt-5 lg:pt-0 lg:pl-2'
                    }
                >
                    <div className="bg-white shadow-xl rounded">
                        <div className="font-semibold pt-4 pb-6 px-5 border-b border-black">
                            {t('Top_Selling')}
                        </div>
                        <div className="flex text-xs text-gray-400 flex-col">
                            {/* 3 products */}
                            {topSelling?.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex h-28 border-b border-black items-center px-5 justify-between"
                                >
                                    <div className="flex">
                                        <div className="h-20 rounded w-24 bg-gray-200">
                                            <img
                                                className="h-20 w-24 rounded"
                                                src={item.images[0]}
                                                alt="product"
                                            />
                                        </div>
                                        <div className="px-5 flex flex-col justify-center">
                                            <div className="text-base font-medium text-black">
                                                {item.name}
                                            </div>
                                            <div>{item.subcategory?.name}</div>
                                            <div>{item.model}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-base font-medium text-black">
                                            {item.discountPrice}
                                        </div>
                                        <div>{t('Sales')}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SummaryAndSelling
