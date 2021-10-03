import React from 'react'
import { FaShopify, FaMoneyBillWave, FaDolly } from 'react-icons/fa'
import { ImManWoman } from 'react-icons/im'
import { useTranslation } from 'react-i18next'
import Chart1 from '../../charts/adminDBChart'

const Top4items = ({ statistics }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="mx-auto pt-10 max-w-screen-xl">
                <div className="grid grid-flow-row grid-col-1 grid-rows-4 md:grid-flow-col md:grid-col-2 md:grid-rows-2 lg:grid-flow-col lg:grid-col-4 lg:grid-rows-1 gap-4 w-full">
                    {/* NEW ORDERS*/}
                    <div className="bg-violetDB text-white shadow-xl pt-5 pb-5 px-5 rounded">
                        <div className="flex justify-between items-center ">
                            <div>
                                <div className="text-blue text-xs font-semibold">
                                    {t('NEW_ORDERS')}
                                </div>
                                <div className="animate-puls text-4xl font-semibold">
                                    {statistics?.newOrders}
                                </div>
                            </div>
                            <div>
                                <FaShopify
                                    style={{ height: '45px', width: '45px' }}
                                />
                            </div>
                        </div>
                        <div className="w-full mt-2 h-20">
                            <div
                                className="h-full w-full rounded px-8"
                                style={{ background: '#FFC929' }}
                            >
                                <Chart1 />
                            </div>
                        </div>
                    </div>
                    {/* TOTAL INCOME */}
                    <div className="bg-greenDB text-white shadow-xl pt-5 pb-5 px-5 rounded">
                        <div className="flex justify-between items-center ">
                            <div>
                                <div className="text-blue text-xs font-bold">
                                    {t('TOTAL_INCOME')}
                                </div>
                                <div className="text-4xl font-bold">
                                    {statistics?.totalIncoming}
                                </div>
                            </div>
                            <div>
                                <FaMoneyBillWave
                                    style={{ height: '45px', width: '45px' }}
                                />
                            </div>
                        </div>
                        <div className="w-full mt-2 h-20">
                            <div
                                className="h-full w-full rounded px-8"
                                style={{ background: '#FFC929' }}
                            >
                                <Chart1 />
                            </div>
                        </div>
                    </div>
                    {/* TOTAL SALES */}
                    <div className="bg-blueDB text-white shadow-xl pt-5 pb-5 px-5 rounded">
                        <div className="flex justify-between items-center ">
                            <div>
                                <div className="text-blue text-xs font-bold">
                                    {t('TOTAL_SALES')}
                                </div>
                                <div className="text-4xl font-bold">
                                    {statistics?.totalSales}
                                </div>
                            </div>
                            <div>
                                <FaDolly
                                    style={{ height: '45px', width: '45px' }}
                                />
                            </div>
                        </div>
                        <div className="w-full mt-2 h-20">
                            {/* <img
                                src={topChartImg}
                                className="h-20 w-full rounded"
                                alt=""
                            /> */}
                            <div
                                className="h-full w-full rounded px-8"
                                style={{ background: '#FFC929' }}
                            >
                                <Chart1 />
                            </div>
                        </div>
                    </div>
                    {/* TOTAL CUSTOMER */}
                    <div className="bg-yellowDB text-white shadow-xl pt-5 pb-5 px-5 rounded">
                        <div className="flex justify-between items-center ">
                            <div>
                                <div className="text-blue text-xs font-bold">
                                    {t('TOTAL_CUSTOMER')}
                                </div>
                                <div className="text-4xl font-bold">
                                    {statistics?.newCustomers}
                                </div>
                            </div>
                            <div>
                                <ImManWoman
                                    style={{ height: '45px', width: '45px' }}
                                />
                            </div>
                        </div>
                        <div className="w-full mt-2 h-20">
                            <div
                                className="h-full w-full rounded px-8"
                                style={{ background: '#FFC929' }}
                            >
                                <Chart1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top4items
