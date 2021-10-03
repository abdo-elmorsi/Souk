import React from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const ProductPriceStock = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    return (
        <>
            <div className="text-md bg-white mt-5 rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Product_Price_Stock')}
                </div>
                {/* Unit Price */}
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-48">{t('Unit_Price')} *</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="unitPrice"
                            value={productForm.unitPrice}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                {/* Discount Date */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Discount_date')}</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="discountDate"
                            value={productForm.discountDate}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                {/* Discount + Flat */}
                <div className="flex my-3 px-5">
                    <div className="w-48">{t('Discount')} *</div>
                    <div className="flex w-full">
                        <input
                            className={
                                currentLanguageCode === 'sa'
                                    ? 'ml-2 w-full h-10 bg-gray-200 px-5 rounded-md'
                                    : 'mr-2 w-full h-10 bg-gray-200 px-5 rounded-md'
                            }
                            type="text"
                            name="discount"
                            value={productForm.discount}
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
                                        value={productForm.flatOfProductPrice}
                                        name="flatOfProductPrice"
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
                {/* Quantity */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Quantity')}</div>
                    <div className="w-full">
                        <input
                            type="number"
                            name="quantity"
                            value={productForm.quantity}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                {/* SKU */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('SKU')}</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="sku"
                            value={productForm.sku}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPriceStock
