import Cookies from 'js-cookie'
import React from 'react'
import { useTranslation } from 'react-i18next'

const DiscountRange = () => {
    const { t } = useTranslation()
    const currentLanguage = Cookies.get('i18next')

    return (
        <div className="mb-10">
            <h3 className="font-semibold text-md uppercase mb-4">
                {t('Discount percentage')}
            </h3>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <input type="radio" className="w-4 h-4" />
                    <label className="text-md font-semibold">
                        <span className="mx-2">
                            {currentLanguage === 'sa' ? '<' : '>'}
                        </span>
                        50%
                    </label>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="radio" className="w-4 h-4" />
                    <label className="text-md font-semibold">
                        <span className="mx-2">
                            {currentLanguage === 'sa' ? '<' : '>'}
                        </span>
                        40%
                    </label>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="radio" className="w-4 h-4" />
                    <label className="text-md font-semibold">
                        <span className="mx-2">
                            {currentLanguage === 'sa' ? '<' : '>'}
                        </span>
                        30%
                    </label>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="radio" className="w-4 h-4" />
                    <label className="text-md font-semibold">
                        <span className="mx-2">
                            {currentLanguage === 'sa' ? '<' : '>'}
                        </span>
                        20%
                    </label>
                </div>
                <div className="flex items-center space-x-4">
                    <input type="radio" className="w-4 h-4" />
                    <label className="text-md font-semibold">
                        <span className="mx-2">
                            {currentLanguage === 'sa' ? '<' : '>'}
                        </span>
                        10%
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DiscountRange
