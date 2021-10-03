import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductInfo = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="text-md rounded bg-white pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Product_Info')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-48">{t('Product_Name')}</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="productName"
                            value={productForm.productName}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                {/* Category */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Category')}</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center px-5 rounded-md">
                            <div className="h-full w-full">
                                <select
                                    value={productForm.category}
                                    name="category"
                                    onChange={handleProductForm}
                                    className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                >
                                    <option value="Category">
                                        {t('Category')}
                                    </option>
                                    <option value="Category-1">
                                        {t('Category')}-1
                                    </option>
                                    <option value="Category-2">
                                        {t('Category')}-2
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Brand/BrandShop */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Brand/Shop')}</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center px-5 rounded-md">
                            <div className="h-full w-full">
                                <select
                                    value={productForm.brand}
                                    name="brand"
                                    onChange={handleProductForm}
                                    className="outline-none w-full h-10 bg-gray-200 flex items-center"
                                >
                                    <option value="Brand/Shop">
                                        {t('Brand/Shop')}
                                    </option>
                                    <option value="Brand/Shop-1">
                                        {t('Brand/Shop')}-1
                                    </option>
                                    <option value="Brand/Shop-2">
                                        {t('Brand/Shop')}-2
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Unit */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Unit')}</div>
                    <div className="w-full">
                        <input
                            type="number"
                            name="unit"
                            value={productForm.unit}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                {/* Minimum Purchase */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Minimum_Purshase_Qty')}</div>
                    <div className="w-full">
                        <input
                            type="number"
                            name="minPurQty"
                            value={productForm.minPurQty}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                {/* Tags */}
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Tags')}</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="tags"
                            value={productForm.tags}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInfo
