import React from 'react'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filteredCategories } from '../../../../redux/reducers/products/allCategoriesReducer'

const TableHeader = () => {
    const { t } = useTranslation()

    const inputRef = useRef('')
    const dispatch = useDispatch()
    const filterCategories = () => {
        dispatch(filteredCategories(inputRef.current.value.toLowerCase()))
    }
    return (
        <>
            <div className="rounded mt-5 mb-5">
                <div className="rounded flex justify-between">
                    <div className="text-md font-bold flex items-center">
                        {t('All_Product')}
                    </div>
                    <div className="text-sm flex flex-col md:flex-row font-semibold">
                        <input
                            ref={inputRef}
                            onChange={filterCategories}
                            // placeholder={t('Type_&_Enter')}
                            placeholder="Search by name..."
                            className="w-48 border border-black py-3 px-5 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableHeader
