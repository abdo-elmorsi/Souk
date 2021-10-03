import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filteredUsers } from '../../../../redux/reducers/products/allProductsReducer'

const TableHeader = () => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'

    const inputRef = useRef('')
    const dispatch = useDispatch()
    const filterProducts = () => {
        dispatch(filteredUsers(inputRef.current.value.toLowerCase()))
    }
    return (
        <>
            <div className="rounded mt-5 mb-5">
                <div className="rounded flex justify-between">
                    <div className="text-md font-bold flex items-center">
                        {t('All_Product')}
                    </div>
                    <div className="text-sm flex flex-col md:flex-row font-semibold">
                        {/* <div className="cursor-pointer bg-gray-100 flex items-center py-2 px-4 rounded-md border border-black">
                            <select className="outline-none py-1.5 flex justify-center cursor-pointer bg-gray-100 font-semibold">
                                <option>{t('Bulltk_Action')}</option>
                                <option>{t('Bulltk_Action')}-1</option>
                                <option>{t('Bulltk_Action')}-2</option>
                            </select>
                        </div> */}
                        {/* <div
                            className={
                                currentLanguageCode === 'sa'
                                    ? 'cursor-pointer ml-0 mr-0 md:mr-2 md:ml-1 mt-2 md:mt-0 bg-gray-100 flex items-center py-2 px-4 rounded-md border border-black'
                                    : 'cursor-pointer ml-0 mr-0 md:ml-2 md:mr-1 mt-2 md:mt-0 bg-gray-100 flex items-center py-2 px-4 rounded-md border border-black'
                            }
                        >
                            <select className="outline-none py-1.5 flex justify-center cursor-pointer bg-gray-100 font-semibold">
                                <option>{t('All_Seller')}</option>
                                <option>{t('All_Seller')}-1</option>
                                <option>{t('All_Seller')}-2</option>
                            </select>
                        </div> */}
                        <div
                            className={
                                currentLanguageCode === 'sa'
                                    ? 'cursor-pointer ml-0 mr-0 md:mr-1 md:ml-2 mt-2 md:mt-0 bg-gray-100 flex items-center py-2 px-4 rounded-md border border-black'
                                    : 'cursor-pointer ml-0 mr-0 md:mr-2 md:ml-1 mt-2 md:mt-0 bg-gray-100 flex items-center py-2 px-4 rounded-md border border-black'
                            }
                        >
                            <select className="outline-none py-1.5 flex justify-center cursor-pointer bg-gray-100 font-semibold">
                                <option>{t('Sorted_By')}</option>
                                <option>{t('Sorted_By')}-1</option>
                                <option>{t('Sorted_By')}-2</option>
                            </select>
                        </div>
                        <div className="cursor-pointer bg-gray-100 flex items-center mt-2 md:mt-0 py-2 px-4 rounded-md border border-black">
                            <input
                                ref={inputRef}
                                onChange={filterProducts}
                                // placeholder={t('Type_&_Enter')}
                                placeholder="Search by name..."
                                className="py-1.5 bg-gray-100 outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableHeader
