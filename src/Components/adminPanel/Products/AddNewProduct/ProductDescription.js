import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductDescription = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="text-md bg-white mt-5 rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Product_Description')}
                </div>
                <div className="flex items-cente mb-3 mt-6 px-5">
                    <div className="w-48">{t('Description')}</div>
                    <div className="w-full cursor-pointer">
                        <textarea
                            className="w-full bg-backgroundDB border rounded-md px-5 py-5"
                            rows="10"
                            cols="50"
                            // type="text"
                            // maxLength="150"
                            name="productDesc"
                            defaultValue={productForm.productDesc}
                            onChange={handleProductForm}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDescription
