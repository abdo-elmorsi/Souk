import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductVariation = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="text-md bg-white mt-5 rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Product_Variation')}
                </div>
                {/* Colour */}
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-48">{t('Colour')}</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center px-5 rounded-md">
                            <div className="h-full w-full">
                                <select
                                    value={productForm.color}
                                    name="color"
                                    onChange={handleProductForm}
                                    className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                >
                                    <option value="Color">{t('Colour')}</option>
                                    <option value="Color-1">
                                        {t('Colour')}-1
                                    </option>
                                    <option value="Color-2">
                                        {t('Colour')}-2
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Attributes */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Attributes')}</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center px-5 rounded-md">
                            <div className="h-full w-full">
                                <select
                                    value={productForm.attributes}
                                    name="attributes"
                                    onChange={handleProductForm}
                                    className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                >
                                    <option value="Attributes">
                                        {t('Attributes')}
                                    </option>
                                    <option value="Attributes-1">
                                        {t('Attributes')}-1
                                    </option>
                                    <option value="Attributes-2">
                                        {t('Attributes')}-2
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductVariation
