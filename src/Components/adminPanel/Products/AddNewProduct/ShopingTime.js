import React from 'react'
import { useTranslation } from 'react-i18next'

const ShopingTime = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="text-md bg-white rounded mt-5 pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Estimate_Shipping_Time')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-full">{t('Shipping_Days')}</div>
                </div>
                <div className="w-full px-5">
                    <input
                        type="text"
                        name="shippingDays"
                        value={productForm.shippingDays}
                        onChange={handleProductForm}
                        className="w-full h-10 bg-gray-200 px-5 rounded-md"
                    />
                </div>
            </div>
        </>
    )
}

export default ShopingTime
