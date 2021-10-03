import React from 'react'
import {useTranslation} from 'react-i18next'
import Chart1 from "../../charts/adminDBChart3"

const CloselyGraph = () => {
    const {t} = useTranslation()
    const [activeBtn, setActiveBtn] = React.useState("week")
    const [activeBtn2, setActiveBtn2] = React.useState("sales")
    return (
        <>
            <div className="mx-auto bg-white shadow-xl rounded mt-5 max-w-screen-xl">
                <div className="pt-6 px-5 pb-3 border-b border-black font-semibold">
                    {t('Closely_Graph_Analysis')}
                </div>
                <div className="flex rounded-b" style={{ height: '500px' }}>
                    {/* Left */}
                    <div className="mx-2 w-24 mt-5">
                        <div className="w-full flex justify-center pt-10 pb-3 bg-backgroundDB">
                            <div
                                onClick={() => {
                                    setActiveBtn('week')
                                }}
                                className={
                                    activeBtn === 'week'
                                        ? 'border-b-2 cursor-pointer border-red-500'
                                        : 'border-b-2 cursor-pointer border-backgroundDB'
                                }
                            >
                                {t('Week')}
                            </div>
                        </div>
                        <div className="w-full flex justify-center py-3 bg-backgroundDB">
                            <div
                                onClick={() => {
                                    setActiveBtn('month')
                                }}
                                className={
                                    activeBtn === 'month'
                                        ? 'border-b-2 cursor-pointer border-red-500'
                                        : 'border-b-2 cursor-pointer border-backgroundDB'
                                }
                            >
                                {t('Month')}
                            </div>
                        </div>
                        <div className="w-full flex justify-center pt-3 pb-10 bg-backgroundDB">
                            <div
                                onClick={() => {
                                    setActiveBtn('annual')
                                }}
                                className={
                                    activeBtn === 'annual'
                                        ? 'border-b-2 cursor-pointer border-red-500'
                                        : 'border-b-2 cursor-pointer border-backgroundDB'
                                }
                            >
                                {t('Annual')}
                            </div>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="w-full mx-2">
                        <div className="flex">
                            <div className="w-full flex flex-col md:flex-row justify-center">
                                <div className="flex justify-center">
                                    <div className="">
                                        <div
                                            onClick={() => {
                                                setActiveBtn2('sales')
                                            }}
                                            className={
                                                activeBtn2 === 'sales'
                                                    ? 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 rounded border-t-2 border-red-500 bg-backgroundDB'
                                                    : 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 border-t-2 border-white'
                                            }
                                        >
                                            <div className="">{t('Sales')}</div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div
                                            onClick={() => {
                                                setActiveBtn2('incomes')
                                            }}
                                            className={
                                                activeBtn2 === 'incomes'
                                                    ? 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 rounded border-t-2 border-red-500 bg-backgroundDB'
                                                    : 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 border-t-2 border-white'
                                            }
                                        >
                                            <div className="">
                                                {t('Incomes')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="">
                                        <div
                                            onClick={() => {
                                                setActiveBtn2('clients')
                                            }}
                                            className={
                                                activeBtn2 === 'clients'
                                                    ? 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 rounded border-t-2 border-red-500 bg-backgroundDB'
                                                    : 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 border-t-2 border-white'
                                            }
                                        >
                                            <div className="">
                                                {t('Clients')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div
                                            onClick={() => {
                                                setActiveBtn2('wishes')
                                            }}
                                            className={
                                                activeBtn2 === 'wishes'
                                                    ? 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 rounded border-t-2 border-red-500 bg-backgroundDB'
                                                    : 'px-5 cursor-pointer mt-2 w-full flex justify-center py-5 border-t-2 border-white'
                                            }
                                        >
                                            <div className="">
                                                {t('Wishes')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Chart/Graph */}
                        <div className="flex justify-center">
                            <div className="h-44 p-12 w-full lg:w-6/12">
                                <Chart1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CloselyGraph
