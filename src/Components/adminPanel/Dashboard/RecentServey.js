import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import dummyData from '../../../dummyData/RecentProducts.json'

const RecentServey = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
            <div className="pt-5">
                <div className="mx-auto flex flex-col lg:flex-row max-w-screen-xl">
                    {/* Order Activity */}
                    <div className="w-full lg:w-4/12">
                        <div className="bg-white shadow-xl rounded h-52">
                            <div className="flex px-5 py-3 border-b border-black justify-between">
                                <div className="font-semibold">
                                    {t('Order_Activity')}
                                </div>
                                <div className="">...</div>
                            </div>
                            <div className="mt-3 flex px-8 py-3 text-sm justify-between">
                                <div className="">{t('Delevered')}</div>
                                <div className="text-xs text-gray-400 flex items-center">
                                    25 {t('min_ago')}
                                </div>
                            </div>
                            <div className="flex px-8 py-3 text-sm justify-between">
                                <div className="">{t('On Going')}</div>
                                <div className="text-xs text-gray-400 flex items-center">
                                    1 {t('hour_to_the_end')}
                                </div>
                            </div>
                            <div className="flex px-8 py-3 text-sm justify-between">
                                <div className="">{t('Starting')}</div>
                                <div className="text-xs text-gray-400 flex items-center">
                                    {t('In')} 24 {t('hours')}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent Products */}
                    <div className="w-full lg:w-4/12 my-5 lg:my-0 mx-0 lg:mx-4">
                        <div className="bg-white shadow-xl rounded h-52">
                            <div className="flex px-5 py-3 border-b border-black justify-between">
                                <div className="font-semibold">
                                    {t('Recent_Products')}
                                </div>
                                <div className="">...</div>
                            </div>

                            <div className="">
                                <div className="flex">
                                    <div
                                        className={
                                            currentLanguageCode === 'sa'
                                                ? 'h-16 w-1/2 bg-gray-300 ml-1 mr-7 mt-2 rounded'
                                                : 'h-16 w-1/2 bg-gray-300 ml-7 mr-1 mt-2 rounded'
                                        }
                                    >
                                        <img
                                            className="h-16 w-full rounded"
                                            src={dummyData[0].image}
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className={
                                            currentLanguageCode === 'sa'
                                                ? 'h-16 w-1/2 bg-gray-300 mr-1 ml-7 mt-2 rounded'
                                                : 'h-16 w-1/2 bg-gray-300 mr-7 ml-1 mt-2 rounded'
                                        }
                                    >
                                        <img
                                            className="h-16 w-full rounded"
                                            src={dummyData[1].image}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent Buyers
                    <div className="w-full lg:w-4/12">
                        <div className="bg-white shadow-xl rounded h-52">
                            <div className="flex px-5 py-3 border-b border-black justify-between">
                                <div className="font-semibold">
                                    {t('Recent_Buyers')}
                                </div>
                                <div className="">...</div>
                            </div>
                            {dummyData2.map((item) => (
                                <div
                                    key={item.id}
                                    className="mt-3 flex px-8 py- text-sm justify-betwee"
                                >
                                    <div className="h-9 w-9 rounded-full bg-gray-300">
                                        <img
                                            className="object-cover h-9 w-9 rounded-full cover"
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="mx-5 text-md flex items-center">
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default RecentServey
