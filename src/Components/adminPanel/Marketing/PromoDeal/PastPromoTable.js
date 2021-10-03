import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filteredPastPromoDeal } from '../../../../redux/reducers/deals/promoDealReducer'

const TableBrowsePg = ({ pastPromoDeal }) => {
    const { t } = useTranslation()

    const inputRef = useRef('')
    const dispatch = useDispatch()
    const filterProducts = () => {
        dispatch(filteredPastPromoDeal(inputRef.current.value.toLowerCase()))
    }
    return (
        <>
            <div className="rounded my-3">
                <div className="rounded flex justify-between">
                    <div className="text-md font-bold flex items-center">
                        {t('Past_Promo')}
                    </div>
                    <div className="text-sm flex flex-col md:flex-row font-semibold">
                        <div className="">
                            <input
                                ref={inputRef}
                                onChange={filterProducts}
                                // placeholder={t('Type_&_Enter')}
                                placeholder="Search by name..."
                                className="w-40 border px-4 py-2 rounded-md border-black"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr className="border">
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    #
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Product')}
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Name')}
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Normal_Price')}
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Discount')}
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Promo_Price')}
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Promo_Period')}
                                </div>
                            </td>
                            <td className="px-2 py-4 text-sm font-semibold">
                                <div className="flex justify-center items-center">
                                    {t('Shop')}
                                </div>
                            </td>
                        </tr>
                    </thead>

                    <tbody>
                        {pastPromoDeal.map((item, index) => (
                            <tr
                                className="border hover:bg-gray-500 text-gray-500 hover:text-white"
                                key={index + 1}
                            >
                                <td className="flex-start text-xs py-2">
                                    <div className="flex justify-center items-center">
                                        {index + 1}
                                    </div>
                                </td>
                                <td className="flex text-lg py-2 justify-center">
                                    <div>
                                        <img
                                            src={item.image}
                                            className="h-12 w-12 rounded cursor-pointer mx-2"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td className="flex-start text-xs py-2 px-2">
                                    <div className="flex justify-center items-center">
                                        {/* {item.name} */}
                                        {item.title.slice(0, 7)}
                                    </div>
                                </td>
                                <td className="flex-start text-xs py-2 px-2">
                                    <div className="flex justify-center items-center">
                                        {/* {item.normalPrice} */}
                                        {item.price}
                                    </div>
                                </td>
                                <td className="flex-start text-xs py-2 px-2">
                                    <div className="flex justify-center items-center">
                                        {/* {item.discount} */}
                                        {item.rating.rate}
                                    </div>
                                </td>
                                <td className="flex-start text-xs py-2 px-2 ">
                                    <div className="flex justify-center items-center">
                                        {/* {item.promoPrice} */}
                                        {item.price}
                                    </div>
                                </td>
                                <td className="flex-start text-xs py-2 px-2">
                                    <div className="flex justify-center items-center">
                                        {/* {item.promoPriod} */}
                                        {item.price}
                                    </div>
                                </td>
                                <td className="flex-start text-xs py-2 px-2">
                                    <div className="flex justify-center items-center">
                                        {/* {item.shop} */}
                                        {item.category}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableBrowsePg
