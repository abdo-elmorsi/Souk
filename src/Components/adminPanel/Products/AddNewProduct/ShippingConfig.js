import React from 'react'
import {useTranslation} from 'react-i18next'

const ShippingConfig = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="text-md bg-white rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Shipping_Configuration')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-full">{t('Free_Shoping')}</div>
                </div>
                <div className="flex items-center my-3 px-5">
                    <div className="w-full">{t('Flat_Rate')}</div>
                </div>
                <div className="flex items-center my-3 px-5">
                    <div className="w-full">{t('Is_Product_Quantity')}</div>
                </div>
                <div className="flex items-center my-3 px-5">
                    <div className="w-full">{t('Multiply')}</div>
                </div>
            </div>
        </>
    )
}

export default ShippingConfig
