import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const VatTax = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
            <div className="text-md bg-white rounded mt-5 pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Vat_&_Tax')}
                </div>

                <div className="flex flex-col mt-6 mb-3 px-5">
                    <div className="w-48 py-3 px-1">{t('Tax')}</div>
                    <div className="flex w-full">
                        <input
                            className={
                                currentLanguageCode === 'sa'
                                    ? 'ml-2 w-full h-10 bg-gray-200 px-5 rounded-md'
                                    : 'mr-2 w-full h-10 bg-gray-200 px-5 rounded-md'
                            }
                            type="text"
                            name="tax"
                            value={productForm.tax}
                            onChange={handleProductForm}
                        />
                        <div>
                            <div
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'cursor-pointer flex items-center w-full h-10 bg-gray-200 px-5 rounded-md'
                                        : 'cursor-pointer flex items-center w-full h-10 bg-gray-200 px-5 rounded-md'
                                }
                            >
                                <div className="h-full w-24">
                                    <select
                                        value={productForm.flatOfTax}
                                        name="flatOfTax"
                                        onChange={handleProductForm}
                                        className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                    >
                                        <option value="Flat">
                                            {t('Flat')}
                                        </option>
                                        <option value="Flat-1">
                                            {t('Flat')}-1
                                        </option>
                                        <option value="Flat-2">
                                            {t('Flat')}-2
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VatTax
